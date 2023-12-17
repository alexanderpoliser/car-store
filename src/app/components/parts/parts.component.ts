import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Observable, of, Subscription } from 'rxjs';

import { Part } from './interface/Part';
import { PartsService } from './service/parts.service';

@Component({
  selector: 'app-parts',
  standalone: true,
  imports: [CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss'],
})
export class PartsComponent implements OnInit {
  parts$: Observable<Part[]> | undefined;
  partFound: boolean = true;
  private subscriptions: Subscription[] = [];

  constructor(private partsService: PartsService) {}

  ngOnInit(): void {
    this.loadParts();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  loadParts() {
    const partsSubscription = this.partsService
      .getParts()
      .subscribe((parts) => {
        this.parts$ = of(parts);
      });
    this.subscriptions.push(partsSubscription);
  }

  filterParts(
    partNumber: string,
    category: string,
    model: string,
    year: string,
    price: string
  ) {
    const numericYear = +year;

    const numericPrice = +price;

    const filtersEmpty = !partNumber && !category && !model && !year && !price;

    if (filtersEmpty) {
      this.loadParts();
      return;
    }

    const filterSubscription = this.partsService
      .filterParts(partNumber, category, model, numericYear, numericPrice)
      .subscribe((filteredParts) => {
        this.parts$ = of(filteredParts);
        this.partFound = filteredParts.length > 0;
      });

    this.subscriptions.push(filterSubscription);
  }
}
