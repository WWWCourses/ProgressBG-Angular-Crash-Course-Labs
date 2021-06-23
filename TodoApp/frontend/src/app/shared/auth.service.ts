import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, tap } from "rxjs/operators";
import { User } from "./user";

import * as moment from "moment";
import { BuiltinTypeName } from '@angular/compiler';

@Injectable({ providedIn: 'root' })

export class AuthService {

	constructor(private http: HttpClient) {
	}

	baseURl = 'http://localhost:8080';

	login(email:string, password:string ) {
		return this.http.post<User>(this.baseURl+'/api/login', {email, password})
			.pipe(
				tap(res => {
					console.dir(res);
					return this.setSession(res)
				}),
				// just keep and replay last one
				// shareReplay(1)
			)
	}

	private setSession(authResult:any) {
		console.log(`setSession`);
		console.dir(authResult)
		const expiresAt = moment().add(authResult.expiresIn,'second');

		localStorage.setItem('id_token', authResult.idToken);
		localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
	}

	logout() {
		localStorage.removeItem("id_token");
		localStorage.removeItem("expires_at");
	}

	public isLoggedIn() {
		return moment().isBefore(this.getExpiration());
	}

	isLoggedOut() {
		return !this.isLoggedIn();
	}

	getExpiration() {
		const expiration = localStorage.getItem("expires_at");
		const expiresAt = JSON.parse(expiration || '{}');
		return moment(expiresAt);
	}
}


