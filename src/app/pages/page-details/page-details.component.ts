import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-details',
  standalone: false,

  templateUrl: './page-details.component.html',
  styleUrl: './page-details.component.scss',
})
export class PageDetailsComponent implements OnInit {
  public currentId: any;
  ngOnInit(): void {
    console.log('this.activatedRoute.data ', this.activatedRoute);
    this.activatedRoute.data.subscribe((data: any) => {
      console.log(data);
      this.currentId = data.getUserResolver.id;
    });
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
}
