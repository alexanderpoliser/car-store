import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private cars = [
    { brand: 'BMW', model: 'M2 Coupe', year: 2020, image: '../../../assets/images/bmw/m2.png' },
    { brand: 'BMW', model: 'M3 Competition', year: 2019, image: '../../../assets/images/bmw/m3.png' },
    { brand: 'BMW', model: 'X1', year: 2017, image: '../../../assets/images/bmw/x1.png' },
    { brand: 'Ford', model: 'Bronco', year: 2021, image: '../../../assets/images/ford/bronco.png' },
    { brand: 'Ford', model: 'Ranger', year: 2023, image: '../../../assets/images/ford/ranger.png' },
    { brand: 'Ford', model: 'Transit', year: 2023, image: '../../../assets/images/ford/transit.png' },
    { brand: 'Honda', model: 'Accord', year: 2024, image: '../../../assets/images/honda/accord.png' },
    { brand: 'Honda', model: 'HRV', year: 2022, image: '../../../assets/images/honda/hrv.png' },
    { brand: 'Honda', model: 'Civic', year: 2023, image: '../../../assets/images/honda/civic.png' },
    { brand: 'Nissan', model: 'Frontier', year: 2020, image: '../../../assets/images/nissan/frontier.png' },
    { brand: 'Nissan', model: 'Kicks', year: 2023, image: '../../../assets/images/nissan/kicks.png' },
    { brand: 'Nissan', model: 'Versa', year: 2024, image: '../../../assets/images/nissan/versa.png' },
    { brand: 'Porsche', model: '718', year: 2024, image: '../../../assets/images/porsche/718.png' },
    { brand: 'Porsche', model: '911', year: 2019, image: '../../../assets/images/porsche/911.png' },
    { brand: 'Porsche', model: 'Cayenne', year: 2021, image: '../../../assets/images/porsche/cayenne.png' },
  ];

  getCars(): Observable<any[]> {
    return of(this.cars);
  }

  filterCars(brand: string, model: string, year: number): Observable<any[]> {
    return this.getCars().pipe(
      map(cars =>
        cars.filter(car =>
          (!brand || car.brand.toLowerCase().includes(brand.toLowerCase())) &&
          (!model || car.model.toLowerCase().includes(model.toLowerCase())) &&
          (isNaN(year) || car.year === year)
        )
      )
    );
  }
  
}
