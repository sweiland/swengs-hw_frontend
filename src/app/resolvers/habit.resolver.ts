import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {TypeService} from '../services/type.service';
import {HabitService} from '../services/habit.service';

@Injectable({
    providedIn: 'root'
})
export class HabitResolver implements Resolve<Observable<any>> {

    constructor(private habitService: HabitService) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        return this.habitService.getHabit(route.paramMap.get('id'));
    }
}
