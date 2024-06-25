import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { AddCategoryComponent } from './category/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { BlogpostListComponent } from './blog-post/blogpost-list/blogpost-list.component';
import { AddBlogpostComponent } from './blog-post/add-blogpost/add-blogpost.component';
import { MarkdownModule } from 'ngx-markdown';
import { EditBlogpostComponent } from './blog-post/edit-blogpost/edit-blogpost.component';
import { SharedModuleModule } from "../shared/shared-module/shared-module.module";
import { HomeComponent } from './public/home/home.component';
import { BlogDetailsComponent } from './public/blog-details/blog-details.component';
import { LoginComponent } from './auth/login/login.component';
@NgModule({
    declarations: [CategoryListComponent,
        AddCategoryComponent,
        EditCategoryComponent,
        BlogpostListComponent,
        AddBlogpostComponent,
        EditBlogpostComponent,
        HomeComponent,
        BlogDetailsComponent,
        LoginComponent],
    exports: [
        CategoryListComponent,
        AddCategoryComponent,
        EditCategoryComponent,
        BlogpostListComponent,
        EditBlogpostComponent,
        HomeComponent,
        BlogDetailsComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        MarkdownModule.forRoot(),
        SharedModuleModule
    ]
})
export class FeatureModule { }
