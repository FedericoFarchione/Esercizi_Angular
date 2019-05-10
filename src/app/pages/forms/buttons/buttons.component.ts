import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'ngx-buttons',
  styleUrls: ['./buttons.component.scss'],
  templateUrl: './buttons.component.html',
})
export class ButtonsComponent {
  parr      : number = null;
  parr1     : number = null;
  somma     : number = null;
  name      : string = null;
  surname   : string = null;
  name_sur  : string = null;
  constructor(){}

  sum(){
    this.somma = this.parr + this.parr1;
  }
  meno(){
    this.somma = this.parr - this.parr1;
  }
  moltipli(){
    this.somma = this.parr * this.parr1;
  }
  dividi(){
    this.somma = this.parr / this.parr1;
  }
  conc(){
    this.name_sur = this.name.concat(' ' + this.surname);
  }
}
  // somma(f: NgForm) {
  //   let x = parseFloat(f.value.first) + parseFloat(f.value.second)
  //   return f.value.res = x
  //
  // }
  // meno(f: NgForm) {
  //   let x = parseFloat(f.value.first) + parseFloat(f.value.second)
  //   return f.value.res = x
  // }
  // moltipli(f: NgForm) {
  //   let x = parseFloat(f.value.first) + parseFloat(f.value.second)
  //   return f.value.res = x
  // }
  // dividi(f: NgForm) {
  //   let x = parseFloat(f.value.first) + parseFloat(f.value.second)
  //   return f.value.res = x
  // }
  // // }
  // conc(f: NgForm){
  //   let x = f.value.name.concat(' ' + f.value.surname)
  // };
// }





  // meno(){
  //   let a = (<HTMLInputElement>document.getElementById("par1")).value;
  //   let b = (<HTMLInputElement>document.getElementById("par2")).value;
  //   let meno = String(parseFloat(a)-parseFloat(b));
  //   return (<HTMLInputElement>(document.getElementById("risult"))).value = meno;
  // }
  // moltipli(){
  //   let a = (<HTMLInputElement>document.getElementById("par1")).value;
  //   let b = (<HTMLInputElement>document.getElementById("par2")).value;
  //   let moltipli = String(parseFloat(a)*parseFloat(b));
  //   return (<HTMLInputElement>(document.getElementById("risult"))).value = moltipli;
  // }
  // dividi(){
  //   let a = (<HTMLInputElement>document.getElementById("par1")).value;
  //   let b = (<HTMLInputElement>document.getElementById("par2")).value;
  //   let dividi = String(parseFloat(a)/parseFloat(b));
  //   return (<HTMLInputElement>(document.getElementById("risult"))).value = dividi;
