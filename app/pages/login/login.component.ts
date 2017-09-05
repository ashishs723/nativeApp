import { Component,OnInit } from "@angular/core";
import { User } from "../../shared/user/user";
import { Page } from "ui/page";
import { UserService } from "../../shared/user/user.service";
import { Observable } from "rxjs/Rx";
import { Router } from "@angular/router";
import * as ApplicationSettings from "application-settings";

import {
    FormBuilder,
    Validators
} from '@angular/forms';


@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "./pages/login/login.html",
  styleUrls: ["pages/login/login-common.css","pages/login/login.css"]
})

export class LoginComponent implements OnInit{
    user:User;

    constructor(private page:Page,private userService:UserService, private router: Router) {
        page.backgroundImage = "res://bg_inner";
        this.user=new User();
    };
    ngOnInit(){
      console.dir(ApplicationSettings)
    }

    submit() {
		if(!this.user.email || !this.user.password ){
			alert("All fields required!")
		}
        else{
	       this.getRegister()	        
		}
    };

    fetch(){
		console.log('login function gets call')

		this.userService.getData()
		.subscribe(
			(res) => console.dir(res.json()),
			(err) => console.log("Unfortunately we were unable to get data.")
		)

    };

    getRegister(){
		this.userService.register(this.user)
		.subscribe(
			(res) => {
                console.log('registered',res.text());
                //alert(res.text());
                this.router.navigate(["/list"]);
            },(err) => {
                console.log("Unfortunately we were unable to create your account.");
                alert(err.text());
            }
        )
    };

    //logIn(){
        //this.userService.login(this.user)
        //.subscribe(
        //   (res) => {
          //      this.router.navigate(["/list"]);
          //      console.dir(res);

           // },
           // (err) => {
            //    console.log("Unfortunately we were unable to login.");
            //    alert(err.text());
           // }
        //)
    //};

}
