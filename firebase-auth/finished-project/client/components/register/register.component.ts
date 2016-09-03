import { Component, OnInit } from '@angular/core';
import {FirebaseService} from "../../services/firebase/firebase.service";
import {Router} from "@angular/router";

@Component({
    selector: 'my-register',
    styleUrls: ['./client/components/register/register.component.css'],
    templateUrl: './client/components/register/register.component.html'
})
export class RegisterComponent implements OnInit {

    wrongPass:boolean = false;

    constructor(private firebase: FirebaseService , private routes: Router ) { }

    ngOnInit() {
    }

    onSubmit(data){
        if(data.value.cpass === data.value.password){
            console.log("Password do match!");
        }else{
            console.log("Passwords do not match!!");
            this.wrongPass = true;
            return;
        };

        this.firebase.createAccount(data.value)
            .then(
                data => {
                    console.log("created user success!");
                    this.routes.navigate(['/login']);
                }, err => {
                    console.log(err);
                }
            );
    }

}
