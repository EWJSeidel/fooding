import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pesto Pasta', 'Penne pasta with pesto n cream', 'https://i.ytimg.com/vi/fqLZ5Wmf9YE/maxresdefault.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
