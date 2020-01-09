import { Component,OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'myndTree';


  nameFormControl = new FormControl('', [
    Validators.required,
    // Validators.email,
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  subjectFormControl = new FormControl('', [
    Validators.required,
    // Validators.email,
  ]);


  
  addressFormControl = new FormControl('', [
    Validators.required,
    // Validators.email,
  ]);


  ngOnInit() {

      window.onscroll = function() {myFunction()};
    
    var navbar = document.getElementById("navbr");
    var sticky = navbar.offsetTop;
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }

    
    
  }


}
