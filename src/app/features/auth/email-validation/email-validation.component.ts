import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../../shared/header/header.component';

@Component({
  selector: 'app-email-validation',
  imports: [
    ReactiveFormsModule,
    HeaderComponent],
  templateUrl: './email-validation.component.html',
  styleUrl: './email-validation.component.css'
})
export class EmailValidationComponent implements OnInit {
  loginForm: FormGroup;
  loginError: string = '';
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      validationCode: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading = true;
    const validationCode = this.loginForm.get('validationCode')?.value;

    this.authService.validateEmail(validationCode).subscribe(
      (response) => {
        this.isLoading = false;
        this.router.navigate(['/pages/home']); 
      },
      (error) => {
        this.isLoading = false;
        this.loginError = 'Code de validation invalide ou expiré. Veuillez réessayer.';
      }
    );
  }
}

