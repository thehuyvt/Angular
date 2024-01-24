import { Component } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault, HomeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  public loginName = 'admin';

}
