import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase/firebase.service";
import {Router} from "@angular/router";

@Component({
    selector: 'my-login',
    styleUrls: ['./client/components/login/login.component.css'],
    templateUrl: './client/components/login/login.component.html',
})
export class LoginComponent implements OnInit {

    wrongPass:boolean = false;

    constructor(private firebase: FirebaseService, private routes: Router) { }

    ngOnInit() { }


    onSubmit(loginForm){
        this.firebase.loginAccount(loginForm.value)
            .then(
                data => {
                    console.log(data);
                    console.log("login success!");
                    this.routes.navigate(['/home']);
                }, err => {
                    console.log(err);
                    this.wrongPass = true;
                }
            );
    }
}
