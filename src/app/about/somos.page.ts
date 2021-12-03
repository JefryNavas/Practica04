import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-somos',
  templateUrl: './somos.page.html',
  styleUrls: ['./somos.page.scss'],
})
export class SomosPage implements OnInit {

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '../../assets/testimg/cell_somos.jpg',
      titulo: 'Somos',
      desc: 'Somos CellTest una empresa dedicada a la importación de celulares de todo tipo, además ofreciendo soporte técnico a marcas como Samsumg, IPhone y Xiaomi ',
    },
    {
      img: '../../assets/testimg/mision.jpg',
      titulo: 'Misión',
      desc: 'Brindar la mejor atención, con la mejor calidad y precios en todos nuestros equipos tecnológicos',

    },
    {
      img: '../../assets/testimg/vision.jpg',
      titulo: 'Visión',
      desc: 'Ser una de las mejores tiendas de Quito en la venta de productos tecnológicos demostrando confiabilidad a nuestra clientela',

    },
    {
      img: '../../assets/testimg/objetivo.jpg',
      titulo: 'Objetivo',
      desc: 'Brindar la mejor tecnología y mejor atención mediante la calidad de nuestros precios y productos, para lograr una fiel y feliz clientela.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
