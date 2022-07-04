import { Component } from '@angular/core';
import { Animal } from 'src/app/models/animal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FiltersDemo';
  animals: Animal[] = []
  a: Animal ={
    hemisphere:'',
    animal:'',
    seasonality:'',
    location:'',
    price: 0
  }

  populateData(){
    this.animals.push(this.a);
    this.a = {
      hemisphere:this.a.hemisphere,
      animal: this.a.animal,
      seasonality: this.a.seasonality,
      location: this.a.location,
      price: this.a.price
    }
    console.log(this.a)
    console.log(this.animals)
    this.a ={
      hemisphere:'',
      animal:'',
      seasonality:'',
      location:'',
      price: 0
    }
  }
}
