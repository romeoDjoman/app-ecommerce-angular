import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { BecomeAuthorReviewerComponent } from '../../../shared/become-author-reviewer/become-author-reviewer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../../core/auth/auth.service';
import { Router } from '@angular/router';
import { UserModel } from '../../../core/models/user-model';

@Component({
  selector: 'app-signup',
  imports: [
    HeaderComponent,
    BecomeAuthorReviewerComponent,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  registerForm: FormGroup;
  
    constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router
    ) {
      this.registerForm = this.fb.group({
        firstname: ['', Validators.required],
        lastname: ['', Validators.required],
        pseudo: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirm_password: ['', Validators.required],
      });
    }
  
    onSubmit(): void {
      if (this.registerForm.invalid) {
        alert('Veuillez remplir tous les champs correctement.');
        return;
      }
  
      if (this.registerForm.value.password !== this.registerForm.value.confirm_password) {
        alert('Les mots de passe ne correspondent pas.');
        return;
      }
  
      const userDetails: UserModel = {
        firstName: this.registerForm.value.firstname,
        lastName: this.registerForm.value.lastname,
        name: this.registerForm.value.pseudo,
        email: this.registerForm.value.email,
        pwd: this.registerForm.value.password,
        username: this.registerForm.value.pseudo, 
      };
  
      this.authService.signup(userDetails).subscribe({
        next: (response) => {
          alert('Inscription réussie ! Veuillez vérifier votre email pour activer votre compte.');
          this.router.navigate(['/auth/login']);
        },
        error: (error) => {
          alert('Erreur lors de l\'inscription : ' + error.message);
        },
      });
    }
}
