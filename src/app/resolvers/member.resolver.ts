import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {MemberService} from '../services/member.service';

@Injectable({
  providedIn: 'root'
})
export class MemberResolver implements Resolve<Observable<any>> {

  constructor(private memberService: MemberService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.memberService.getMember(route.paramMap.get('id'));
  }
}
