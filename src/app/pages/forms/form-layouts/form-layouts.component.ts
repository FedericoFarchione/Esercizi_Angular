import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'ngx-form-layouts',
  styleUrls: ['./form-layouts.component.scss'],
  templateUrl: './form-layouts.component.html',
})
export class FormLayoutsComponent {
  name       : string = null;
  surname    : string = null;
  mail       : string = null;
  checkmail  : string = null;

  constructor(){}

  send(){
    let name      = this.name;
    let surname   = this.surname;
    let mail      = this.mail;
    let checkmail = this.checkmail;

//-----controllo nome
    let analysis_name  = name.split("")
    analysis_name.map((v)=>{
      let x = parseInt(v);
      if(isNaN(x) === true) return name
      else{
        return alert('Nome non corretto')
      }
    });
//-----controllo cognome
    let analysis_sur = surname.split("")
    analysis_sur.map((v)=>{
      let x = parseInt(v);
      if(isNaN(x) === true) return surname
      else{
        return alert('Cognome non corretto')
      }
    });
    //-----controllo mail corretta
    if (mail != /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/){
      alert("Mail non valida")
    }else{
      return mail
    }
//-----controllo mail uguale
    if (mail == checkmail){
       return alert('ok')
     }else{
       return alert("la tua mail non corrisponde")
     }
  }
}



  // signup(fi: NgForm) {
  //   let name = fi.value.name
  //   let mail = fi.value.mail
  //   let analysis =  name.split('')
  //   Number(analysis)
  //   analysis.map((v)=>{
  //     if(isNaN(v) === true) fi.value.s_up = name;
  //     else{
  //       return alert('Nome non corretto')
  //     }
  //   });
  //   if (mail != /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/);{
  //     alert('mail non valida')
  //   };
  // }
