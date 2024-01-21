import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  public name = 'Huy Thế Phạm';
  public age = 19;
  public fruits = ['Orange', 'Apple', 'Mango', 'Lemon', 'Strawbery']
  public listFruits = [
    {name: 'Orange', price: 12, discount: 10},
    {name: 'Apple', price: 32, discount: 0},
    {name: 'Mango', price: 16, discount: 11},
    {name: 'Lemon', price: 8, discount: 0}
];
  public resetName():void{
    console.log("Reseted your name on input.")
    this.name = '';
  }
}
