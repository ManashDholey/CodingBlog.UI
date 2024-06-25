import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPost } from '../../blog-post/models/blog-post.model';
import { BlogPostService } from '../../blog-post/services/blog-post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  blogs$?: Observable<BlogPost[]>;
  constructor(private blogPostService: BlogPostService) {

  }
  ngOnInit(): void {
    this.blogs$ = this.blogPostService.getAllBlogPosts();
  }
}
