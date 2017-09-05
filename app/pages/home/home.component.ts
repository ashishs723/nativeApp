import { Component,OnInit } from "@angular/core";
import { Page } from "ui/page";
import { Router } from "@angular/router";

@Component({
  selector: "login",
  templateUrl: "./pages/home/home.html",
  styleUrls: ["pages/home/home-common.css","pages/home/home.css"]
})

export class HomeComponent implements OnInit{    
    constructor(private page:Page) {
        page.backgroundImage = "res://bg_inner";
    };
    ngOnInit(){};
};