import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active',
  templateUrl: './active.component.html',
  styleUrls: ['./active.component.css']
})
export class ActiveComponent implements OnInit {
public title:string;
public user:any;
  constructor() { }
  this.title='data is binding';
 
  this.user ={
    name:"preeti",
    hobbies:"studying.."
  }



