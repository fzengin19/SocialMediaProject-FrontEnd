
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
     private authService:AuthService, private toastrService:ToastrService, private router : Router) { }

  ngOnInit(): void {
    this.createLoginForm();
    if(localStorage.getItem("token")!=null){
      this.router.navigate(["index"]);
    }
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      let loginModel = Object.assign({},this.loginForm.value)
     
      this.authService.login(loginModel).subscribe(response=>{
        localStorage.setItem("token",response.token)
        localStorage.setItem("firstName",response.user.firstName)
        localStorage.setItem("lastName",response.user.lastName)
        localStorage.setItem("id",response.user.userId.toString())
        localStorage.setItem("email",response.user.email) 
        localStorage.setItem("password",loginModel.password);
        this.toastrService.success("Hoşgeldiniz sayın "+localStorage.getItem("firstName")+" "+localStorage.getItem("lastName"),"Giriş başarılı");
        this.router.navigate(["index"])
      },responseError=>{
        if(responseError.status==0)
        {
          this.toastrService.error("Sunucuya bağlanılamadı","Hata");

        }
        else{
          this.toastrService.error(responseError.error.message);
          console.log(responseError);
        }
       
      })
    }
    else{
      this.toastrService.info("Lütfen bilgileri eksiksiz giriniz");
    }
  }

}
