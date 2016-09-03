import {Component} from "@angular/core";
import {FirebaseService} from "../../services/firebase/firebase.service";
import {Router} from "@angular/router";

@Component({
    selector: "mr-navbar",
    styleUrls: ['./client/directives/navbar/navbar.component.html'],
    templateUrl: './client/directives/navbar/navbar.component.html'
})

export class NavbarComponents{
    constructor(private firebase: FirebaseService, private routes: Router){}

    signOut(){
        this.firebase.signOut()
            .then(
                data => {
                    console.log("Signed out success!");
                    this.routes.navigate(['/login']);
                    console.log(data);
                }, err => {
                    console.log("failed to signout!");
                    console.log(err);
                }
            );
    }

}
