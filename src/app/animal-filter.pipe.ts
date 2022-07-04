import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'animalFilter'
})
export class AnimalFilterPipe implements PipeTransform {

  transform(animals: any, term: string): any {
    //check if the search term is defined
    if(!animals || !term) return animals;

    //return updated animals array
     animals.filter(function(animal: { Animal: string; }){
      return animal.Animal.toLowerCase().includes(term.toLowerCase());
    })
  }

}