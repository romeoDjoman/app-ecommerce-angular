```bash
# Core - Services, Guards, Intercepteurs
mkdir -p src/app/core/http
ng generate service core/auth/auth
ng generate service core/http/http
ng generate guard core/auth/role
ng generate interceptor core/auth/token

# Shared - Composants partagés
ng generate component shared/header
ng generate service shared/shared.config

# Features - Cart (Panier)
ng generate component features/cart/cart-list
ng generate service features/cart/cart
ng generate service features/cart/cart.routes

# Features - Publications
ng generate component features/publications/publication-list
ng generate service features/publications/publication
ng generate service features/publications/publications.routes

# Roles - Admin
ng generate component roles/admin/dashboard/admin-dashboard
ng generate service roles/admin/admin.routes

# Roles - Author
ng generate component roles/author/dashboard/author-dashboard
ng generate service roles/author/author.routes

# Roles - Customer
ng generate component roles/customer/dashboard/customer-dashboard
ng generate service roles/customer/customer.routes

# Unauthorized Page
ng generate component unauthorized

# Bootstrapping
ng generate service app.bootstrap
```
```
~\Documents\MyDev\Nexa\app-ecommerce-angular
├───.angular
│   └───cache
├───.idea
├───.vscode
├───node_modules
├───public
├───readme
└───src
    ├───app
    │   ├───core
    │   │   ├───auth                   # Authentification (services, guards, interceptors)
    │   │   │   ├───guards             # Guards d'authentification
    │   │   │   ├───interceptors       # Intercepteurs HTTP
    │   │   │   └───services           # Services d'authentification
    │   │   ├───http                   # Services HTTP génériques
    │   │   ├───models                 # Modèles de données
    │   │   └───services               # Services globaux
    │   ├───features                   # Fonctionnalités principales
    │   │   ├───cart                   # Gestion du panier
    │   │   │   ├───components         # Composants du panier
    │   │   │   │   ├───cart-list      # Liste des articles du panier
    │   │   │   │   └───cart-item      # Composant d'article individuel du panier
    │   │   │   └───routes.ts          # Routes spécifiques au panier
    │   │   └───publications           # Gestion des publications
    │   │       ├───components         # Composants des publications
    │   │       │   ├───publication-list  # Liste des publications
    │   │       │   └───publication-item  # Publication individuelle
    │   │       └───routes.ts          # Routes spécifiques aux publications
    │   ├───layouts                    # Layouts (header, footer, etc.)
    │   │   ├───header
    │   │   ├───footer
    │   │   └───main-layout            # Layout principal (avec router-outlet)
    │   ├───pages                      # Pages de l'application
    │   │   ├───home                   # Page d'accueil
    │   │   ├───unauthorized           # Page d'accès non autorisé
    │   │   └───not-found              # Page 404
    │   ├───roles                      # Rôles (Admin, Auteur, etc.)
    │   │   ├───admin
    │   │   │   ├───dashboard          # Tableau de bord admin
    │   │   │   └───routes.ts          # Routes spécifiques à l'admin
    │   │   └───author
    │   │       ├───dashboard          # Tableau de bord auteur
    │   │       └───routes.ts          # Routes spécifiques à l'auteur
    │   ├───shared                     # Composants, services, pipes réutilisables
    │   │   ├───components             # Composants partagés
    │   │   │   ├───spinner            # Spinner de chargement
    │   │   │   ├───buttons            # Boutons réutilisables
    │   │   │   └───modals             # Modals réutilisables
    │   │   ├───pipes                  # Pipes personnalisés
    │   │   └───directives             # Directives personnalisées
    │   ├───app.config.ts              # Configuration de l'application (providers, routes, etc.)
    │   ├───main.ts                    # Point d'entrée de l'application
    │   └───app.component.ts           # Composant racine de l'application
    ├───assets
    ├───environments                   # Environnements
    │   ├───environment.ts
    │   └───environment.prod.ts
    ├───index.html
    ├───styles.css
    └───test.ts
```
