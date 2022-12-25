import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Adapters} from "../../enums/adapters";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  styleUrls:['products.component.css']
})

export class ProductsComponent{
  id: number = 0;
  product: any = {
    id: 1,
    title: 'iPhone 9',
    price: 549,
    thumbnail: Adapters.BASE_URL+ 'data/products/1/thumbnail.jpg'
  }
  //tu dong chay khi
  constructor(private route: ActivatedRoute,
              private http : HttpClient,
              private productService: ProductService ) {
  }
  //tu dong chay khi lam xong giao dien
  ngOnInit(){
    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.getProduct();
    })
  }

  // call API: https://dummyjson.com/products/1 + this.id
  getProduct(){
    //call api
    //   const url = 'https://dummyjson.com/products/'+this.id;
    //   this.http.get<any>(url).subscribe(data=>{
        //set data to product
      // this.product = data;

    // call api
    this.productService.getProductDetail(this.id)
      .subscribe(data=>{
        // set data to product
        this.product = data;
    })
  }
}
