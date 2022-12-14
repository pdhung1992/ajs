import {Component} from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent{
  className = 'T2210M';
  numberOfStudent = 25;
  textColor = 'text-black';
  categories = [
    'Fashion', 'Shoes', 'Watch', 'Jewelry'
  ];
  product: any = {
    name: 'iPhone',
    price: 29000000
  };
  products: any = [
    {
      name: 'iPhone 14',
      price: 29000000,
      qty: 10
    },
    {
      name: 'iPhone 13',
      price: 25000000,
      qty: 0
    },
    {
      name: 'iPhone 12',
      price: 20000000,
      qty: 5
    }
    ];

  addStudent(){
    this.numberOfStudent++;
  }
  removeStudent(){
    if(this.numberOfStudent > 0)
      this.numberOfStudent--;
      this.textColor = 'text-primary';
    if(this.numberOfStudent == 0)
      this.textColor = 'text-danger';
  }
}
