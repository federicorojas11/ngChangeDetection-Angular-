import {
  Component,
  OnInit,
  ChangeDetectorRef,
  Injectable,
} from '@angular/core';
import * as Mock from 'mockjs';

@Injectable({
  providedIn: 'root',
})
export class DataListProvider {
  /*
    Método que devuelve una lista de nombres aleatorios:
    @return Object[]
  */
  get data() {
    const RandonName = Mock.Random;
    return [
      RandonName.first(),
      RandonName.first(),
      RandonName.first(),
      RandonName.first(),
    ];
  }
}

@Component({
  selector: 'app-detach',
  templateUrl: './detach.component.html',
  styleUrls: ['./detach.component.scss'],
})
export class DetachComponent implements OnInit {
  constructor(
    private _ref: ChangeDetectorRef,
    public dataListProvider: DataListProvider
  ) {}

  ngOnInit(): void {
    // Desacomplamos el componente del html con el método detach
    this._ref.detach();
    /*
      Cuando un componente está desacoplado solo hay
      dos formas de decirle que replique los cambios
      en el html:
      1. detectChanges() --> detecta los cambios en
      ese momento y actualiza el html
      2. reattach() --> sirve para volver a acoplar
      el componente (ts & html)
    */

    // Cada 3 segundos, le decimos a Angular que revise los nombres
    // generados. Es decir, que detecte los cambios en el componente
    // y los replique en el html
    setInterval(() => {
      this._ref.reattach();
    }, 3000);
  }
}
