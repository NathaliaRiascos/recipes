import React from 'react'
import { Link } from 'react-router-dom'
import { Icon, Badge, Button } from '@/components'
import clsx from 'clsx'
import { Recipe } from '@/models'

interface CardRecipeProps {
  recipe: Recipe;
}

export const CardRecipe: React.FC<CardRecipeProps> = ({ recipe }) => {
  return (
    <article
      key={recipe.idMeal}
      className={clsx(
        'overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg',
        'flex flex-col justify-between'
      )}
    >
      <header className="relative">
        <img
          src={recipe.strMealThumb}
          alt={`Imagen de ${recipe.strMeal}`}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {recipe.strCategory ? (
          <div className="absolute top-3 left-3">
            <Badge variant="primary">{recipe.strCategory}</Badge>
          </div>
        ) : null}
        {recipe.strArea ? (
          <div className="absolute top-3 right-3">
            <Badge
              variant="default"
              className="bg-blue-500 border-blue-500 text-white"
            >
              {recipe.strArea}
            </Badge>
          </div>
        ) : null}
      </header>

      <section className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-900">
          {recipe.strMeal}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {recipe.strInstructions?.slice(0, 100)}...
        </p>

        <footer className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Icon name="utensils" className="h-4 w-4" aria-hidden="true" />
            <span>{recipe.strCategory}</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon
              name="star"
              className="h-4 w-4 text-yellow-400"
              aria-hidden="true"
            />
            <span>4.5</span>
          </div>
        </footer>

        {recipe.strTags && (
          <div className="flex flex-wrap gap-1 mb-2" role="list">
            {recipe.strTags
              .split(',')
              .slice(0, 2)
              .map((tag: string, index: number) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="text-xs"
                  role="listitem"
                >
                  {tag.trim()}
                </Badge>
              ))}
          </div>
        )}
      </section>

      <footer className="p-4 pt-0 w-full">
        <Link to={`/recipe/${recipe.idMeal}`} className="w-full">
          <Button className="w-full">See Recipe</Button>
        </Link>
      </footer>
    </article>
  )
}
