import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur: number;
  @Output() private result: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public increment(){
    this.result.emit(this.compteur += 1);
  }

  public decrement(){
    this.result.emit( this.compteur -= 1);
  }
}
