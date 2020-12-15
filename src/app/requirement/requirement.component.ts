import { TokenStorageService } from './../_services/token-storage.service';
import { Title } from '@angular/platform-browser';
import { GlobalConstants } from './../global-constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requirement',
  templateUrl: './requirement.component.html',
  styleUrls: ['./requirement.component.css']
})
export class RequirementComponent implements OnInit {

  content: [];
  ftpstring: string = GlobalConstants.ftpURL;

  constructor(
    private titleService: Title,
    private dataService: TokenStorageService,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Requirements');
  }

}
