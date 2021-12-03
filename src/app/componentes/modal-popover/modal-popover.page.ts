import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-modal-popover',
  templateUrl: './modal-popover.page.html',
  styleUrls: ['./modal-popover.page.scss'],
})
export class ModalPopoverPage implements OnInit {

  @Input() nombre: string;
  @Input() precio: string;
  @Input() description: string;
  @Input() img: string;

  constructor(private modalController: ModalController,
    public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  async closeModel() {

    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    const close: string = 'Modal Removed';
    await this.modalController.dismiss(close);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Favoritos',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
