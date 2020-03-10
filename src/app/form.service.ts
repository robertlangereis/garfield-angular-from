import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
  constructor() {
  }

  fans = []

  addGarfieldFan(name, phone, email) {
    const newFan = {name: name, phone: phone, email: email};
    console.log('newFan', newFan);
    this.fans.push(newFan);
  }
}
