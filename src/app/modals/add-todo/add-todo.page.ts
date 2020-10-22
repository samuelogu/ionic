import { Component, OnInit } from '@angular/core';
import {ModalController, AlertController} from "@ionic/angular";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.page.html',
  styleUrls: ['./add-todo.page.scss'],
})
export class AddTodoPage implements OnInit {

  todo:string

  constructor(
      private modalController: ModalController,
      private alert: AlertController
  ) { }

  ngOnInit() {
  }

  /*addTodo() {
    if (!this.input) {
      alert('Todo is required!')
      return false
    }

    const newTodo = {
      title: this.input,
      isComplete: false
    }

    // const inputField:any = document.getElementById('todo')
    // console.log(inputField);

    this.todos.push(newTodo)
    this.input = ''

  }*/

  async closeModal() {
    await this.modalController.dismiss({
      'dismissed': true
    });
  }

  async addTodo() {

    if (!this.todo) {
      const alert = await this.alert.create({
        header: 'Add Todo',
        message: 'Todo input is required!',
        buttons: ['OK']
      });

      await alert.present();
    }

    const newTodo = {
      title: this.todo,
      isComplete: false
    }

    const todos = localStorage.todos ? JSON.parse(localStorage.todos) : []
    todos.push(newTodo)
    localStorage.todos = JSON.stringify(todos)
    this.todo = ''

    const alert = await this.alert.create({
      header: 'Add Todo',
      message: 'Todo successfully added!',
      buttons: ['OK']
    });

    await alert.present();

  }

}
