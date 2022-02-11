import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  private readonly recipe1: Recipe = new Recipe(
    'Vegan Chocolate Cake',
    'The indulgent, fudgy vegan chocolate cake',
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chocolate-avocado-cake-51c276b.jpg?quality=90&webp=true&resize=440,400'
  );

  private readonly recipe2: Recipe = new Recipe(
    'Vegan Chocolate Cake',
    'The indulgent, fudgy vegan chocolate cake',
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chocolate-avocado-cake-51c276b.jpg?quality=90&webp=true&resize=440,400'
  );

  recipes: Recipe[] = [this.recipe1, this.recipe2];
  constructor() {}

  ngOnInit(): void {}
}
