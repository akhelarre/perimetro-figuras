// src/app/models/figuras.model.ts

export abstract class FiguraGeometrica {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  abstract calcularPerimetro(): number;
}

export class Circulo extends FiguraGeometrica {
  radio: number;

  constructor(radio: number) {
    super('Círculo');
    this.radio = radio;
  }

  override calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}

export class TrianguloEscaleno extends FiguraGeometrica {
  ladoA: number;
  ladoB: number;
  ladoC: number;

  constructor(nombre: string, ladoA: number, ladoB: number, ladoC: number) {
    super(nombre);
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }

  override calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}

export class TrianguloEquilatero extends FiguraGeometrica {
  ladoA: number;

  constructor(ladoA: number) {
    super('Triángulo Equilátero');
    this.ladoA = ladoA;
  }

  override calcularPerimetro(): number {
    return 3 * this.ladoA;
  }
}
