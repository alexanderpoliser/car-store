import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Observable, Subscription, of } from 'rxjs';

import { CarsService } from './service/cars.service';
import { Car } from './interface/Car';

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
  cars$: Observable<Car[]> | undefined;
  carFound: boolean = true;
  invalidYear: boolean = true;
  private subscriptions: Subscription[] = [];

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.loadCars();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  loadCars() {
    const carsSubscription = this.carsService.getCars().subscribe((cars) => {
      this.cars$ = of(cars);
    });
    this.subscriptions.push(carsSubscription);
  }

  filterCars(brand: string, model: string, year: string) {
    const numericYear = +year;

    const filtersEmpty = !brand && !model && !year;

    if (filtersEmpty) {
      this.loadCars();
      return;
    }

    const filterSubscription = this.carsService
      .filterCars(brand, model, numericYear)
      .subscribe((filteredCars) => {
        this.cars$ = of(filteredCars);
        this.carFound = filteredCars.length > 0;
      });

    this.subscriptions.push(filterSubscription);
  }
}
