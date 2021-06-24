import { Component } from "@angular/core";
import {
	ActionSheetController,
	LoadingController,
	AlertController
} from "@ionic/angular";
import { Observable } from 'rxjs';

import { Platform } from "@ionic/angular";

import { Router } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  loggedinuserid:any;
  devicetoken:any='';
  isLoading:boolean=false;
  public appPages = [
    {
      title: "Home",
      url: "/tabs/home",
      icon: "home"
    },
    {
      title: "Discover",
      url: "/tabs/discover",
      icon: "search"
    },
    {
      title: "Covid-19",
      url: "/tabs/covid",
      icon: "bug"
    },
  ];
  public appPages2 = [
    {
      title: "Share App",
      url: "/tabs/share",
      icon: "share"
    },
    // {
    //   title: "Rate App",
    //   url: "/tabs/discover",
    //   icon: "search"
    // },
    {
      title: "User",
      url: "/tabs/profile",
      icon: "person"
    },
    {
      title: "Privacy Policy",
      url: "/privacy",
      icon: "shield-checkmark"
    },
  ];

  constructor(
    private platform: Platform,
    private router: Router,
    // public storage: Storage,
    public alertCtrl: AlertController,
    public loadingCtrl:LoadingController
  ) {
    
  }
  ngOnInit(){}
  async doLogout() {
		let alert = await this.alertCtrl.create({
			header: "Logout",
			message: "Are you sure to logout?",
			buttons: [
				{
					text: "Yes",
					handler: () => {
						// this.storage.clear();
						this.router.navigate(["/signin"]);
					}
				},
				{
					text: "No",
					role: "cancel",
					handler: () => {}
				}
			],
			cssClass: "comment-alert"
		});

		await alert.present();
	}

 
}