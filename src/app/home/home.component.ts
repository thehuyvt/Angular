import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  public name = 'Huy Thế Phạm';

  public age = 22;


  public resetName():void{
    console.log("Reseted your name on input.")
    this.name = '';
  }
}
