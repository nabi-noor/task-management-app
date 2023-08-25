import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class NavigationService {
	constructor(private router: Router, private route: ActivatedRoute) { }

  givenUrl(url: string) {
		this.router.navigate([url]);
	}

  navigateToHome(){
    this.router.navigate(['/']);
  }

  navigateToCreateTask(){
    this.router.navigate(['create']);
  }
}
