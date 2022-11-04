import React from 'react';

import { AllRecipes } from '../features/allRecipes/AllRecipes.js';
import { SearchTerm } from '../features/searchTerm/SearchTerm.js';
import { FavoriteRecipes } from '../features/favoriteRecipes/FavoriteRecipes.js';

export function App() {
  return (
    <main>
      <section>
        <SearchTerm />
      </section>
      <section>
        <h2 style={{color: "#e4eff0"}}>My Favorite Sci-Fi Movies</h2>
        <FavoriteRecipes />
      </section>
      <hr />
      <section>
        <h2 style={{color: "#e4eff0"}}>All Movies</h2>
        <AllRecipes />
      </section>
    </main>
  )
}
