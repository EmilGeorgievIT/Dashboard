import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getData(){
    return [
      {
        name: 'Emil',
        lastName: 'Georgiev',
        address: 'Ireland Dublin',
        email: 'emil_georgiev_it@abv.bg'
      }
    ]
  }
}
