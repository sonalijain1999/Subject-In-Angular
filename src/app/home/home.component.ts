import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  userData=new FormGroup({
    name:new FormControl('',[Validators.required]),
    id:new FormControl(''),
  });
  username:string='';
  userId:string='123';
  constructor(private service:AppService){

  }
  ngOnInit(){
    this.service.userId.subscribe(result=>{
      this.userId=result; //yha se lo
    })
  }
  save() {
    if (this.userData.valid) {
      this.username = this.userData.value?.name || '';
      this.service.userName.next(this.username); //yha se bhejo service ko
    }
  }
  changeId(){
    this.userId = this.userData.value?.id || '';
    this.service.userId.next(this.userId);
  }
}
