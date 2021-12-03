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
      title: 'Apple iPhone 13 Pro Max',
      description: 'This Renewed Premium product is shipped and sold by Amazon and has been certified'+
      'by Amazon to work and look like new. With at least 90% battery life, it comes in deluxe,'+
      ' Amazon-branded packaging and is backed by a one-year warranty and technical support.' },
      {id:2,img:'../../assets/imagenes/samsungs21.jpg',
      title: 'Samsung Galaxy S21 ultra',
      description: 'SAMSUNG Galaxy S21 Ultra 5G Factory Unlocked Android Cell Phone 128GB'
      +'US Version Smartphone Pro-Grade Camera 8K Video 108MP High Res, Phantom Black' },
      {id:3,img:'../../assets/imagenes/mi11.jpg',
      title: 'Xiaomi Mi 11i',
      description: 'Xiaomi Mi 11i | 128GB 8GB RAM | Factory Unlocked (GSM ONLY | Not'+
      'Compatible with Verizon/Sprint/Boost) | International Model (Cosmic Black)',
      },
      {id:4,img:'../../assets/imagenes/',
      title: '',
      description: '',
      },
      {id:5,img:'../../assets/imagenes/',
      title: '',
      description: '',
      },
      {id:6,img:'../../assets/imagenes/',
      title: '',
      description: '',
      },
      {id:7,img:'../../assets/imagenes/',
      title: '',
      description: '',
      },
      {id:8,img:'../../assets/imagenes/',
      title: '',
      description: '',
      },
      {id:9,img:'../../assets/imagenes/',
      title: '',
      description: '',
      },
      {id:10,img:'../../assets/imagenes/',
      title: '',
      description: '',
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
