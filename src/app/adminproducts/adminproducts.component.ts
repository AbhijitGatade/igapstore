import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.css']
})
export class AdminproductsComponent implements OnInit {
  baseurl = this.api.baseURL;
  data: any;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit(): void {
    this.binddata();
  }

  binddata()
  {
    var reqdata = {"data" : {}};
    var reply = this.api.callapi("admin/products", reqdata);
    reply.subscribe((mydata: any)=>{
      this.data = mydata;
    });
  }

  deletedata(id: number)
  {
    let result = confirm("Sure to delete?");
    if(result){
      var reqdata = {"data" : {id: id}};
      var reply = this.api.callapi("admin/deleteproduct", reqdata);
      reply.subscribe((mydata: any)=>{
        this.binddata();
      });
    }
  }

}
