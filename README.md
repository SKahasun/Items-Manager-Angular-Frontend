# 🛍️ Items Manager — Angular Frontend

An **Angular** single-page application for managing inventory items. Connects to an ASP.NET Core REST API to display and add items with a clean Bootstrap UI.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Application Routes](#application-routes)
- [Components](#components)
- [Services](#services)
- [Data Model](#data-model)
- [API Integration](#api-integration)

---

## ✨ Features

- 📋 **View all inventory items** in a sortable Bootstrap table
- ➕ **Add new items** via a validated template-driven form
- 🔗 **Routing** between Home, Items list, and Add Item pages
- ✅ **Form validation** with user-friendly inline error messages
- 📱 **Responsive navbar** with Bootstrap collapse support

---

## 🛠️ Tech Stack

| Technology                          | Purpose                    |
|-------------------------------------|----------------------------|
| Angular 15+                         | SPA Framework              |
| TypeScript                          | Language                   |
| Bootstrap 5                         | UI Styling & Components    |
| Angular Router                      | Client-side navigation     |
| HttpClient                          | REST API communication     |
| ReactiveFormsModule / FormsModule   | Form handling              |

---

## 📁 Project Structure

```
src/
└── app/
    ├── component/
    │   ├── home/                      # Home page component
    │   ├── items/                     # Item list component
    │   │   ├── items.component.ts
    │   │   └── items.component.html
    │   ├── add-items/                 # Add item form component
    │   │   ├── add-items.component.ts
    │   │   └── add-items.component.html
    │   └── nav/                       # Navigation bar component
    │       ├── nav.component.ts
    │       └── nav.component.html
    ├── models/
    │   └── item.ts                    # Item data model
    ├── services/
    │   └── data.service.ts            # HTTP service for API calls
    ├── app-routing.module.ts          # Route definitions
    ├── app.module.ts                  # Root module
    └── app.component.ts              # Root component
```

---

## ✅ Prerequisites

- [Node.js](https://nodejs.org/) v16+
- [Angular CLI](https://angular.io/cli) v15+
- ASP.NET Core API running at `http://localhost:5018`

```bash
npm install -g @angular/cli
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SKahasun/Items-Manager-Angular-Frontend/
cd Items-Manager-Angular-Frontend/
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
ng serve
```

App runs at **`http://localhost:4200`**

> ⚠️ Make sure the ASP.NET Core API is running at `http://localhost:5018` before using the app.

### 4. Build for Production

```bash
ng build
```

Output is placed in `dist/my-app/`.

---

## 🗺️ Application Routes

| Path          | Component           | Description              |
|---------------|---------------------|--------------------------|
| `/`           | `HomeComponent`     | Landing / home page      |
| `/Items`      | `ItemsComponent`    | View all inventory items |
| `/add-items`  | `AddItemsComponent` | Add a new item           |

---

## 🧩 Components

### `NavComponent`
Bootstrap responsive navbar with links to **Home** and **Items**. Uses Angular `[routerLink]` for navigation.

### `ItemsComponent`
Fetches and displays all items from the API in a Bootstrap table (`table-bordered`, `table-striped`, `table-hover`). Includes a button to navigate to the Add Items page.

### `AddItemsComponent`
Template-driven form with `ngModel` two-way binding for:
- **Item Name** — required
- **Unit Price** — required
- **Stock** — required

Shows inline validation errors on touched/invalid fields. Submits via `DataService.postItem()`.

### `AppComponent`
Root shell — renders `<app-nav>` and a `<router-outlet>` inside a Bootstrap `container-fluid`.

---

## ⚙️ Services

### `DataService`

Located at `src/app/services/data.service.ts`

| Method                                   | HTTP | Endpoint                          | Description       |
|------------------------------------------|------|-----------------------------------|-------------------|
| `getItems(): Observable<Item[]>`         | GET  | `http://localhost:5018/api/items` | Fetch all items   |
| `postItem(data: Item): Observable<Item>` | POST | `http://localhost:5018/api/items` | Create a new item |

---

## 📦 Data Model

```typescript
// src/app/models/item.ts
export class Item {
  constructor(
    public itemId?: number,
    public itemName?: string,
    public unitPrice?: number,
    public stock?: number
  ) {}
}
```

---

## 🔌 API Integration

This app connects to the **Items REST API** (ASP.NET Core). Ensure it is running before starting the Angular app.

| Setting      | Value                       |
|--------------|-----------------------------|
| API Base URL | `http://localhost:5018/api` |
| CORS Origin  | `http://localhost:4200`     |

To point to a different API URL, update `data.service.ts`:

```typescript
getItems(): Observable<Item[]> {
  return this.http.get<Item[]>('http://localhost:5018/api/items');
}
```
