import { HttpHeaders } from "@angular/common/http";

export const apiUrl = 'http://localhost:5000/'

export const accessToken = localStorage.getItem('access-token')
// const headers = new HttpHeaders()
//       .set('Content-Type', 'application/json')
//       .set('Authorization', `Bearer ${accessToken}`);

export const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
    })
};
