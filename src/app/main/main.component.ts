import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  goToSearch() {
    this.router.navigate(['/player-search'])
  }
}
