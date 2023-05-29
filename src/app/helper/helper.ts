import { HttpHeaders } from "@angular/common/http";

export const apiUrl = 'http://localhost:5000/'

export const accessToken = localStorage.getItem('access-token')

export const httpOptions = {

    headers: new HttpHeaders({

        'Content-Type': 'application/json',

        'Authorization': `Bearer ${accessToken}`
    })
};
