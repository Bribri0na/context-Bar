# FG - Webb application development - Assignment - Context - Dynamic Routes

This is a school assignment where I built a multipage recipe website using React Context and dynamic routing.

Users can log in, browse meal categories and recipes, pick a favourite category and save or remove recipes. The Home page shows a recipe from the user's favourite category, and the Profile page lists all saved recipes. Users can log out, and another user can log in during the same session.

## Tech Stack

- TypeScript
- React
- Next.js (App Router)
- Tailwind CSS

## Used API

- [TheMealDB](https://www.themealdb.com/api.php)

## Users

The users are hardcoded in `data/users.ts`.

| Username | Password | Favourite category |
| -------- | -------- | ------------------ |
| anna     | anna123  | Dessert            |
| erik     | erik123  | Seafood            |
| sara     | sara123  | –                  |

Each user sees a different recipe on the Home page. Sara has no favourite category, so she gets a random recipe.

Note: user data is only stored in Context, so refreshing the page logs the user out.

## Run Locally

```bash
npm install
npm run dev
```