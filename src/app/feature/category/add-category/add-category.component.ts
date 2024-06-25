import { Component , OnDestroy } from '@angular/core';
import { AddCategoryReuest } from '../models/add-category-reuest.model';
import { CategoryService } from '../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnDestroy {
  
  model: AddCategoryReuest;
  private addCategorySubscribtion?: Subscription;
  constructor(private categoryService: CategoryService){
    this.model = {
      name:'',
      urlHandle:''
    }
  }

  onFormSubmit(){
     console.log(this.model);
     this.categoryService.addCategory(this.model)
     .subscribe({
      next:(response)=>{
        console.log(response)
      } ,
      error:(error)=>{
        console.error(error);
      }
     });
  }
  ngOnDestroy(): void {
    this.addCategorySubscribtion?.unsubscribe();
  }
}
