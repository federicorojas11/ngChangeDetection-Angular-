import {
  Component,
  OnInit,
  Injectable,
  ChangeDetectorRef,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PrecioBtcProvider {
  precio: number = 100;
  constructor() {
    // Cada medio segundo se va a generar un nuevo precio del btc
    setInterval(() => {
      this.precio = Math.floor(Math.random() * 1000 + 100);
      console.log(`Precio actual:${this.precio} `);
    }, 500);
  }
}

@Component({
  selector: 'app-reattach',
  templateUrl: './reattach.component.html',
  styleUrls: ['./reattach.component.scss'],
  inputs: ['enVivo'],
})
export class ReattachComponent implements OnInit {
  mostrarEnVivo: boolean = true;

  constructor(
    private _ref: ChangeDetectorRef,
    public precioBtc: PrecioBtcProvider
  ) {}

  set enVivo(valor: boolean) {
    this.mostrarEnVivo = valor;
    if (valor) {
      // reacoplamos el html
      this._ref.reattach();
    } // desacoplamos para no actualizar el html
    else {
      this._ref.detach();
    }
  }

  ngOnInit(): void {}
}
