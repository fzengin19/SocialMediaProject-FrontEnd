import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup
  constructor(private router:Router ,private formBuilder:FormBuilder, private authService: AuthService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createRegisterForm();
    if(localStorage.getItem("token")!=null){
      this.router.navigate(["index"])
    }
  }
  createRegisterForm(){
    this.registerForm = this.formBuilder.group({
      email: ["",Validators.required],
      firstName: ["",Validators.required],
      lastName: ["",Validators.required],
      password:["",Validators.required],
      rpassword:["",Validators.required]
    })
  }


  register(){
    if(this.registerForm.valid){
      if(this.registerForm.controls.rpassword.value!=this.registerForm.controls.password.value){
        this.toastrService.error("Parolalar eşleşmiyor!","Hatalı parola");
        return
      }
      if(this.registerForm.controls.rpassword.value)
      console.log(this.registerForm.value);
      let registerModel = Object.assign({},this.registerForm.value)

      this.authService.register(registerModel).subscribe(response=>{
        this.toastrService.success("Kayıt başarılı") ;
        this.router.navigate(["index"]);
        localStorage.setItem("token",response.token);
        localStorage.setItem("firstName",response.user.firstName);
        localStorage.setItem("lastName",response.user.lastName);
        localStorage.setItem("id",response.user.userId.toString());
        localStorage.setItem("email",response.user.email);
        this.toastrService.success("Hoşgeldiniz sayın "+localStorage.getItem("firstName")+" "+localStorage.getItem("lastName"));
      },responseError=>{
        console.log(responseError);
        this.toastrService.error("Lütfen internet bağlantınızı kontrol edin!!");
      })
    }
    else{
      this.toastrService.info("Lütfen bilgileri eksiksiz giriniz");
    }
  }
}
