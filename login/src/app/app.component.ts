import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
 
  title = 'login';
  login!: FormGroup

  constructor (private fb:FormBuilder){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  movetoregister(){

  }
}
