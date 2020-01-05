import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {TypeService} from '../services/type.service';

@Injectable({
    providedIn: 'root'
})
export class TypeResolver implements Resolve<Observable<any>> {

    constructor(private typeService: TypeService) {
    }

    resolve() {
        return this.typeService.getTypes();
    }
}
