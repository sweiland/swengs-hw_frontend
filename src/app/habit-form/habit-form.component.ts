import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HabitService} from '../services/habit.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'app-habit-form',
    templateUrl: './habit-form.component.html',
    styleUrls: ['./habit-form.component.scss']
})
export class HabitFormComponent implements OnInit {
    habitFormGroup;
    memberOptions;
    typeOptions;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private habitService: HabitService) {
    }

    ngOnInit() {
        const data = this.route.snapshot.data;
        this.memberOptions = data.memberOptions;
        this.typeOptions = data.typeOptions;
        this.habitFormGroup = this.fb.group({
            id: [null],
            start_date: [new Date()],
            end_date: [null],
            name: ['Peter'],
            member: [null],
            type: [1],
        });

        if (data.habit) {
            this.habitFormGroup.patchValue(data.habit);
        }
    }

    createHabit() {
        const habit = this.habitFormGroup.value;
        if (habit.id) {
            this.habitService.updateHabit(habit)
                .subscribe(() => {
                    alert('updated successfully');
                });
        } else {
            this.habitService.createHabit(habit)
                .subscribe((response: any) => {
                    this.router.navigate(['/habit-form/' + response.id]);
                });
        }
    }
}
