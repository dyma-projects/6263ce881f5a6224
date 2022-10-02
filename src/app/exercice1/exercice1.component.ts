import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {
resultat($event: any) {
throw new Error('Method not implemented.');
}
  public compteur: number = 0;
  public result: number = 0;
  constructor() { }

  ngOnInit() {
  }

  public decrement(compteur:number){
    this.result = compteur;
  }

  public increment(compteur:number){
    this.result = compteur;
  }

}
