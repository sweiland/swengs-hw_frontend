import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {UserService} from '../services/user.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginFormGroup;
    verified = false;

    constructor(private fb: FormBuilder, private userService: UserService) {
    }

    ngOnInit() {
        this.loginFormGroup = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
            captcha: [''] // proof of concept, hCaptcha prohibits localhost and 127.0.0.1 as referrers.
            // Validators.required had to be disabled and the captcha doesn't actually do anything in this version.
        });
    }

    login() {
        this.userService.login(this.loginFormGroup.value);
    }

}
