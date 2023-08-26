import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css'],
})
export class IngresarGastoComponent {
  nombreGasto: String;
  cantidad: number;
  formularioIncorrecto: boolean;
  textIncorrecto: String;

  constructor(private _presupuestoService: PresupuestoService) {
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textIncorrecto = '';
    this.textIncorrecto = this.textIncorrecto.toUpperCase();
  }
  agregarGasto() {
    if (this.cantidad > this._presupuestoService.restante) {
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Cantidad Ingresada es mayor al Restante';
      this.textIncorrecto = this.textIncorrecto.toUpperCase();
      return;
    }

    if (this.nombreGasto === '' || this.cantidad <= 0) {
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Nombre gasto o cantidad Incorrecta';
      this.textIncorrecto = this.textIncorrecto.toUpperCase();
    } else {
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad,
      };
      //Crear un objeto

      //Envia el objeto a los suscriptores via subjet
      this._presupuestoService.agregarGasto(GASTO);
      //Reseteamos el formulario

      this.formularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }
}
