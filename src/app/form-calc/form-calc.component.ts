import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
  operacao: string = "";
  num1: number = 0;
  num2: number = 0;
  result: number = 0;

  onClick(){
    if(this.operacao == "soma"){
      this.result = this.num1 + this.num2;
    } else if(this.operacao == "subtracao"){
      this.result = this.num1 - this.num2;
    } else if(this.operacao == "multiplicacao"){
      this.result = this.num1 * this.num2;
    } else if(this.operacao == "divisao"){
      this.result = this.num1 / this.num2;
    } else if(this.operacao == "modulo"){
      this.result = this.num1 % this.num2;
    } else if(this.operacao == "potencia"){
      this.result = Math.pow(this.num1, this.num2);
    }
  }
}
