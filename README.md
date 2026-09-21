<div align="center">

# 🎮 Game Store Catalog

**A full-stack video game storefront for browsing, searching, filtering and wishlisting games, with an admin dashboard for managing the catalog.**

Next.js 16 + React 19 on the frontend, an Elixir/Phoenix REST API with PostgreSQL on the backend, and Cloudinary for cover images.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
<br/>
[![Elixir](https://img.shields.io/badge/Elixir-1.14%2B-4B275F?style=for-the-badge&logo=elixir&logoColor=white)](https://elixir-lang.org/)
[![Phoenix](https://img.shields.io/badge/Phoenix-1.8-FD4F00?style=for-the-badge&logo=phoenixframework&logoColor=white)](https://www.phoenixframework.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/DaniloK77/Game-Store-Catalog?style=for-the-badge&logo=github)](https://github.com/DaniloK77/Game-Store-Catalog/stargazers)

<br/>

<!-- TODO: replace with a real screenshot or GIF of the app, e.g. ./docs/screenshot.png -->
![Game Store Catalog screenshot](https://placehold.co/1200x630/4f46e5/ffffff?text=Game+Store+Catalog+-+screenshot+coming+soon)

🌐 **Live demo:** [YOUR_DEMO_URL] · 🐛 [Report a bug](https://github.com/DaniloK77/Game-Store-Catalog/issues) · 💡 [Request a feature](https://github.com/DaniloK77/Game-Store-Catalog/issues)

</div>

---

## ✨ Features

**Storefront**

- ✅ **Game catalog** loaded from the REST API and shown in a responsive card grid
- ✅ **Featured games carousel** on the home page
- ✅ **Live search** from the navbar, with a 300 ms debounce and the search term shared across pages
- ✅ **Filters** for platform, genre and *in stock only*, applied in PostgreSQL
- ✅ **Sorting** by price (low → high / high → low), release year or title
- ✅ **Game details pages** pre-rendered at build time (SSG), with per-game SEO metadata and a custom 404
- ✅ **Wishlist** saved in `localStorage`, with no account required
- ✅ **Loading skeletons & empty states** with a one-click *Clear Filters* button
- ✅ **Mobile-first responsive design**, including a burger menu and an admin table that adapts to screen size

**Admin & Security**

- ✅ **Admin login** with bearer tokens. Logging out revokes the token on the server.
- ✅ **Full CRUD** for games: create, edit and delete
- ✅ **Cover image uploads** to Cloudinary. Deleting a game also deletes its image from Cloudinary.
- ✅ **Role-based access** (`user` / `admin`) with bcrypt password hashing and a login that resists timing attacks
- ✅ **User management API** to list and create users and to promote or demote them, with self-demotion blocked
- ✅ **Phoenix LiveView admin panel**, a server-rendered alternative dashboard for games and users
- ✅ **Automated tests** (ExUnit) for the Games and Accounts contexts and the Game and Session API controllers, using a mocked image service and ExCoveralls for coverage

---

## 🛠️ Tech Stack

### Frontend

| Category | Technology | Version |
| --- | --- | --- |
| Framework | [Next.js](https://nextjs.org/) (App Router) | 16.1.6 |
| UI library | [React](https://react.dev/) | 19.2.3 |
| Language | [TypeScript](https://www.typescriptlang.org/) | 5.x |
| Styling | [Tailwind CSS](https://tailwindcss.com/) via `@tailwindcss/postcss` | 4.x |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) | 5.6 |
| Fonts | Geist & Geist Mono via `next/font` | — |

### Backend

| Category | Technology | Version |
| --- | --- | --- |
| Language | [Elixir](https://elixir-lang.org/) | ~> 1.14 |
| Web framework | [Phoenix](https://www.phoenixframework.org/) | 1.8.5 |
| Server-rendered UI | [Phoenix LiveView](https://hexdocs.pm/phoenix_live_view) | 1.1 |
| Database layer | [Ecto SQL](https://hexdocs.pm/ecto_sql) + Postgrex | 3.13 / 0.22 |
| Database | [PostgreSQL](https://www.postgresql.org/) | 14+ |
| HTTP server | [Bandit](https://hexdocs.pm/bandit) | 1.10 |
| Password hashing | [bcrypt_elixir](https://hexdocs.pm/bcrypt_elixir) | 3.3 |
| HTTP client | [Req](https://hexdocs.pm/req) + Multipart | 0.5 |
| CORS | [CORSPlug](https://hexdocs.pm/cors_plug) | 3.0 |
| Image hosting | [Cloudinary](https://cloudinary.com/) | — |
| Deployment | [Render](https://render.com/) (`backend/build.sh`) | — |

### Dev Tools

| Category | Technology | Version |
| --- | --- | --- |
| Linting | ESLint + `eslint-config-next` | 9.x / 16.1.6 |
| Formatting | Prettier / `mix format` | 3.8.1 / — |
| Testing | ExUnit + Ecto SQL Sandbox + ExCoveralls | — / — / 0.18 |
| LiveView assets | Tailwind CLI + esbuild | 4.1.12 / 0.25.4 |
| Dev monitoring | Phoenix LiveDashboard (`/dev/dashboard`) | 0.8 |

---

## 📁 Project Structure

```text
Game-Store-Catalog/
├── frontend/                        # Next.js 16 storefront + admin dashboard
│   ├── app/                         # App Router: pages, layouts, global styles
│   │   ├── layout.tsx               # Root layout: Navbar, Footer, SearchProvider
│   │   ├── page.tsx                 # Home: featured carousel + latest games
│   │   ├── games/                   # /games catalog and /games/[id] details (SSG)
│   │   ├── wishlist/                # /wishlist (localStorage-backed)
│   │   ├── admin/                   # Admin login + game CRUD (token-protected)
│   │   ├── types/game.ts            # Shared `Game` TypeScript type
│   │   └── data/games.json          # Legacy mock data (not used at runtime)
│   ├── components/                  # Reusable UI components + SearchContext
│   ├── lib/                         # API helpers: getGames(), apiFetch()
│   ├── public/                      # Static assets
│   └── package.json                 # Scripts & dependencies
│
└── backend/                         # Elixir/Phoenix REST API + LiveView admin
    ├── lib/
    │   ├── game_store/              # Business logic: Games & Accounts contexts, Cloudinary, Repo
    │   └── game_store_web/          # Web layer: router, controllers, plugs, LiveViews, JSON views
    ├── priv/repo/                   # Ecto migrations + seeds.exs (12 sample games + admins)
    ├── config/                      # dev / test / prod / runtime configuration
    ├── test/                        # ExUnit tests + test support (FakeImageService)
    ├── assets/                      # Tailwind + JS for the LiveView UI
    ├── mix.exs                      # Dependencies & mix aliases (setup, precommit, ...)
    └── build.sh                     # Render build & release script
```

---

## 🏗️ Architecture

**Frontend ↔ backend communication.** The two apps are fully decoupled and only talk through a JSON **REST API** under `/api`. Phoenix sends every request through a **Plug pipeline**. Public reads and login use `:api`. Writes use `:api_auth`, where the `RequireApiAuth` plug turns the `Authorization: Bearer <token>` header into an admin user. Controllers are thin: they delegate to **contexts**, which build composable **Ecto** queries against PostgreSQL. On the frontend, most catalog pages are **Client Components** that load data in `useEffect` through `lib/GetGames.ts`. The `/games` page passes search, filter and sort as query parameters, so the database does the filtering. The game details page is an async **Server Component** that uses `generateStaticParams` and `generateMetadata`, so every game gets its own pre-rendered page and SEO tags at build time. Cover images are uploaded from the browser straight to Cloudinary (unsigned preset), and the API only receives the resulting URL.

**State management.** The frontend uses no external state library. A single **React Context** (`SearchContext`) holds the search term, so the navbar's `SearchBar` and the pages share it without prop drilling. Each page keeps its own filters, sort order and loading flags in `useState`. Two things are stored in **`localStorage`**: the wishlist (a comma-separated list of game IDs) and the admin bearer token. `lib/apiFetch.ts` attaches that token to every authenticated request and sends the user back to the login page on a `401`.

**Design patterns.** The frontend is **component-based** and splits containers from presentational components. Pages own data and state, while `GameGrid`, `GameCard`, `FilterPanel` and similar components are pure, props-driven UI. The search term is shared through the **Provider pattern**. The backend follows Phoenix's layered **MVC + Contexts** architecture, where the bounded contexts `Games` and `Accounts` keep business rules out of the web layer. It also uses:

- **Plug middleware** for authentication
- `action_fallback` for centralized error handling
- A JSON view layer (`GameJSON`) that maps snake_case columns to camelCase JSON
- **Behaviour-based dependency injection**: `GameStore.ImageService` is implemented by `GameStore.Cloudinary` and, in tests, by `GameStore.FakeImageService`

The backend also has a server-rendered **Phoenix LiveView** admin panel. Its login goes through `GameStore.RenderAPI`, a small HTTP client for the deployed API.

```mermaid
flowchart LR
    U(["👤 User / Admin"])

    subgraph FE["Frontend · Next.js 16"]
        direction TB
        PAGES["App Router pages<br/>Client + Server Components"]
        CTX["SearchContext<br/>React Context"]
        LS[("localStorage<br/>wishlist · token")]
        LIB["lib/GetGames · lib/apiFetch"]
    end

    subgraph BE["Backend · Phoenix 1.8"]
        direction TB
        RT["Router + Plug pipelines<br/>:api / :api_auth"]
        CT["Controllers<br/>Game · Session · User"]
        CX["Contexts<br/>Games · Accounts"]
        LV["LiveView admin<br/>/admin/*"]
    end

    DB[("PostgreSQL")]
    CL[["☁️ Cloudinary"]]

    U --> PAGES
    PAGES <--> CTX
    PAGES <--> LS
    PAGES --> LIB
    LIB -- "REST / JSON + Bearer token" --> RT
    RT --> CT --> CX
    CX -- "Ecto queries" --> DB
    PAGES -- "unsigned image upload" --> CL
    CX -- "delete cover image" --> CL
    U -. "server-rendered admin" .-> LV
    LV --> CX
```

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version | Notes |
| --- | --- | --- |
| [Node.js](https://nodejs.org/) | ≥ 20.9 | Required by Next.js 16 |
| npm | ≥ 10 | Comes with Node.js 20+ |
| [Elixir](https://elixir-lang.org/install.html) | ≥ 1.14 | Developed with 1.19 |
| Erlang/OTP | ≥ 25 | Developed with OTP 28 |
| [PostgreSQL](https://www.postgresql.org/download/) | ≥ 14 | Dev config expects user `postgres` / password `postgres` on `localhost` |
| [Cloudinary](https://cloudinary.com/) account | optional | Only needed to upload/delete cover images |

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/DaniloK77/Game-Store-Catalog.git
cd Game-Store-Catalog
```

**2. Set up and run the backend** (make sure PostgreSQL is running)

```bash
cd backend

# Optional: seed an admin account (password must be at least 8 characters)
export DANILO_EMAIL="admin@example.com"
export DANILO_PASSWORD="[YOUR_ADMIN_PASSWORD]"

# Install deps, create + migrate + seed the database, build LiveView assets
mix setup

# Start the API on http://localhost:4000
mix phx.server
```

> [!WARNING]
> `priv/repo/seeds.exs` starts with `Repo.delete_all(Game)`, so every run resets the `games` table to the 12 sample games.

**3. Point the frontend at your API**

> [!IMPORTANT]
> The API base URL is currently **hardcoded** to `https://game-store-catalog.onrender.com`. To use your local backend, replace it with `http://localhost:4000` in:
> `frontend/lib/GetGames.ts`, `frontend/lib/apiFetch.ts`, `frontend/app/admin/login/page.tsx`, `frontend/app/admin/games/page.tsx` and `frontend/app/admin/games/[id]/edit/page.tsx`.

**4. Set up and run the frontend**

```bash
cd ../frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). 🎉

**5. Log in as admin**

Go to [http://localhost:3000/admin/login](http://localhost:3000/admin/login), or use **Footer → ADMIN → Admin Panel**, and sign in with the admin credentials from step 2.

> [!NOTE]
> The Phoenix LiveView admin at `http://localhost:4000/admin/login` authenticates through `GameStore.RenderAPI`, which is hardcoded to the **deployed** API (`backend/lib/game_store/render_api.ex`).

#### Useful commands

```bash
# Backend (run inside ./backend)
mix test          # Run the ExUnit test suite (needs PostgreSQL)
MIX_ENV=test mix coveralls   # Run the tests with a coverage report
mix precommit     # Compile with warnings-as-errors, format, and test
mix ecto.reset    # Drop, recreate, migrate and re-seed the database

# Frontend (run inside ./frontend)
npm run lint      # Lint with ESLint
npm run build     # Production build (the API must be reachable: /games/[id] is pre-rendered)
npm start         # Serve the production build
```

### Environment Variables

#### Backend

In development, the database settings come from `backend/config/dev.exs`, so **no variables are needed to get started**. In production, the variables below are read in `config/runtime.exs`. The admin variables are read in `priv/repo/seeds.exs`.

| Variable | Required | Description | Example |
| --- | --- | --- | --- |
| `DATABASE_URL` | prod | PostgreSQL connection string | `ecto://USER:PASS@HOST/game_store` |
| `SECRET_KEY_BASE` | prod | Secret for signing cookies/sessions. Generate one with `mix phx.gen.secret` | `[YOUR_SECRET_KEY_BASE]` |
| `PHX_SERVER` | prod (release) | Starts the HTTP server when running a release | `true` |
| `PORT` | no | HTTP port (default `4000`) | `4000` |
| `POOL_SIZE` | no | DB connection pool size (default `10`) | `10` |
| `ECTO_IPV6` | no | Connect to the DB over IPv6 | `false` |
| `RENDER_EXTERNAL_HOSTNAME` | no | Public hostname used to build URLs (default `localhost`) | `game-store-catalog.onrender.com` |
| `DNS_CLUSTER_QUERY` | no | DNS query for clustering nodes | `[YOUR_DNS_QUERY]` |
| `CLOUDINARY_CLOUD_NAME` | prod | Cloudinary cloud name | `[YOUR_CLOUD_NAME]` |
| `CLOUDINARY_API_KEY` | prod | Cloudinary API key (used for image deletion) | `[YOUR_API_KEY]` |
| `CLOUDINARY_API_SECRET` | prod | Cloudinary API secret (signs delete requests) | `[YOUR_API_SECRET]` |
| `CLOUDINARY_UPLOAD_PRESET` | prod | Unsigned upload preset | `[YOUR_UPLOAD_PRESET]` |
| `DANILO_EMAIL` / `DANILO_PASSWORD` | seeds | Admin account created by `seeds.exs` | `admin@example.com` / `[YOUR_ADMIN_PASSWORD]` |
| `STEFAN_EMAIL` / `STEFAN_PASSWORD` | seeds | Second admin account created by `seeds.exs` | `admin2@example.com` / `[YOUR_ADMIN_PASSWORD]` |

#### Frontend

The frontend doesn't read any environment variables yet. The values below are hardcoded and would make good `NEXT_PUBLIC_*` variables:

| Value | Where it lives | Suggested variable |
| --- | --- | --- |
| API base URL | `lib/GetGames.ts`, `lib/apiFetch.ts`, admin pages | `NEXT_PUBLIC_API_URL=[YOUR_API_URL]` |
| Cloudinary cloud name | `app/admin/games/create`, `app/admin/games/[id]/edit` | `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=[YOUR_CLOUD_NAME]` |
| Cloudinary upload preset (`Game-Store`) | Same as above | `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET=[YOUR_UPLOAD_PRESET]` |

---

## 📖 API Reference

**Base URL:** `http://localhost:4000/api` (local) · `https://game-store-catalog.onrender.com/api` (deployed)

🔒 **Protected** endpoints require an `Authorization: Bearer <token>` header with a token from `POST /api/sessions`, and the token must belong to an **admin**. Otherwise the API responds with `401 { "error": "Unauthorized" }`.

> [!TIP]
> Request bodies use **snake_case** (`release_year`, `cover_image`, `in_stock`) wrapped in a `"game"` key. Responses use **camelCase** (`releaseYear`, `coverImage`, `inStock`). `price` is returned as a **string** because it's stored as a `Decimal`.

### Public endpoints

| Method | Endpoint | Description | Request Body | Response |
| --- | --- | --- | --- | --- |
| `GET` | `/api/games` | List games, with optional query filters (see below) | — | `200` `{ "data": [Game] }` · `400` `{ "error": "Invalid sort value", "received", "allowed" }` |
| `GET` | `/api/games/:id` | Get a single game | — | `200` `{ "data": Game }` · `404` `{ "error": "Game not found" }` |
| `POST` | `/api/sessions` | Admin login, returns a token | `{ "email", "password" }` | `201` `{ "token": "..." }` · `401` invalid credentials · `403` not an admin |

**Query parameters for `GET /api/games`** (all optional, can be combined):

| Param | Values | Example |
| --- | --- | --- |
| `search` | Case-insensitive title match (`ILIKE`) | `?search=shadow` |
| `platform` | `PC`, `PlayStation`, `Xbox` | `?platform=PC` |
| `genre` | e.g. `Action`, `RPG`, `Adventure`, `Racing`, `Shooter`, `Horror` | `?genre=RPG` |
| `inStock` / `in_stock` | `true`, `false` | `?inStock=true` |
| `sort` | `priceLow`, `priceHigh`, `newest`, `title` (any other value returns `400`) | `?sort=priceLow` |

### 🔒 Protected endpoints

| Method | Endpoint | Description | Request Body | Response |
| --- | --- | --- | --- | --- |
| `POST` | `/api/games` | Create a game | `{ "game": GameInput }` | `201` `{ "data": Game }` · `400` `{ "error": "Invalid game data" }` |
| `PUT` | `/api/games/:id` | Update a game (partial updates allowed) | `{ "game": Partial<GameInput> }` | `200` `{ "data": Game }` · `400` · `404` |
| `DELETE` | `/api/games/:id` | Delete a game and its Cloudinary cover | — | `200` `{ "data": Game }` · `404` · `500` if image cleanup fails |
| `DELETE` | `/api/sessions` | Log out (revokes the token) | — | `200` `{ "message": "Logged out successfully" }` |
| `GET` | `/api/users` | List all users | — | `200` `{ "data": [{ "id", "email", "role" }] }` |
| `POST` | `/api/users` | Create a user | `{ "user": { "email", "password", "role"? } }` | `201` `{ "data": User }` · `422` validation errors |
| `PATCH` | `/api/users/:id/role` | Change a user's role | `{ "role": "user" \| "admin" }` | `200` `{ "data": User }` · `403` self-demotion · `404` · `422` |

<details>
<summary><b>Example: create a game</b></summary>

`title`, `genre`, `platform`, `price`, `release_year` and `publisher` are required. `price` must be greater than 0, `release_year` must be between 1951 and 2029, and `title` can be at most 255 characters.

```bash
curl -X POST http://localhost:4000/api/games \
  -H "Authorization: Bearer [YOUR_TOKEN]" \
  -H "Content-Type: application/json" \
  -d '{
    "game": {
      "title": "Neon Drift",
      "genre": "Racing",
      "platform": "PC",
      "price": "29.99",
      "release_year": 2025,
      "publisher": "Indie Forge",
      "cover_image": "https://res.cloudinary.com/[YOUR_CLOUD_NAME]/image/upload/neon-drift.webp",
      "description": "Arcade street racing through a rain-soaked cyberpunk city.",
      "in_stock": true,
      "featured": false
    }
  }'
```

Response `201 Created`:

```json
{
  "data": {
    "id": 13,
    "title": "Neon Drift",
    "genre": "Racing",
    "platform": "PC",
    "price": "29.99",
    "releaseYear": 2025,
    "publisher": "Indie Forge",
    "coverImage": "https://res.cloudinary.com/[YOUR_CLOUD_NAME]/image/upload/neon-drift.webp",
    "description": "Arcade street racing through a rain-soaked cyberpunk city.",
    "inStock": true,
    "featured": false
  }
}
```

</details>

---

## 🔧 Key Functions & Components

### Frontend

| Name | What it does | Where it's used |
| --- | --- | --- |
| `SearchProvider` / `useSearch` (`components/SearchContext.tsx`) | Holds the global search term in React Context; `useSearch` throws if called outside the provider | `app/layout.tsx`, `SearchBar`, Home, `/games` |
| `SearchBar` | Search input that pushes its value to `SearchContext` after a 300 ms debounce | `Navbar` |
| `Navbar` | Sticky top bar with logo, search, navigation links and a mobile burger menu | Root layout |
| `FilterPanel` | Controlled platform / genre / in-stock filters plus a *Clear Filters* button | `/games` |
| `SortSelect` | Sort dropdown: price ↑ / ↓, newest first, title A → Z | `FilterPanel` |
| `Show` | Release-year order toggle (New → Old / Old → New) | Home page |
| `GameGrid` | Responsive 1/2/3-column grid of `GameCard`s with an optional `limit` | Home, `/games` |
| `GameCard` | Clickable card with cover, price, stock badge and wishlist toggle | `GameGrid`, `/wishlist` |
| `EmptyState` / `EmptyWishlist` | Screens for "no results" (with a reset callback) and for an empty wishlist | Home, `/games`, `/wishlist` |
| `Footer` | Collapsible link sections, social icons, Admin Panel entry point, back-to-top | Root layout |
| `getGames(params?)` (`lib/GetGames.ts`) | Builds the query string and calls `GET /api/games` | Home, `/games`, `/games/[id]`, `/wishlist` |
| `apiFetch(path, options)` (`lib/apiFetch.ts`) | `fetch` wrapper that adds JSON headers and the bearer token, and redirects to login on `401` | Admin create / edit / delete / logout |
| `AdminLayout` (`app/admin/layout.tsx`) | Client-side guard that redirects to `/admin/login` when no token is stored | All `/admin/*` routes |

### Backend

| Name | What it does | Where it's used |
| --- | --- | --- |
| `Games.list_games/1` | Composable Ecto query pipeline: platform → genre → stock → `ILIKE` search → sort | `GameController.index`, `GameLive.Index`, `AdminLive.Index` |
| `Games.get_game/1` | Fetches a game as `{:ok, game}` or `{:error, :not_found}` | Controllers, LiveViews |
| `Games.create_game/1` / `update_game/2` | Validate through `Game.changeset/2` and save to the database | `GameController`, `AdminLive.New` / `Edit` |
| `Games.delete_game/1` | Deletes the Cloudinary cover first and the DB row second, so the game is kept if cleanup fails | `GameController.delete`, `AdminLive.Index` |
| `Accounts.authenticate_user/2` | Checks the password with bcrypt and runs `no_user_verify` for unknown emails to prevent timing attacks | `Api.SessionController.create` |
| `Accounts.create_token/1` / `get_user_by_token/1` | Issues a random 32-byte URL-safe token and resolves a token back to its admin user | Login, `RequireApiAuth` |
| `Accounts.update_user_role/3` | Changes a user's role and blocks admins from demoting themselves | `UserController.update_role` |
| `Plugs.RequireApiAuth` | Reads `Authorization: Bearer`, assigns `current_user`, or halts with `401` | `:api_auth` pipeline |
| `Plugs.RequireAdmin` | Session guard for the LiveView admin panel | `/admin` browser scope |
| `GameStore.Cloudinary` | `ImageService` implementation: upload, `extract_public_id` and signed delete via Req | `Games`, LiveView admin |
| `GameStore.RenderAPI` | Req client for the deployed API (login, list users, change roles, create users) | `AdminSessionController`, `AdminLive.Users` |
| `GameJSON` | Serializes `Game` structs into camelCase JSON | `GameController` |

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. **Fork** the repository.
2. **Create a branch** for your change:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**, and check them before committing:
   ```bash
   cd backend && mix precommit     # compile, format, test
   cd ../frontend && npm run lint  # lint the frontend
   ```
4. **Commit** with a clear message ([Conventional Commits](https://www.conventionalcommits.org/) are encouraged):
   ```bash
   git commit -m "feat: add price range filter"
   ```
5. **Push** and open a **Pull Request** against `main`. Explain what changed and why, and add screenshots for UI changes.

**Guidelines**

- Keep pull requests small and focused on one change.
- Add or update ExUnit tests when you change context functions.
- Follow the existing code style (Prettier for the frontend, `mix format` for the backend).
- For larger changes, open an issue first to discuss the approach.

---

## 📄 License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for details.

<div align="center">

<br/>

If you find this project useful, please consider giving it a ⭐ on GitHub!

</div>
