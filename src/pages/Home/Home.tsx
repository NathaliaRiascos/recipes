import clsx from 'clsx'
import { SearchRecipe, CardRecipe } from './components'
import { Spinner } from '@/components'
import { useLazySearchRecipesQuery } from '@/services/recipesApi'
import { useEffect } from 'react'

function Home() {
  const [trigger, { data: recipes, isLoading, error }] =
    useLazySearchRecipesQuery()

  useEffect(() => {
    trigger('')
  }, [trigger])

  const handleSearch = (term: string) => {
    trigger(term)
  }

  return (
    <main
      className={clsx(
        'bg-gradient-to-br from-yellow-50 via-orange-50 min-h-screen py-16 px-10',
        'flex flex-col gap-y-22'
      )}
    >
      <section className="w-full flex flex-col items-center">
        <article className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Find the recipe for your
            <span className="block text-primary">favorite food</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover thousands of delicious recipes from around the world. From quick meals to gourmet dinners.
          </p>
        </article>
        <SearchRecipe isLoading={isLoading} onSearch={handleSearch} />
      </section>

      <section className="w-full flex flex-col gap-8">
        <div className="flex flex-col gap-y-14">
          <h2 className="text-3xl font-bold text-gray-900">
          All recipes
          </h2>
        </div>

        {isLoading && (
          <div className="content-center min-h-[400px]">
            <Spinner />
          </div>
        )}

        {error && (
          <div className="text-center py-8 min-h-[400px] w-full content-center">
            <p className="text-gray-900 mb-4">
            Oops, there was an error retrieving the recipes. Please try again later.
            </p>
          </div>
        )}

        {!isLoading && !error && recipes?.length && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            {recipes?.map(
              (recipe) =>
                recipe.strMealThumb && (
                  <CardRecipe
                    key={recipe.idMeal}
                    recipe={{
                      ...recipe,
                      strCategory: recipe.strCategory ?? '',
                      strArea: recipe.strArea ?? '',
                      strTags: recipe.strTags ?? '',
                      strInstructions: recipe.strInstructions ?? '',
                    }}
                  />
                )
            )}
          </div>
        )}

        {!isLoading && !error && recipes?.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">
            No recipes were found with that name.
            </p>
          </div>
        )}
      </section>
    </main>
  )
}

export default Home
