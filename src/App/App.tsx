import React, { lazy, Suspense } from "react"
import ErrorBoundry from "shared/ErrorBoundry"

const PokemonDetails = lazy(() => import("shared/PokemonDetails"))

function App() {
  return (
    <div>
      <h1>Pokedex</h1>
      <ErrorBoundry>
        <Suspense fallback={<div>Fetching Pokemon...</div>}>
          <PokemonDetails />
        </Suspense>
      </ErrorBoundry>
    </div>
  )
}

export default App
