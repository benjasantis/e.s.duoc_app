import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceService } from './Service/service.service';

@Injectable({
  providedIn: 'root'
})
export class PermisosGuard implements CanActivate {

  constructor(private servicio:ServiceService, private router:Router){

  }

  canActivate() {
    if (this.servicio.getCurrentUser()) {
      return true;
    } else {
      return false;
    }
  }   

}
