# Bri Bar 🍸

A pixel style cocktail bar website built with Next.js, TypeScript and Tailwind CSS.
It uses React Context to keep track of the logged-in user and dynamic routes
to show drink categories and drinks from [TheCocktailDB API](https://www.thecocktaildb.com/api.php).

## Live Demo

https://context-bar.vercel.app/

## How to log in

Users are hardcoded in `data/users.ts`. Log in with one of these:

| Username | Password | Favourite category |
| -------- | -------- | ------------------ |
| anna     | anna123  | Cocktail           |
| erik     | erik123  | Shot               |
| sara     | sara123  | – (random drink)   |

Each user sees a different drink on the Home page based on their favourite category.
Sara has no favourite category yet, so she gets a random drink.

## Features

- **Log in / log out** – a new user can log in during the same session
- **Home page** – not logged in: log in form + a random drink from the API. Logged in: a welcome message and a drink from the user's favourite category
- **Categories page** – all categories from the API. Users can set a favourite category, which is saved in Context and used on the Home page
- **Category page** (`/categories/[category]`) – dynamic route showing all drinks in a category
- **Drink page** (`/drink/[id]`) – dynamic route showing ingredients and instructions. Users can save / unsave the drink
- **Profile page** – lists saved drinks. Clicking a drink opens the Drink page, and drinks can be removed
- **Responsive** – mobile menu that slides in from the side

## Context

`contexts/UserContext.tsx` holds the logged-in user and a `setUser` function.
`UserProvider` wraps the whole app in `app/layout.tsx`, and components read or
update the user with the `useUserContext` hook.

The context is used in `LogInWrapper`, `LogIn`, `Header`, and the Home, Categories, Drink and Profile pages.

The user is also saved in localStorage, so they stay logged in after a page refresh
until they log out. This is only for this assignment – a real app would use proper authentication.

## Project structure

```
app/          pages and dynamic routes
components/   reusable components
contexts/     UserContext
data/         hardcoded users and category icons
lib/          API calls and helper functions
types/        TypeScript types
```

## Run locally

```bash
npm install
npm run dev
```

## Tech

Next.js · TypeScript · Tailwind CSS · TheCocktailDB API