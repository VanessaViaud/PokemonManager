import { Component } from '@angular/core';

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [],
  templateUrl: './generations.html',
  styleUrls: ['./generations.scss'],
})
export class Generations {
  generations = [
    { id: 1, name: 'Generation I', years: '1996-1999', games: ['Red', 'Blue', 'Yellow'] },
    { id: 2, name: 'Generation II', years: '1999-2002', games: ['Gold', 'Silver', 'Crystal'] },
    { id: 3, name: 'Generation III', years: '2002-2006', games: ['Ruby', 'Sapphire', 'Emerald'] },
    { id: 4, name: 'Generation IV', years: '2006-2010', games: ['Diamond', 'Pearl', 'Platinum'] },
    {
      id: 5,
      name: 'Generation V',
      years: '2010-2013',
      games: ['Black', 'White', 'Black 2', 'White 2'],
    },
    {
      id: 6,
      name: 'Generation VI',
      years: '2013]-2016',
      games: ['X', 'Y', 'Omega Ruby', 'Alpha Sapphire'],
    },
  ];

  ngOnInit() {}
}
