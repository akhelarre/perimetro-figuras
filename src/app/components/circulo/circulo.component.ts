import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Circulo } from '../../models/figuras.model';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CirculoComponent {
  radio: number | null = null;
  resultado: string = '';

  calcularPerimetro(): void {
    if (this.radio !== null && this.radio > 0) {
      // Se pasan los dos argumentos requeridos por el modelo UML: nombre y radio
      const figura = new Circulo(Number(this.radio));
      const perimetro = figura.calcularPerimetro().toFixed(2);
      this.resultado = `El perímetro del círculo es ${perimetro} cm`;
    } else {
      this.resultado = 'Por favor, ingrese un radio válido mayor a 0.';
    }
  }
}
