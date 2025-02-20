  import { Component } from '@angular/core';
  import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
  import {AuthService} from '../../../core/auth/auth.service';
  import {Router, RouterLink} from '@angular/router';
  import {UserModel} from '../../../core/models/user-model';

  @Component({
    selector: 'app-login',
    imports: [
      ReactiveFormsModule,
      RouterLink,
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
  })
  export class LoginComponent {
    loginForm: FormGroup;
    isLoading = false;
    loginError: string | null = null;

    constructor(
      private fb: FormBuilder,
      private authService: AuthService,
      private router: Router
    ) {
      this.loginForm = this.fb.group({
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
    }

    login() {
      if (this.loginForm.invalid) {
        this.loginError = 'Veuillez remplir tous les champs correctement.';
        console.warn('Formulaire invalide :', this.loginForm.errors);
        return;
      }

      this.isLoading = true;
      this.loginError = null;

      const credentials = this.loginForm.value;
      console.log('Données du formulaire :', credentials);

      this.authService.login(credentials).subscribe({
        next: () => {
          console.log('Navigation vers la page d\'inscription');
          this.router.navigate(['/auth/signup']);
        },
        error: (error) => {
          this.loginError = 'Échec de la connexion. Vérifiez vos identifiants.';
          console.error('Erreur de connexion:', error);
        },
        complete: () => (this.isLoading = false),
      });
    }
  }
