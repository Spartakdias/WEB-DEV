import { Component } from '@angular/core';
import {ProductsList, ProductList} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  ProductsList = [...ProductsList];
  selectedCategory?: ProductList;
  totalLikes: number = 0;

  onSelect(category: ProductList): void{
  this.selectedCategory = category;
  }

  share() {
    window.alert('The product has been shared!');
  }



  likeCount(productItem: any) {

    if (productItem.liked) {
      productItem.likes--;
      this.totalLikes--;


    } else {
      productItem.likes++;
      this.totalLikes++;
    }

    productItem.liked = !productItem.liked;
  }
}

