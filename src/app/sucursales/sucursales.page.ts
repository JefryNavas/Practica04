import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sucursales',
  templateUrl: './sucursales.page.html',
  styleUrls: ['./sucursales.page.scss'],
})
export class SucursalesPage implements OnInit {

  sucursales: { img: string, titulo: string, dir: string, mapa:string }[] = [
    {
      img: '../../assets/testimg/basilica.jpg',
      titulo: 'Centro de Quito',
      dir: 'Estamos Ubicados en el Sector de la Basílica',
      mapa: 'https://goo.gl/maps/QeXCjtorme1JNbBVA'
    },
    {
      img: '../../assets/testimg/ccatahualpa.jpg',
      titulo: 'Sur de Quito',
      dir: 'Estamos Ubicados en el Centro Comercial Atahualpa',
      mapa: 'https://goo.gl/maps/2gWmewPEHfN4cJH17'

    },
    {
      img: '../../assets/testimg/caracol.jpg',
      titulo: 'Norte de Quito',
      dir: 'Estamos Ubicados en el Centro Comercial Caracol',
      mapa: 'https://goo.gl/maps/SGDxKT8rxdvPDgpr6'
    },
    {
      img: '../../assets/testimg/turismo.JPG',
      titulo: 'Sangolquí',
      dir: 'Estamos Ubicados en el parque Turismo',
      mapa: 'https://goo.gl/maps/axQmFaJ98aTaucUdA'

    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
