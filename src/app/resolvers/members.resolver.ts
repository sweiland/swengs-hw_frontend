import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {MemberService} from '../services/member.service';

@Injectable({
  providedIn: 'root'
})
export class MembersResolver implements Resolve<Observable<any>> {

  constructor(private memberService: MemberService) { }

  resolve() {
    return this.memberService.getMembers();
  }
}
