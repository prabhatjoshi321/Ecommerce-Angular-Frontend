import { TokenStorageService } from './token-storage.service';
import { GlobalConstants } from './../global-constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = GlobalConstants.apiURL;

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json'})
};



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'auth/login', JSON.stringify({
      email: credentials.email,
      password: credentials.password,
      rememberme: 1
    }), httpOptions);
  }

  register(user, profile_pic): Observable<any> {
    return this.http.post(AUTH_API + 'auth/signup', ({
      name: user.username,
      email: user.email,
      profile_pic: profile_pic,
      other_mobile_number: user.other_mobile_number,
      password: user.password,
      password_confirmation: user.cpassword,
    }), httpOptions);
  }

  register_owner(user, profile_pic): Observable<any> {
    return this.http.post(AUTH_API + 'auth/owner_signup', ({
      name: user.username,
      email: user.email,
      other_mobile_number: user.other_mobile_number,
      address: user.address,
      city: user.city,
      pan_number: user.pan_number,
      aadhar_number: user.aadhar_number,
      profile_pic: profile_pic,
      password: user.password,
      password_confirmation: user.cpassword,
    }), httpOptions);
  }

  register_dealer(user, profile_pic): Observable<any> {
    return this.http.post(AUTH_API + 'auth/dealer_signup', ({
      name: user.username,
      email: user.email,
      other_mobile_number: user.other_mobile_number,
      company_name: user.company_name,
      company_url: user.company_url,
      address: user.address,
      city: user.city,
      landline_number: user.landline_number,
      company_profile: user.company_profile,
      pan_number: user.pan_number,
      aadhar_number: user.aadhar_number,
      profile_pic: profile_pic,
      password: user.password,
      password_confirmation: user.cpassword,
    }), httpOptions);
  }

  register_lawyer(user, profile_pic): Observable<any> {
    return this.http.post(AUTH_API + 'auth/lawyer_signup', ({
      name: user.username,
      email: user.email,
      other_mobile_number: user.other_mobile_number,
      address: user.address,
      city: user.city,
      pan_number: user.pan_number,
      aadhar_number: user.aadhar_number,
      provided_service: user.provided_service,
      price_for_service: user.price_for_service,
      law_firm_number: user.law_firm_number,
      practice_number: user.practice_number,
      place_of_practice: user.place_of_practice,
      landline_number: user.landline_number,
      profile_pic: profile_pic,
      password: user.password,
      password_confirmation: user.cpassword,
    }), httpOptions);
  }

  product_insert_sale(details): Observable<any> {
    return this.http.post(AUTH_API + 'product/insert_product_sale', JSON.stringify ({
      username: details.username,
      email: details.email,
      product_image: details.image,
      address: details.address,
      city: details.city,
      rent_cond: details.rent_cond,
      rent_availability: details.rent_availability,
      maintenance_charge: details.maintenance_charge,
      ownership: details.ownership,
      locality: details.locality,
      possessed_by: details.possessed_by,
      price: details.price,
      deposit: details.deposit,
      available_for: details.available_for,
      type: details.type,
      bedc_ount: details.bedc_ount,
      bathroom: details.bathroom,
      garage: details.garage,
      garage_area: details.garage_area,
      balconies: details.balconies,
      add_rooms: details.add_rooms,
      addons: details.addons,
      buildyear: details.buildyear,
      amenities: details.amenities,
      equipment: details.equipment,
      features: details.features,
      nearby_places: details.nearby_places,
      area: details.area,
      description: details.description,
      registration_status: details.registration_status,
      build_name: details.build_name,
    }), httpOptions);
  }

  product_insert_rent(details): Observable<any> {
    return this.http.post(AUTH_API + 'product/insert_product_rent', JSON.stringify ({
      username: details.username,
      email: details.email,
      product_image: details.image,
      address: details.address,
      city: details.city,
      rent_cond: details.rent_cond,
      rent_availability: details.rent_availability,
      maintenance_charge: details.maintenance_charge,
      ownership: details.ownership,
      locality: details.locality,
      possessed_by: details.possessed_by,
      price: details.price,
      deposit: details.deposit,
      available_for: details.available_for,
      type: details.type,
      bedc_ount: details.bedc_ount,
      bathroom: details.bathroom,
      garage: details.garage,
      garage_area: details.garage_area,
      balconies: details.balconies,
      add_rooms: details.add_rooms,
      addons: details.addons,
      buildyear: details.buildyear,
      amenities: details.amenities,
      equipment: details.equipment,
      features: details.features,
      nearby_places: details.nearby_places,
      area: details.area,
      description: details.description,
      registration_status: details.registration_status,
      build_name: details.build_name,
    }), httpOptions);
  }


  product_see(prodid_no): Observable<any> {
    return this.http.post(AUTH_API + 'product/see', JSON.stringify ({
      prod_id: prodid_no,
    }), httpOptions);
  }
  search(data): Observable<any> {
    return this.http.post(AUTH_API + 'product/search', JSON.stringify({
      build_name: data.build_name,
      type: data.type,
      city: data.city,
    }), httpOptions);
  }

  requirements(req_data: any, user_id: any): Observable<any> {
    return this.http.post(AUTH_API + 'product/requ', JSON.stringify({
      user_id: user_id,
      requirement: req_data,
    }), httpOptions);
  }

}
