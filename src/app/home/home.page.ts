import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectChangeEventDetail } from '@ionic/angular';
import { IonSelectCustomEvent } from '@ionic/core';
import { CirculoComponent } from '../components/circulo/circulo.component';
import { TrianguloComponent } from '../components/triangulo/triangulo.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    CirculoComponent,
    TrianguloComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePage {
  figuraSeleccionada: string = '';

  manejarSeleccionFigura($event: IonSelectCustomEvent<SelectChangeEventDetail>): void {
    this.figuraSeleccionada = $event.detail.value;
  }

  esCirculo(): boolean {
    return this.figuraSeleccionada === 'circulo';
  }

  esTriangulo(): boolean {
    return this.figuraSeleccionada === 'triangulo';
  }
}
