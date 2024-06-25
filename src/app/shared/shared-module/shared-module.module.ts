import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSelectorComponent } from '../components/image-selector/image-selector.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ImageSelectorComponent,],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports:[ImageSelectorComponent]
})
export class SharedModuleModule { }
