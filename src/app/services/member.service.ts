import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getMembers() {
    return this.http.get('/api/member/list');
  }

  remove(member: any) {
    return this.http.delete('/api/member/' + member.id + '/delete');
  }

  createMember(member) {
    return this.http.post('/api/member/create', member);
  }

  updateMember(member) {
    return this.http.patch('/api/member/' + member.id + '/update', member);
  }

  getMember(id) {
    return this.http.get('/api/member/' + id + '/get');
  }
}
