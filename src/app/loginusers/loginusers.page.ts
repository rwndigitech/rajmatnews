import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginusers',
  templateUrl: './loginusers.page.html',
  styleUrls: ['./loginusers.page.scss'],
})
export class LoginusersPage implements OnInit {
  biffclass:any='biff';
  griffclass:any;
  role:any="customer";
  constructor() { }

  ngOnInit() {
  }
  // radioChecked(event){
  //   console.log(event);
  //   if(event.detail.value=="barber"){
  //     this.role="barber";
  //     this.biffclass='biff'
  //     this.griffclass='';
  //   }
  //   if(event.detail.value=="customer"){
  //     this.role="customer";
  //     this.griffclass='biff';
  //     this.biffclass='';
  //   }
  //   console.log(this.role);
  // }
}
