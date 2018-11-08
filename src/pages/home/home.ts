import { Component } from '@angular/core';
import { AlertController, NavController, ActionSheetController} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController,
    public actionSheet: ActionSheetController,
    public navCtrl: NavController) {

    }

    showAction(){
      const acSheet = this.actionSheet.create({
        title: 'Test Action',
        buttons: [
          {
            text: 'Information',
            role: 'Info',
            handler: () => {
              console.log('Info Clicked');
            }
          }
        ]
      });
        acSheet.present();
    }

    showAlert1(){
      const alert = this.alertCtrl.create({
        title: 'Alert Data!!!',
        subTitle: 'Musnee',
        buttons: [
          {
            text: 'OK'
          },
          {
            text: 'Cancel',
            handler: () => {
              console.log('Cancel Data');
            }
          }
        ]
      });
      alert.present();
    }

}
