  import { Component } from '@angular/core';
  import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
  import {AuthService} from '../../../core/auth/auth.service';
  import {Router, RouterLink} from '@angular/router';

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
        next: (response) => {
          // Utilisation de la méthode getUserRole pour déterminer la redirection
          const userRole = this.authService.getUserRole();
          console.log('Rôle de l\'utilisateur:', userRole);
          switch (userRole) {
            case 'ADMIN':
              this.router.navigate(['/admin']);
              break;
            case 'AUTHOR':
              this.router.navigate(['/author']);
              break;
            case 'REVIEWER':
              this.router.navigate(['/reviewer']);
              break;
            case 'USER':
              this.router.navigate(['/user']);
              break;
            default:
              this.loginError = 'Rôle inconnu. Contactez l\'administrateur.';
          }

        },
        error: (error) => {
          this.loginError = 'Échec de la connexion. Vérifiez vos identifiants.';
          console.error('Erreur de connexion:', error);
        },
        complete: () => (this.isLoading = false),
      });
    }
  }
