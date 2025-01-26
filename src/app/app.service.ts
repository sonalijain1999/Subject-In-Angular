import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }
  userName=new Subject<string>;
  userId=new Subject<string>;

}
