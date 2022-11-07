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
        <h2 style={{color: "white", backgroundColor: "#034f84", width: "25%", padding: "0.5em", border: "1px transparent solid", borderRadius: "5px"}}>Books already read</h2>
        <FavoriteRecipes />
      </section>
      <hr />
      <section>
        <h2 style={{color: "white", backgroundColor: "#810000", width: "25%", padding: "0.5em", border: "1px transparent solid", borderRadius: "5px"}}>30 scientific divulgation books that you must read</h2>
        <AllRecipes />
      </section>
      <section>
        <footer className="app-footer">Bucheli Web Development © 2022</footer>
      </section>
    </main>
  )
}