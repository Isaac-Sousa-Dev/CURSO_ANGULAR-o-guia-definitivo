import { Component, ViewEncapsulation } from '@angular/core';
interface IPlano {
  infos: IInfo
}
interface IInfo {
  tipo: string,
  preco: number
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom // Nada global afetará o componente, e nada do componente afetará o global
  // encapsulation: ViewEncapsulation.Emulated // PADRÃO utilizado pelo Angular
  // encapsulation: ViewEncapsulation.None // Basicamente, remove o encapsulamento desse componente
})
export class CardComponent {

  plano: IPlano = {
    infos: {
      tipo: 'Simples',
      preco: 1000
    }
  }

}
