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
