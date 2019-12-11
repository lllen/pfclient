import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FormService} from "../form.service";
import {AppService} from "../app.service";
import {SnackbarService} from "../snackbar.service";

@Component({
  selector: 'app-pensioner-add-form',
  templateUrl: './pensioner-add-form.component.html',
  styleUrls: ['./pensioner-add-form.component.scss']
})
export class PensionerAddFormComponent implements OnInit {

  message = {message: '', isError: false};
  pensionerAddForm: FormGroup;
  formErrors = {
    'name': '',
    'dateOfBirth': '',
    'cofficient': '',
    'fixedPayment': '',
    'type': '',
    'standalone': '',
    'sex': '',
    'modifierName': ''
  };

  validationMessages = {
    'name': {
      'required': `Обов'язкове поле`
    },
    'dateOfBirth': {
      'required': `Обов'язкове поле`
    },
    'cofficient': {
      'required': `Обов'язкове поле`
    },
    'fixedPayment': {
      'required': `Обов'язкове поле`
    },
    'type': {
      'required': `Обов'язкове поле`
    },
    'modifierName': {
      'required': `Обов'язкове поле`
    },
    'sex': {
      'required': `Обов'язкове поле`
    }
  };

  constructor(private formBuilder: FormBuilder,
              private formService: FormService,
              private appService: AppService,
              public snackBar: SnackbarService,) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.pensionerAddForm = this.formBuilder.group({
      name: ['', [
        Validators.required
      ]],
      cofficient: ['', [
        Validators.required
      ]],
      dateOfBirth: ['', [
        Validators.required
      ]],
      fixedPayment: ['', [
        Validators.required
      ]],
      standalone: false,
      type: ['', [
        Validators.required
      ]],
      modifierName: ['', [
        Validators.required
      ]],
      sex: ['', [
        Validators.required
      ]]
    });

    this.pensionerAddForm.valueChanges
      .subscribe(() => this.onValueChanged(this.pensionerAddForm, this.formErrors, this.validationMessages));
  }

  onValueChanged(form, errorForm, validationMessages) {
    this.formService.onValueChanged(form, errorForm, validationMessages);
  }

  submit() {
    this.appService.addPensioner(this.loadObject(this.pensionerAddForm.value))
      .subscribe(data => {
        if(data){
          this.pensionerAddForm.reset();
          this.message.isError = false;
          this.message.message = 'Успішно';
          this.openSnackBar(this.message);
        }
      }, err => {
        this.message.isError = true;
        this.message.message = 'Помилка';
        this.openSnackBar(this.message);
      });
  }

  openSnackBar(message) {
    this.snackBar.showSnackBar(message);
  }

  loadObject(formObj) {
    return {
      name: formObj.name,
      sex: formObj.sex,
      dateOfBirth: formObj.dateOfBirth,
      modifier: {
        type: formObj.type,
        modifierName: formObj.modifierName,
        standalone: formObj.standalone,
        coefficient: formObj.coefficient,
        fixedPayment: formObj.fixedPayment
      }
    }
  }


}
