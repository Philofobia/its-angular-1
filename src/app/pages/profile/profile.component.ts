import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  pFisica = true;
  provs: place[];
  stati: place[];

  jsonIn = {
    clientType: 'PF',
    sex: '',
    name: '',
    surname: '',
    cFiscale: '',
    plus18: false,
    rSocial: '',
    pIva: '',
    email: '',
    phone: '',
    pec: '',
    fax: '',
    street: '',
    address: '',
    civico: '',
    cap: '',
    comune: '',
    prov: '1',
    state: '1',
    insur: [''],
  };

  @ViewChild('sendForm') sendForm!: NgForm;
  showErrors = false;

  constructor() {
    this.provs = [
      { id: 1, location: 'Torino' },
      { id: 2, location: 'Roma' },
      { id: 3, location: 'Napoli' },
    ];
    this.stati = [
      { id: 1, location: 'Italia' },
      { id: 2, location: 'UK' },
      { id: 3, location: 'Francia' },
    ];
  }

  cleanFields() {
    if(this.jsonIn.clientType === 'PF') {
      this.jsonIn.rSocial = '';
      this.jsonIn.pIva = '';
    } else if(this.jsonIn.clientType === 'PG') {
      this.jsonIn.name = '';
      this.jsonIn.surname = '';
      this.jsonIn.cFiscale = '';
      this.jsonIn.plus18 = false;
    } 
  }

  ngOnInit(): void {}

  submitForm() {
    if (this.sendForm.form.invalid) {
      this.showErrors = true;
    } else {
      console.log(this.jsonIn);
    }
  }

  saveJson() {
    const jsonIn = JSON.parse(JSON.stringify(this.jsonIn));
    if(jsonIn.tipoCliente === 'PF') {
      delete jsonIn.ragioneSociale;
    } else if(jsonIn.tipoCliente === 'PG') {
      delete jsonIn.nome;
      delete jsonIn.cognome;
    } 
    this.submitForm()
  }
}

interface place {
  id: number;
  location: string;
}
