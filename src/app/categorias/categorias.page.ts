import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../guards/auth.guard';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() {
    this.presentToast();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Bem-vindo a TechTudo!',
      position: 'top',
      duration: 3000
    });
    toast.present();
  }

}
