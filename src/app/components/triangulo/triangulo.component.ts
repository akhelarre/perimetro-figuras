import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TrianguloEscaleno } from '../../models/figuras.model';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrianguloComponent {
  ladoAStr: string = '';
  ladoBStr: string = '';
  ladoCStr: string = '';
  resultado: string = '';

  calcularPerimetro(): void {
    const a = Number(this.ladoAStr);
    const b = Number(this.ladoBStr);
    const c = Number(this.ladoCStr);

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a > 0 && b > 0 && c > 0) {
      const figura = new TrianguloEscaleno('Triángulo Escaleno', a, b, c);
      const perimetro = figura.calcularPerimetro().toFixed(2);
      this.resultado = `El perímetro es ${perimetro} cm`;
    } else {
      this.resultado = 'Por favor, ingrese valores válidos mayores a 0 para los tres lados.';
    }
  }
}
