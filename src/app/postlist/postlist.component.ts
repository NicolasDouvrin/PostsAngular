import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  @Input() postName: string;
  @Input() postContent: string;
  @Input() postLove: number;

  lastUpdate = new Date();

  constructor() { }

  ngOnInit() {
  }

  onLike(){
    return this.postLove++;
  }

  onDislike(){
    return this.postLove--;
  }
}
