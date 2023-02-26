import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe("A test Recipe", "This is simple a test", "https://www.washingtonpost.com/resizer/yDOe4WHPk6n6yZPrqMiTsZIhMEo=/arc-anglerfish-washpost-prod-washpost/public/ROBCBUCRT76UT24BGTWJ5UKUAY.jpg"),
    new Recipe("A test Recipe", "This is simple a test", "https://www.washingtonpost.com/resizer/yDOe4WHPk6n6yZPrqMiTsZIhMEo=/arc-anglerfish-washpost-prod-washpost/public/ROBCBUCRT76UT24BGTWJ5UKUAY.jpg")
  ];

  ngOnInit(){

  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}
