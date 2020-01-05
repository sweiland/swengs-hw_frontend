import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MemberService} from '../services/member.service';

@Component({
    selector: 'app-member-form',
    templateUrl: './member-form.component.html',
    styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {
    memberFormGroup;
    memberOptions;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private memberService: MemberService) {
    }

    ngOnInit() {
        const data = this.route.snapshot.data;
        this.memberOptions = data.memberOptions;
        this.memberFormGroup = this.fb.group({
            id: [null],
            first_name: ['', [Validators.required]],
            last_name: ['', [Validators.required]],
            email: [''],
            level: [1, [Validators.required]],
            score: [0, [Validators.required]],
            friends: [null]
        });

        if (data.member) {
            this.memberFormGroup.patchValue(data.member);
        }
    }

    createMember() {
        const movie = this.memberFormGroup.value;
        if (movie.id) {
            this.memberService.updateMember(movie)
                .subscribe(() => {
                    alert('updated successfully');
                });
        } else {
            this.memberService.createMember(movie)
                .subscribe((response: any) => {
                    this.router.navigate(['/member-form/' + response.id]);
                });
        }
    }

}
