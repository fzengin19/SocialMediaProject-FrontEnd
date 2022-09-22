import { Component, OnInit } from '@angular/core';
import { PostModel } from 'src/app/models/postModel';

@Component({
  selector: 'app-explore-content',
  templateUrl: './explore-content.component.html',
  styleUrls: ['./explore-content.component.css']
})
export class ExploreContentComponent implements OnInit {
  model:PostModel[];
  constructor() { }

  ngOnInit(): void {
  }

}
