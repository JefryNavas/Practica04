import { ModalPopoverPage } from './../componentes/modal-popover/modal-popover.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {
  modelData: any;
  public list: Array<any>;
  constructor(
              public modalController: ModalController) { }
  ngOnInit() {
    this.list = [
      {id:1,img:'../../assets/imagenes/iphone13.jpg',
      title: 'Apple iPhone 13 Pro Max', prize: '$980',
      description: 'This Renewed Premium product is shipped and sold by Amazon and has been certified'+
      'by Amazon to work and look like new. With at least 90% battery life, it comes in deluxe,'+
      ' Amazon-branded packaging and is backed by a one-year warranty and technical support.' },

      {id:2,img:'../../assets/imagenes/samsungs21.jpg',
      title: 'Samsung Galaxy S21 ultra', prize: '$679',
      description: 'SAMSUNG Galaxy S21 Ultra 5G Factory Unlocked Android Cell Phone 128GB'
      +'US Version Smartphone Pro-Grade Camera 8K Video 108MP High Res, Phantom Black' },

      {id:3,img:'../../assets/imagenes/mi11.jpg',
      title: 'Xiaomi Mi 11i', prize: '$600',
      description: 'Xiaomi Mi 11i | 128GB 8GB RAM | Factory Unlocked (GSM ONLY | Not'+
      'Compatible with Verizon/Sprint/Boost) | International Model (Cosmic Black)',
      },

      {id:4,img:'../../assets/imagenes/',
      title: 'Poco X3 Pro', prize: '$342',
      description: 'Poco X3 Pro | 128GB 6GB RAM | Desbloqueado de fábrica (sólo GSM | No compatible con Verizon/Sprint/Boost) | Versión internacional (azul escarchado)',
      },

      {id:5,img:'../../assets/imagenes/pixel.jpg',
      title: 'Google Pixel 5A', prize: '$498',
      description: '5G 128GB 6GB RAM desbloqueado de fábrica (solo GSM | Sin CDMA - no compatible con Verizon/Sprint) versión internacional - negro',
      },

      {id:6,img:'../../assets/imagenes/zflip.jpg',
      title: 'Samsung Galaxy Z Flip 3 5G', prize: '$799',
      description: 'Teléfono celular Android desbloqueado de fábrica, versión estadounidense, modo flexible, cámara intuitiva compacta de 128 GB de almacenamiento, color crema',
      },

      {id:7,img:'../../assets/imagenes/samsungsA12.jpg',
      title: 'Samsung Galaxy A12', prize: '$325',
      description: '(SM-A125F/DS) Dual SIM, 128 GB, GSM desbloqueado de fábrica, versión internacional, color negro',
      },

      {id:8,img:'../../assets/imagenes/lgphone.jpg',
      title: 'LG K92 5G ', prize: '$455',
      description: '(128GB, 6GB) 6.7" FHD+, Snapdragon 690, 64MP Quad Camera, US 5G / Global 4G LTE AT&T desbloqueado (Cricket, Global/NO para T-Mobile) LM-K920AM (64GB SD Bundle, Titan Gray)',
      },

      {id:9,img:'../../assets/imagenes/redmi9.jpg',
      title: 'Xiaomi Redmi 9', prize: '$245',
      description: '64GB, 4GB RAM, 6.53 pulgadas Full HD + Cámara AI Quad, LTE Factory, Smartphone desbloqueado, versión Internacional',
      },

      {id:10,img:'../../assets/imagenes/tlc.jpg',
      title: 'TCL 20 Pro', prize: '$420',
      description: 'Smartphone Android desbloqueado con pantalla AMOLED FHD+ de 6.67 pulgadas, sistema de cámara trasera OIS Quad de 48 MP, 6 GB + 256 GB, batería de 4500 mAh con carga inalámbrica, versión 5G de EE. UU., azul marino',
      }
  ];
  }


  async openIonModal(id) {
    const resultado = this.list.find( phone => phone.id === id );
    const modal = await this.modalController.create({
      component: ModalPopoverPage,
      cssClass: 'my-custom-class',
      componentProps:{
        nombre: resultado.title,
        precio: resultado.prize,
        description: resultado.description,
        img: resultado.img
      }
    });
    modal.onDidDismiss().then((modelData)=>{
      if (modelData !== null) {

        this.modelData = modelData.data;
      }
    });
    return await modal.present();

  }
}
