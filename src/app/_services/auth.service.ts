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
    return this.http.post(AUTH_API + 'auth/user_signup', ({
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

  product_insert_sale(details, id, amenityArray, furnishingArray, imageName1, imageName2, imageName3, imageName4, imageName5): Observable<any> {
    console.log(details);
    return this.http.post(AUTH_API + 'product/insert_product_sale', JSON.stringify ({
      user_id: id,
      build_name: details.build_name,
      type: details.type,
      address: details.address,
      city: details.city,
      locality: details.locality,
      property_detail: details.property_detail,
      nearest_landmark: details.nearest_landmark,
      map_latitude: details.map_latitude,
      map_longitude: details.map_longitude,
      display_address: details.display_address,
      product_image1: imageName1,
      product_image2: imageName2,
      product_image3: imageName3,
      product_image4: imageName4,
      product_image5: imageName5,
      area: details.area,
      area_unit: details.area_unit,
      carpet_area: details.carpet_area,
      bedroom: details.bedroom,
      bathroom: details.bathroom,
      balconies: details.balconies,
      additional_rooms: details.additional_rooms,
      furnishing_status: details.furnishing_status,
      furnishings: furnishingArray,
      total_floors: details.total_floors,
      property_on_floor: details.property_on_floor,
      rera_registration_status: details.rera_registration_status,
      additional_parking_status: details.additional_parking_status,
      parking_covered_count: details.parking_covered_count,
      parking_open_count: details.parking_open_count,
      sale_availability: 1,
      possession_by: details.possession_by,
      ownership: details.ownership,
      expected_pricing: details.expected_pricing,
      inclusive_pricing_details: details.inclusive_pricing_details,
      tax_govt_charge: details.tax_govt_charge,
      price_negotiable: details.price_negotiable,
      maintenance_charge_status: details.maintenance_charge_status,
      maintenance_charge: details.maintenance_charge,
      maintenance_charge_condition: details.maintenance_charge_condition,
      deposit: details.deposit,
      brokerage_charges: details.brokerage_charges,
      facing_towards: details.facing_towards,
      availability_condition: details.availability_condition,
      amenities: amenityArray,
      buildyear: details.buildyear,
      age_of_property: details.age_of_property,
      description: details.description,
      equipment: details.equipment,
      features: details.features,
      nearby_places: details.nearby_places,
    }), httpOptions);
  }

  product_insert_rent(details, id, amenityArray, furnishingArray,  imageName1, imageName2, imageName3, imageName4, imageName5): Observable<any> {
    return this.http.post(AUTH_API + 'product/insert_product_rent', JSON.stringify ({
      user_id: id ,
      build_name: details.build_name ,
      type: details.type ,
      address: details.address ,
      display_address: details.display_address ,
      city: details.city ,
      locality: details.locality ,
      property_detail: details.property_detail ,
      nearest_landmark: details.nearest_landmark ,
      map_latitude: details.map_latitude ,
      map_longitude: details.map_longitude ,
      area: details.area ,
      area_unit: details.area_unit ,
      carpet_area: details.carpet_area ,
      bedroom: details.bedroom ,
      bathroom: details.bathroom ,
      balconies: details.balconies ,
      additional_rooms: details.additional_rooms ,
      equipment: details.equipment ,
      features: details.features ,
      nearby_places: details.nearby_places ,
      age_of_property: details.age_of_property ,
      furnishing_status: details.furnishing_status ,
      property_on_floor: details.property_on_floor ,
      total_floors: details.total_floors ,
      facing_towards: details.facing_towards ,
      rera_registration_status: details.rera_registration_status ,
      additional_parking_status: details.additional_parking_status ,
      buildyear: details.buildyear ,
      availability_condition: details.availability_condition ,
      possession_by: details.possession_by ,
      amenities: amenityArray ,
      parking_covered_count: details.parking_covered_count ,
      parking_open_count: details.parking_open_count ,
      furnishings: furnishingArray ,
      ownership: details.ownership ,
      expected_pricing: details.expected_pricing ,
      deposit: details.deposit ,
      inclusive_pricing_details: details.inclusive_pricing_details ,
      tax_govt_charge: details.tax_govt_charge ,
      price_negotiable: details.price_negotiable ,
      maintenance_charge_status: details.maintenance_charge_status ,
      brokerage_charges: details.brokerage_charges ,
      maintenance_charge: details.maintenance_charge ,
      maintenance_charge_condition: details.maintenance_charge_condition ,
      product_image1: imageName1,
      product_image2: imageName2,
      product_image3: imageName3,
      product_image4: imageName4,
      product_image5: imageName5,
      rent_availability: 1,
      description: details.description ,
      willing_to_rent_out_to: details.willing_to_rent_out_to ,
      agreement_type: details.agreement_type ,
      available_for: details.available_for ,
      rent_cond: details.rent_cond ,
      duration_of_rent_aggreement: details.duration_of_rent_aggreement ,
      expected_rent: details.expected_rent ,
      security_deposit: details.security_deposit ,

      inc_electricity_and_water_bill: details.inc_electricity_and_water_bill ,
      month_of_notice: details.month_of_notice ,
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

  requirement_index(id): Observable<any> {
    return this.http.post(AUTH_API + 'product/req_index', JSON.stringify({
      user_id: id,
    }), httpOptions);
  }

  requirements(detail: any = {}, user_id: any): Observable<any> {
    return this.http.post(AUTH_API + 'product/requ', JSON.stringify({
      user_id: user_id,
      rental_sale_condition: detail.rental_sale_condition,
      purchase_mode: detail.purchase_mode,
      cash_amount: detail.cash_amount,
      loan_amount: detail.loan_amount,
      property_type: detail.property_type,
      requirement: detail.requirement,
    }), httpOptions);
  }

  saveSearch(id, prod_id): Observable<any> {
    return this.http.post(AUTH_API + 'product/save_search', JSON.stringify({
      user_id: id,
      product_id: prod_id
    }), httpOptions);
  }



  property_delete(id): Observable<any> {
    return this.http.post(AUTH_API + 'product/delete_product', JSON.stringify({
      product_id: id,
    }), httpOptions);
  }

  lawyer_service_delete(id): Observable<any> {
    return this.http.post(AUTH_API + 'product/lawyer_service_delete', JSON.stringify({
      id: id,
    }), httpOptions);
  }

  requirement_delete(id): Observable<any> {
    return this.http.post(AUTH_API + 'product/requirement_delete', JSON.stringify({
      id: id,
    }), httpOptions);
  }

  create_review(form, id): Observable<any> {
    return this.http.post(AUTH_API + 'product/post_review', JSON.stringify({
      product_id: id,
      stars: form.stars,
      rev_subject: form.rev_subject,
      rev_content:  form.rev_content,

    }), httpOptions);
  }
  product_review(id): Observable<any> {
    return this.http.post(AUTH_API + 'product/product_review', JSON.stringify({
      id: id,
    }), httpOptions);
  }

  lawyer_create_service(data): Observable<any> {
    return this.http.post(AUTH_API + 'product/lawyer_create_service', JSON.stringify({
      service_name: data.service_name,
      service_details: data.service_details,
      price: data.price,
    }), httpOptions);
  }

  lawyer_get(data): Observable<any> {
    return this.http.post(AUTH_API + 'product/lawyer_page', JSON.stringify({
      id: data
    }), httpOptions);
  }



  // adminEndpoints

  admin_login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'admin/admin_login', JSON.stringify({
      email: credentials.email,
      password: credentials.password,
    }), httpOptions);
  }




}
