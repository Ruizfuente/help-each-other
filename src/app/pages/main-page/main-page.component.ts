import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceTypes } from '../../resources/enums/placeTypes.enum';
import { PlacesService } from '../../services/places/places.service';
import { UsuariosService } from '../../services/places/usuarios.service';
import { User } from '../../models/user.model';
import { Place } from '../../models/place.model';
import { Router } from '@angular/router';
// import { AppRoutes } from '../../resources/app-routes';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  public _placeTypes = PlaceTypes;
  // public _AppRoutes = AppRoutes;
  public placesToShow: Place[] = [];

  constructor(
    private placesService: PlacesService,
    private usuariosService: UsuariosService,
    private router: Router
  ) {
    this.placesToShow = this.placesService.getAllValidPlaces(5, 40.4177, -3.7042).slice(0, 15);
  }


  getUser(id: number): User {
    return this.usuariosService.getUserById(id);
  };

  navigateOnClick(route: string){
    this.router.navigate([route]);
  }
}
