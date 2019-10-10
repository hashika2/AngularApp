import { Component, Input } from "@angular/core";

import { Post } from '../post.model';
import { Subscription } from "rxjs";
import { PostsService } from "src/app/posts.service";

@Component({
  selector: "app-post-list",
  templateUrl: "./post-list.component.html",
  styleUrls: ["./post-list.component.css"]
})
export class PostListComponent {
  // posts = [
  //   { title: "First Post", content: "This is the first post's content" },
  //   { title: "Second Post", content: "This is the second post's content" },
  //   { title: "Third Post", content: "This is the third post's content" }
  // ];
  @Input() posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit(){
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener().subscribe((posts: Post[])=>{
      this.posts= posts;
    });
  }

  ngDestroy(){
    this.postsSub.unsubscribe();
  }
}
