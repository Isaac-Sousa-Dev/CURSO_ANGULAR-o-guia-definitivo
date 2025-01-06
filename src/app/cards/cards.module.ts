import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardButtonCancelComponent } from '../card-button-cancel/card-button-cancel.component';

@NgModule({
  // Declarando os componentes que fazem parte do módulo
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent,
    CardButtonCancelComponent
  ],
  // importando o CommonModule para que as diretivas do Angular possam ser utilizadas
  imports: [
    CommonModule
  ],
  // Exportando os componentes para serem utilizados em outros módulos
  exports: [
    CardComponent, 
    CardRoxoComponent,
    // CardButtonComponent,
    // CardRoxoButtonComponent
  ]
})
export class CardsModule { }
