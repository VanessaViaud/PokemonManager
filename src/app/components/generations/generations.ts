import { Component } from '@angular/core';
import { GenerationsService } from '../../services/generations';
import { GenerationsInterface } from '../../models/generations';

@Component({
  selector: 'app-generations',
  standalone: true,
  imports: [],
  templateUrl: './generations.html',
  styleUrls: ['./generations.scss'],
})
export class Generations {
  generations: GenerationsInterface[] = [];

  constructor(private serviceGenerations: GenerationsService) {}

  ngOnInit() {
    this.generations = this.serviceGenerations.getGenerations();
  }
}
