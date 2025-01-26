import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private service:AppService){}
  username:string='Sonali';
  userId:string='';

  ngOnInit(){
    this.service.userName.subscribe(result=>{
      this.username=result; //yha se lo
    })
    this.service.userId.subscribe(result=>{
      this.userId=result; //yha se lo
    })
  }
  changeId(){
    this.service.userId.next(this.userId);
  }
}
