import { AuthService } from './../_services/auth.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  theFile: any = null;
  fileToUpload: File = null;
  imageURL:string;
  imgLink         : any
  imgData         : any


  public constructor(
    private titleService: Title,
    private authService: AuthService) {

  }





  ngOnInit(): void {
    this.titleService.setTitle('Register');

  }

  onSubmit(): void {
    {this.authService.register(this.form, this.fileToUpload ).subscribe(

      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
          console.log(this.form,this.fileToUpload);
          console.log(err);
        }
      );
    }
  }


  onFileChanged(event){

    this.imgLink = ''

    this.imgData  = event.target.files[0]

    //In your case

    let mimeType  = this.imgData.type

    if (mimeType.match(/image\/*/) == null) {
      const message = "This file type is not supported, Please upload in image format"
      return
    }

    let reader = new FileReader()
    reader.readAsDataURL(this.imgData)
    reader.onload = (event) => {
      this.imgLink = reader.result
    }
    this.fileToUpload = this.imgData

  }


}
