import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HabitService} from '../services/habit.service';
import {AbstractControl, FormBuilder, ValidatorFn} from '@angular/forms';
import * as moment from 'moment';

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
            start_date: [moment()],
            end_date: [null, [this.dateValidator()]],
            name: ['Dance more!'],
            member: [1],
            type: [1],
        });

        if (data.habit) {
            this.habitFormGroup.patchValue(data.habit);
        }
    }

    dateValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            return (control.value <= moment()) ? {dateCheck: {value: control.value}} : null;
        };
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
