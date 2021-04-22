import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import {EmailService} from '../../app/Shared/http.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  nodeMailerForm :FormGroup;

  constructor(private formBuilder:FormBuilder,private emailService:EmailService){}

  ngOnInit(){
    this.nodeMailerForm = this.formBuilder.group({
       email:[null,[Validators.required]]
    });
  }

  sendMail(){
    alert("jjj");
    let email  = this.nodeMailerForm.value.email;
    let reqObj = {
      email:email
    }
    this.emailService.sendMessage(reqObj).subscribe(data=>{
      console.log(data);
    })
  }


}
