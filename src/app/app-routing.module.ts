import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import {PermisosGuard} from './permisos.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [PermisosGuard],
    
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
 
  {
    path: 'login',  
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'comunidad',
    loadChildren: () => import('./comunidad/comunidad.module').then( m => m.ComunidadPageModule),
    canActivate: [PermisosGuard]
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [PermisosGuard]
  },
  {
    path: 'publicar',
    loadChildren: () => import('./publicar/publicar.module').then( m => m.PublicarPageModule),
    canActivate: [PermisosGuard]
  },
  {
    path: 'administrador',
    loadChildren: () => import('./administrador/administrador.module').then( m => m.AdministradorPageModule),
    canActivate: [PermisosGuard]
  },
  {
    path: 'login-admin',
    loadChildren: () => import('./login-admin/login-admin.module').then( m => m.LoginAdminPageModule)
    
  },
  {
    path: 'mispublic',
    loadChildren: () => import('./mispublic/mispublic.module').then( m => m.MispublicPageModule),
    canActivate: [PermisosGuard]
  },
  {
    path: 'infopersonal',
    loadChildren: () => import('./infopersonal/infopersonal.module').then( m => m.InfopersonalPageModule),
    canActivate: [PermisosGuard]
  },
  {
    path: 'detalle-public',
    loadChildren: () => import('./detalle-public/detalle-public.module').then( m => m.DetallePublicPageModule),
    canActivate: [PermisosGuard]
  },
  {
    path: 'detallecomunidad',
    loadChildren: () => import('./detallecomunidad/detallecomunidad.module').then( m => m.DetallecomunidadPageModule),
    canActivate: [PermisosGuard]
  },
  {
    path: 'actualizardatos',
    loadChildren: () => import('./actualizardatos/actualizardatos.module').then( m => m.ActualizardatosPageModule),
    canActivate: [PermisosGuard]
  },
  {
    path: 'agregarinfo',
    loadChildren: () => import('./agregarinfo/agregarinfo.module').then( m => m.AgregarinfoPageModule),
    canActivate: [PermisosGuard]
  },
  {
    path: 'administrarsystema',
    loadChildren: () => import('./administrarsystema/administrarsystema.module').then( m => m.AdministrarsystemaPageModule),
    canActivate: [PermisosGuard]
  },
  {
    path: 'administrarusuarios',
    loadChildren: () => import('./administrarusuarios/administrarusuarios.module').then( m => m.AdministrarusuariosPageModule),
    canActivate: [PermisosGuard]
  },
  {
    path:'**',
    redirectTo: 'login'
  },
 
  
  
  
  
 
  
  
  
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
