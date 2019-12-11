import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {}

  getPensioners() {
    return this.http.get('http://localhost:5100/api/People', {});
  }

  deletePensioner(id) {
    return this.http.delete('http://localhost:5100/api/People/' + id);
  }

  getPensioner(id) {
    return this.http.get('http://localhost:5100/api/People/' + id, {});
  }

  addPensioner(obj) {
    return this.http.post('http://localhost:5100/api/People', obj);
  }
}
