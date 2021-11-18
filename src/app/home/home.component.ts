import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productcategories: any;
  testimonials: any;
  baseurl = this.api.baseURL;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    var reply = this.api.callapi("admin/productcategories", {"data" : {}});
    reply.subscribe((mydata: any)=>{
      this.productcategories = mydata;
    });

    var reply = this.api.callapi("admin/testimonials", {"data" : {}});
    reply.subscribe((mydata: any)=>{
      this.testimonials = mydata;
      console.log(this.testimonials);
    });
  }

}
