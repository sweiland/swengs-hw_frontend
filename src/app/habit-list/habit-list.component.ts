import { Component, OnInit } from '@angular/core';
import {MemberService} from '../services/member.service';
import {TypeService} from '../services/type.service';
import {HabitService} from '../services/habit.service';

@Component({
  selector: 'app-habit-list',
  templateUrl: './habit-list.component.html',
  styleUrls: ['./habit-list.component.scss']
})
export class HabitListComponent implements OnInit {

  habits: any[];
  displayedColumns = ['start_date', 'end_date', 'name', 'priority', 'id'];

  constructor(private memberService: MemberService, private typeService: TypeService, private habitService: HabitService) {
  }

  ngOnInit() {
    this.habitService.getHabits().subscribe((response: any[]) => {
      this.habits = response;
    });
  }

  removeHabit(habit: any) {
    this.habitService.remove(habit).subscribe(() => {
      this.ngOnInit();
    });
  }

}
