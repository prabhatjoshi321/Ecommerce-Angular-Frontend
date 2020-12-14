import { Title } from '@angular/platform-browser';
import { AuthService } from './../_services/auth.service';
import { TokenStorageService } from './../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postproduct',
  templateUrl: './postproduct.component.html',
  styleUrls: ['./postproduct.component.css']
})
export class PostproductComponent implements OnInit {


  form: any = {};
  ared: any = {};
  isLoggedIn = false;
  isFormSubmitted = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private titleService: Title,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Login');
    if (this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().username;
    }
    else{
      this.isLoggedIn = false ;
    }

  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.access_token);
        this.tokenStorage.saveUser(data);

        this.isFormSubmitted = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().name;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isFormSubmitted = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }


}
