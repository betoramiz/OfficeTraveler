import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-space-information',
  templateUrl: './space-information.component.html',
  styleUrls: ['./space-information.component.css']
})
export class SpaceInformationComponent implements OnInit {

  id = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
  }

}
