import { Component,OnInit } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Observable } from "rxjs/Rx";

@Component({
  selector: "list",
  providers: [UserService],
  templateUrl: "pages/list/list.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"]
})

export class ListComponent implements OnInit{ 

    constructor(private page:Page, private userService:UserService) {
        page.backgroundImage = "res://bg_inner";
    };
    ngOnInit(){
    	this.fetch();
    };

    fetch(){
    var self=this;
		console.log('login function gets call')
		self.userService.getData()
		.subscribe(
			(res) => console.dir(res.json()),
			(err) => console.log("Unfortunately we were unable to get data.")
	)};
}
