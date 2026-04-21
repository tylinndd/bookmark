# Bookmark Lab

## What it is

Bookmark Lab is a small **cross-platform spike**: a bookmark list and detail flow implemented once in shared React Native code and served by **Next.js (web)** and **Expo (iOS/Android)** in the same monorepo.

## Why it exists

It exists to exercise the **Solito** pattern (one navigation model and shared screens across Next.js App Router and React Navigation) with realistic routes—home list, add screen, and a dynamic `/bookmarks/[id]` detail path—without production infrastructure.

## Repository layout

```
bookmark/                 # Git root
└── bookmark-lab/         # Yarn workspaces monorepo
    ├── apps/
    │   ├── next/         # Next.js App Router (web)
    │   └── expo/         # Expo / React Native entry and stack navigator
    └── packages/
        └── app/          # Shared UI, data, and Solito-friendly screens (`import from 'app/...'`)
```

Root scripts live in `bookmark-lab/package.json` and delegate to workspace packages `bookmark-lab-web` (Next) and `bookmark-lab-native` (Expo).

## Run the web app

From the monorepo root:

```sh
cd bookmark-lab
yarn
yarn web
```

This runs the Next dev server for the `bookmark-lab-web` workspace (default port is shown in the terminal, usually [http://localhost:3000](http://localhost:3000)).

## Run the native app

From the monorepo root:

```sh
cd bookmark-lab
yarn
yarn native
```

That starts Metro for the `bookmark-lab-native` workspace (`expo start`). For a dev build on device or simulator, use the usual Expo flow from `bookmark-lab/apps/expo` (for example `yarn ios` or `yarn android` after native projects are generated, or EAS as your team prefers).

## Solito behavior under test

This spike focuses on:

- **`solito/link`** — declarative links (e.g. list → `/bookmarks/:id`) that map to file-based routes on web and to React Navigation screen names on native.
- **`solito/navigation`** — `useRouter` for back navigation and programmatic moves; `useParams` on the Next dynamic segment for the bookmark id, aligned with the shared detail screen.

The native stack and Next App Router routes are kept in sync so the same screen components run in both environments.
