import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from 'src/app/services/service.index';



@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
/*Para acceder a todo el DOM */
  constructor(
  public _ajustes: SettingsService) { }

  ngOnInit(): void {
  }
  /*tema es el id referenciado del component html */
cambiarColor(tema: string, link: any){

  this.aplicarCheck(link);
  this._ajustes.aplicarTema( tema );
}

aplicarCheck(link: any ){
// tslint:disable-next-line: prefer-const
let selectores: any = document.getElementsByClassName('selector');

// tslint:disable-next-line: prefer-const
for ( let ref of selectores ){
  ref.classList.remove('working');
}
link.classList.add('working');
}

  colocarCheck() {
    const selectores: any = document.getElementsByClassName('selector');
    const tema = this._ajustes.ajustes.tema;
    for (const ref of selectores) {
      if (ref.getAttribute('data-theme') === tema) {
        ref.classList.add('working');
        break;
      }
}
}

}
