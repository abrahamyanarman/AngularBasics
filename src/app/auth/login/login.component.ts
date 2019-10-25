import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UsersService} from "../../shared/services/users.service";
import {User} from "../../shared/models/user.model";
import {Message} from "../../shared/models/message.model";
import {AuthService} from "../../shared/services/auth.service";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'hm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  message:Message;

  constructor(
    private userService:UsersService,
    private authService:AuthService,
    private router:Router,
    private rout:ActivatedRoute
  ) {

  }

  ngOnInit() {
    this.message = new Message("denger","");
    this.rout.queryParams.subscribe((params:Params)=>{
      if (params['nowCanLogin']){
        this.showMessage('Now we can Login!','success');
      }
    })

    this.form = new FormGroup({
      'email':new FormControl(null,
        [Validators.required,Validators.email]),
      'password':new FormControl(null,
        [Validators.required,Validators.minLength(6)])
    });
  }

  private showMessage(text:string,type:string = 'danger'){
    this.message = new Message(type,text);
    window.setTimeout(()=>{
      this.message.text = '';
    },5000);
  }

  onSubmit(){
    const formData = this.form.value;

    this.userService.getUserByEmail(formData.email)
      .subscribe((user:User)=>{

        if (user){
          if (user.password === formData.password){
            this.message.text = '';
            window.localStorage.setItem('user',JSON.stringify(user))
            this.authService.login();
            this.router.navigate(['/system','bill']);
          }else {
            this.showMessage("username or password is wrong!")
          }
        }else {
          this.showMessage("User not exist!");
        }
      })
  }

}
