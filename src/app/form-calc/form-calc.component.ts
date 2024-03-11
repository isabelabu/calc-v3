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
  sinal: string = "";

  select(){
    if(this.operacao == "soma"){
      this.sinal = "+";
    } else if(this.operacao == "subtracao"){
      this.sinal = "-";
    } else if(this.operacao == "multiplicacao"){
      this.sinal = "x";
    } else if(this.operacao == "divisao"){
      this.sinal = "/";
    } else if(this.operacao == "modulo"){
      this.sinal = "%";
    } else if(this.operacao == "potencia"){
      this.sinal = "^";
    }
  }

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

  limpar(){
    this.operacao = "";
    this.num1 = 0;
    this.num2 = 0;
    this.sinal = "";
    this.result = 0;
  }
}
