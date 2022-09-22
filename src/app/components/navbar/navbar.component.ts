import { Component, OnInit, HostListener, Inject } from '@angular/core';  
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserSearchModel } from 'src/app/models/userSearchModel';
import { UserService } from 'src/app/services/user.service';
import { trigger, state, transition, style, animate } from '@angular/animations'; 
import { DOCUMENT } from '@angular/common';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})
export class NavbarComponent implements OnInit {
  userName:string;
  searchList:UserSearchModel[];
  navbarFixed:boolean=false;
  constructor( private router: Router,private userService:UserService, private toastrService:ToastrService) { }


  ngOnInit(): void {
      this.userName=localStorage.getItem("firstName").toUpperCase()+" "+localStorage.getItem("lastName").toUpperCase();

    }



  logout(){
    localStorage.clear();
    this.router.navigate(["login"]);
  }
  explore(){
    this.router.navigate(["explore"]);
  }
  profile(){
    this.router.navigate(["profile"]);
  }

  toggler(){
    var down = document.getElementById("angle-down")
    if(down!=null){
      down.setAttribute("class","fa-solid fa-angle-up");
    }
    else{
      var up = document.getElementById("angle-up")
      if(up!=null){
        up.setAttribute("class","fa-solid fa-angle-down");
      }
    }
  }

  friendRequests(){
    this.router.navigate(["friendrequests"]);
  }
  search(){
    var searchtext = (<HTMLInputElement>document.getElementById("search")).value;
    if(searchtext!=""){
      this.userService.search(searchtext).subscribe(response => {
        console.log(response);
        for (const item of response.data) {
          this.toastrService.info(item.fullName);
        }
        
      },responseError=>{
        this.toastrService.error("Bir hata daha oluştu")
      })
      
    }

  }
}
