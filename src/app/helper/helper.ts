// import { HttpHeaders } from "@angular/common/http";

export const apiUrl = 'http://localhost:5000/'

// export const accessToken = localStorage.getItem('access-token')

export const getToken=():string | null => {
    const accessToken= localStorage.getItem('access-token')

    return accessToken
}

// export const getHttpOptions = (): HttpHeaders => {

//     const accessToken = getToken();

//     const headers = new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${accessToken}`

//     });
//     return headers;
//   };
  
  export const emailPattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"

