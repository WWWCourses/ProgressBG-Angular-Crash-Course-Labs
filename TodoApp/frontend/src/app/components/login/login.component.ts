import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../shared/auth.service";

@Component({
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	form:FormGroup;

	constructor(private fb:FormBuilder,
				private authService: AuthService,
				private router: Router
	){
		this.form = this.fb.group({
			email: ['',Validators.required],
			password: ['',Validators.required]
		});
	}

	ngOnInit(): void {
	}

	login() {
			const val = this.form.value;

			if (val.email && val.password) {
				this.authService.login(val.email, val.password)
					.subscribe(
						() => {
							console.log("User is logged in");
							this.router.navigateByUrl('/');
						}
					);
			}
	}
}
