import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsModule } from './cards/cards.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  // Declarando os componentes que fazem parte do módulo
  declarations: [
    AppComponent
  ],

  // importando o CommonModule para que as diretivas do Angular possam ser utilizadas
  // importando módulos para que os componentes possam serem utilizados
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardsModule,
    BrowserAnimationsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
