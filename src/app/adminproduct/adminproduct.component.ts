import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './adminproduct.component.html',
  styleUrls: ['./adminproduct.component.css']
})
export class AdminproductComponent implements OnInit {
  id = 0;
  formdata: any;
  productcategories: any;
  pcid = 0;
  name = "";
  description = "";
  specification = "";
  mrp = 0;
  price = 0;
  stock = 0;
  availability = true;
  image = "";

  constructor(private router: Router, private api: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    var reply = this.api.callapi("admin/productcategories", {"data" : {}});
    reply.subscribe((mydata: any)=>{
      this.productcategories = mydata;
    });

    this.id = Number(this.route.snapshot.paramMap.get("id"));
    if(this.id != 0)
    {
      //Read data from api - Edit mode
      var reqdata = {"data" : {id: this.id}};
      var reply = this.api.callapi("admin/product", reqdata);
      reply.subscribe((mydata: any)=>{
        let data = Array.from(Object.keys(mydata), k=>mydata[k]);
        this.name = data[0].name;
        this.pcid = data[0].pcid;
        this.description = data[0].description;
        this.specification = data[0].specification;
        this.mrp = data[0].mrp;
        this.price = data[0].price;
        this.stock = data[0].stock;
        this.availability = data[0].availability == "Yes" ? this.availability = true: this.availability = false;
        this.image = "";
        this.binddata();
      });
    }
    else{
      this.binddata();
    }
    window.scrollTo(0, 0);
  }

  binddata()
  {
    this.formdata = new FormGroup({
      id: new FormControl(this.id, Validators.compose([Validators.required])),
      name: new FormControl(this.name, Validators.compose([Validators.required])),
      pcid: new FormControl(this.pcid, Validators.compose([Validators.required])),
      description: new FormControl(this.description, Validators.compose([Validators.required])),
      specification: new FormControl(this.specification, Validators.compose([Validators.required])),
      mrp: new FormControl(this.mrp, Validators.compose([Validators.required])),
      price: new FormControl(this.price, Validators.compose([Validators.required])),
      stock: new FormControl(this.stock, Validators.compose([Validators.required])),
      availability: new FormControl(this.availability, Validators.compose([Validators.required])),
      image: new FormControl("", Validators.compose([])),
    });
  }

  onClickSubmit(data:any){
    data.image = this.image;
    data.availability = data.availability == true ? "Yes" : "No";
    data.status = "active";
    var reqdata = {"data" : data};

    console.log(reqdata);

    var reply = this.api.callapi("admin/saveproduct", reqdata);
    reply.subscribe((mydata: any)=>{
      data = Array.from(Object.keys(mydata), k=>mydata[k]);
      var status = data[0].status;
      if(status == "success"){
        this.router.navigate(["./admin-products"]).then(()=>{
          window.location.reload();
        });
      }
      else{
        alert("Something went wrong.");
      }
    });
  }

  handleUpload(event: any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = ()=>{
      if(reader.result != null)
        this.image = reader.result.toString();
    }
  }
}
