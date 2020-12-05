import { Title } from '@angular/platform-browser';
import { TokenStorageService } from './../_services/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: any;

  constructor(
    private token: TokenStorageService,
    private titleService: Title,

    ) { }

  ngOnInit(): void {
    this.titleService.setTitle('404 Not Found');
    this.currentUser = this.token.getUser().username;
  }

}
