import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Part } from '../interface/Part';

@Injectable({
  providedIn: 'root'
})
export class PartsService {
  private parts = [
    
    { partNumber: 'L850R4NSF5', category: 'Turbocharger', model: '.48 T2 Masterpower R363', year: 2021, price: 799.99,  image: '../../../assets/images/parts/masterpower.png' },
    { partNumber: 'L8500YNSF5', category: 'Intakes', model: '63-1589 Cold Air Intake- K&N', year: 2018, price: 649.99, image: '../../../assets/images/parts/k&n.png' },
    { partNumber: 'L850H4NSF5', category: 'Intercoolers', model: 'Metalhorse - Garrett Street 3', year: 2024, price: 499.99, image: '../../../assets/images/parts/intercooler.png' },
    { partNumber: 'L450R9JBF5', category: 'Tires', model: 'Michelin Primacy 3 - 245X50x18', year: 2024, price: 149.99, image: '../../../assets/images/parts/tires.png' },
    { partNumber: 'L470R9JBF5', category: 'Wheels',  model: 'GT7 BBS CI-R - 17x7 - (4x100)', year: 2023, price: 1199.99, image: '../../../assets/images/parts/bbs.png' },
    { partNumber: 'L470R9KLF5', category: 'Wheels',  model: 'GT7 TE37 - 18x8 - (5x112)', year: 2023, price: 1199.99, image: '../../../assets/images/parts/te37.png' },
    { partNumber: 'L488R9JBF5', category: 'Springs', model: 'Upgrade Kit for Honda Civic/Si Eibach', price: 279.99,  year: 2023, image: '../../../assets/images/parts/eibach.png' },
  ];

  getParts(): Observable<Part[]> {
    return of(this.parts);
  }

  filterParts(partNumber: string, category: string, model: string, year: number, price: number): Observable<Part[]> {
    return this.getParts().pipe(
      map(parts => {
        const filteredParts = parts.filter(part => {
          const foundByPartNumber = partNumber.trim().length ? part.partNumber.toLowerCase().includes(partNumber.trim().toLowerCase()) : true;
          const foundByCategory = category.trim().length ? part.category.toLowerCase().includes(category.trim().toLowerCase()) : true;
          const foundByModel = model.trim().length ? part.model.toLowerCase().includes(model.trim().toLowerCase()) : true;
          const foundByYear = year ? part.year === year : true;
          const foundByPrice = price ? part.price <= price : true;
          return foundByPartNumber && foundByCategory && foundByModel && foundByYear && foundByPrice;
        });
        return filteredParts;
      })
    );
  }
}
