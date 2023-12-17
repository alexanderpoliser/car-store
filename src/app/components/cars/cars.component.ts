import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Observable, of } from 'rxjs';

import { CarsService } from './service/cars.service';

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  cars$: Observable<any[]> | undefined;

  carFound: boolean = true;
  
  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.loadCars();
  }

  loadCars() {
    this.cars$ = this.carsService.getCars();
  }

  filterCars(brand: string, model: string, year: string) {
    const numericYear = +year;

    if (!brand && !model && !year) {
      this.loadCars();
      return;
    }

    this.carsService.filterCars(brand, model, numericYear).subscribe(filteredCars => {
      this.cars$ = of(filteredCars);
      this.carFound = filteredCars.length > 0;
    });
  }
}
