import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {MessageComponent} from "./message/message.component";
import {Message} from "./Message";

@Injectable()
export class SnackbarService {

  constructor(public snackBar: MatSnackBar) {}

  showSnackBar(message: Message) {
    this.snackBar.openFromComponent(MessageComponent, { data: message,
      panelClass: message.isError ? ['snackbar-error-message'] : ['snackbar-success-message'] } );
  }
}
