# Nuxt Boilerplate

A pre-configured Nuxt 4 starter template with a modern, opinionated tooling setup so you can start building features instead of wiring config.

## Stack

- **[Nuxt 4](https://nuxt.com)** — Vue meta-framework with the v4 compatibility future flag enabled.
- **[Vue 3](https://vuejs.org)** — Reactive UI layer.
- **TypeScript** — Strict, type-safe code across `app/` and `server/`.
- **[Tailwind CSS v4](https://tailwindcss.com)** — Loaded via `@tailwindcss/vite` (no PostCSS config needed).
- **[Nuxt UI](https://ui.nuxt.com)** — Pre-styled component library.
- **[VueUse](https://vueuse.org)** — Composables auto-imported via `@vueuse/nuxt`.
- **[Zod](https://zod.dev)** — Schema validation.

## Tooling

- **[Bun](https://bun.sh)** — Package manager and script runner.
- **[oxlint](https://oxc.rs/docs/guide/usage/linter.html)** — Fast Rust-based linter (`oxlint.config.ts`).
- **[oxfmt](https://oxc.rs/docs/guide/usage/formatter.html)** — Fast Rust-based formatter (`oxfmt.config.ts`).
- **[Vitest](https://vitest.dev)** — Test runner with three projects defined in `vitest.config.ts`:
  - `unit` — Node-environment unit tests in `test/unit/`.
  - `e2e` — Node-environment end-to-end tests in `test/e2e/`.
  - `nuxt` — Nuxt-environment component/integration tests in `test/nuxt/` (powered by `@nuxt/test-utils`).

## Project Structure

```
.
├── app/              # Client-side source (Nuxt 4 srcDir)
│   ├── assets/       # CSS, fonts, images
│   ├── components/   # Auto-imported Vue components
│   ├── layouts/      # Page layouts
│   ├── pages/        # File-based routes
│   ├── app.config.ts # Nuxt UI theme/runtime config
│   └── app.vue       # Root component
├── server/           # Server routes and middleware
├── public/           # Static assets served as-is
├── test/             # Test suites (unit / e2e / nuxt)
├── nuxt.config.ts    # Nuxt configuration
├── oxlint.config.ts  # Linter configuration
├── oxfmt.config.ts   # Formatter configuration
├── vitest.config.ts  # Test runner configuration
└── .nuxtrc           # Nuxt test-utils setup pin
```

## Getting Started

### Prerequisites

- **[Bun](https://bun.sh)** — `curl -fsSL https://bun.sh/install | bash`

### Install

```bash
bun install
```

### Develop

```bash
bun run dev
```

The dev server starts at <http://localhost:3000>.

### Build

```bash
bun run build      # production build into .output/
bun run preview    # preview the production build locally
bun run generate   # static site generation
```

## Scripts

| Command             | Description                      |
| ------------------- | -------------------------------- |
| `bun run dev`       | Start the Nuxt dev server        |
| `bun run build`     | Build for production             |
| `bun run generate`  | Generate static site             |
| `bun run preview`   | Preview the production build     |
| `bun run lint`      | Lint with oxlint                 |
| `bun run lint:fix`  | Lint and auto-fix                |
| `bun run fmt`       | Format with oxfmt                |
| `bun run fmt:check` | Check formatting without writing |
| `bun run test`      | Run all Vitest projects          |
| `bun run test:unit` | Run only unit tests              |
| `bun run test:nuxt` | Run only Nuxt-environment tests  |

## License

[MIT](LICENSE)
