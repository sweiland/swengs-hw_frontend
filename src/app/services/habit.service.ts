import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HabitService {

    constructor(private http: HttpClient) {
    }

    getHabits() {
        return this.http.get('/api/habit/list');
    }

    remove(habit: any) {
        return this.http.delete('/api/habit/' + habit.id + '/delete');
    }

    updateHabit(habit: any) {
        return this.http.patch('/api/habit/' + habit.id + '/update', habit);
    }

    createHabit(habit: any) {
        return this.http.post('/api/habit/create', habit);
    }

    getHabit(id) {
        return this.http.get('/api/habit/' + id + '/get');
    }
}
