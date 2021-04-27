import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carpetas',
  templateUrl: './carpetas.page.html',
  styleUrls: ['./carpetas.page.scss'],
})
export class CarpetasPage {
todoList = [{
  itemName: 'Coding',
  itemDueDate: '13-10-21',
  itemPriority: 'high',
  itemCategory: 'work'
},
{
  itemName: 'Desing',
  itemDueDate: '28-10-21',
  itemPriority: 'high',
  itemCategory: 'work'
},
{
  itemName: 'Shopping',
  itemDueDate: '30-10-21',
  itemPriority: 'high',
  itemCategory: 'work'
},]
Carpeta : number = Date.now()
  constructor() { }

 
}
