import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cours-details',
  standalone: true,
  imports: [],
  templateUrl: './cours-details.component.html',
  styleUrl: './cours-details.component.css'
})
export class CoursDetailsComponent implements OnInit {
  coursId!: string;

  constructor(private activatedRoute : ActivatedRoute) {}

  ngOnInit(): void {
      this.coursId = this.activatedRoute.snapshot.params['id']
  }

}
