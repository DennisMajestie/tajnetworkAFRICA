import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  alert(text: any) {
    Swal.fire({
      title: 'Success!',
      text: text,
      icon: "success",
      iconColor: '#00d084',
      background: '#ffffff',
      showConfirmButton: false,
      timer: 3000,
      customClass: {
        popup: 'swal-taj-popup',
        title: 'swal-taj-title'
      }
    });
  }
}
