import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {AppService} from "../app.service";
import {SnackbarService} from "../snackbar.service";

@Component({
  selector: 'app-pensioner',
  templateUrl: './pensioner.component.html',
  styleUrls: ['./pensioner.component.scss']
})
export class PensionerComponent implements OnInit {

  pensioner;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private appService: AppService,
              private messageService: SnackbarService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.appService.getPensioner(params.get('id')).subscribe(data => {
        console.log(data);
        this.pensioner = data;
        this.pensioner.years = (new Date()).getFullYear() - new Date(this.pensioner.dateOfBirth).getFullYear();
        console.log(this.pensioner.sex);
      })
    });
  }

  handleDelete(id) {
    this.appService.deletePensioner(id).subscribe(data => {
      if(data) {
        this.messageService.showSnackBar({
          message: 'Успішно',
          isError: false
        });
        this.router.navigate(['/pensioners'])
      }
    },
        error1 => {
          this.messageService.showSnackBar({
            message: 'Людина з досвідом роботи НЕ МОЖЕ бути видалена',
            isError: true
          });
        },
      ()=>{}
    );
  }

}
