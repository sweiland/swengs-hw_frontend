import {Component, OnInit} from '@angular/core';
import {MemberService} from '../services/member.service';
import {TypeService} from '../services/type.service';
import {HabitService} from '../services/habit.service';

@Component({
    selector: 'app-member-list',
    templateUrl: './member-list.component.html',
    styleUrls: ['./member-list.component.scss']
})
export class MemberListComponent implements OnInit {

    members: any[];
    displayedColumns = ['first_name', 'last_name', 'email', 'level', 'score', 'id'];

    constructor(private memberService: MemberService, private typeService: TypeService, private habitService: HabitService) {
    }

    ngOnInit() {
        this.memberService.getMembers().subscribe((response: any[]) => {
            this.members = response;
        });
    }

    removeMember(member: any) {
        this.memberService.remove(member).subscribe(() => {
            this.ngOnInit();
        });
    }

}

