import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-page-details',
  standalone: false,

  templateUrl: './page-details.component.html',
  styleUrl: './page-details.component.scss',
})
export class PageDetailsComponent implements OnInit {
  public currentId: any;
  public form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    hobbies: new FormArray([]),
  });

  get hobbies() {
    return this.form.get('hobbies') as FormArray;
  }

  ngOnInit(): void {
    console.log('this.activatedRoute.data ', this.activatedRoute);
    this.activatedRoute.data.subscribe((data: any) => {
      console.log(data);
      this.currentId = data.getUserResolver.id;
    });
    console.log(this.form);
  }

  public addControl() {
    this.hobbies.push(new FormControl());
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
}
