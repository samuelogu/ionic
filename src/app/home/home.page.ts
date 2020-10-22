import { Component } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {AddTodoPage} from "../modals/add-todo/add-todo.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  todos: Array<{ [key: string]: any; }>
  input:string

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.todos = localStorage.todos ? JSON.parse(localStorage.todos) : []
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: AddTodoPage,
      cssClass: 'modal-50'
    });
    return await modal.present();
  }



}
