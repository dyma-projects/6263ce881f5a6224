import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  @ViewChild('input') public input !:ElementRef<HTMLInputElement>;
  public valeur: string;

  constructor() { }

  ngOnInit() {
  }

  public handleChange() {
    this.valeur = this.input.nativeElement.value;
  }

}
