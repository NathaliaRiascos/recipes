import React from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Spinner,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components'
import { Icon } from '@/components'
import { extractInstructions, getYouTubeVideoId } from '@/utils/formatt'
import { useGetRecipeByIdQuery } from '@/services/recipesApi'

export const Recipe: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data: recipe, isLoading, error } = useGetRecipeByIdQuery(id ?? '')
 

  if (isLoading) {
    return (
      <div className="min-h-screen content-center">
        <Spinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen content-center text-center">
        <p className="text-gray-600 mb-4">Oops, there was an error.</p>
        <Link to="/">
          <Button>Back to top</Button>
        </Link>
      </div>
    )
  }

  if (!recipe) {
    return (
      <div className="min-h-screen content-center text-center">
        <p className="text-gray-600 mb-4">The recipe was not found.</p>
        <Link to="/">
          <Button>Back to top</Button>
        </Link>
      </div>
    )
  }

  const ingredients = recipe.ingredients
  const youtubeVideoId = getYouTubeVideoId(recipe.strYoutube)

  const instructions = extractInstructions(recipe.strInstructions ?? '')

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-sm font-medium hover:text-primary"
            >
              <Icon name="arrow-left" className="h-4 w-4" />
              Back to recipes
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Recipe Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="relative">
            <img
              src={recipe.strMealThumb}
              alt={`Imagen de ${recipe.strMeal}`}
              width={600}
              height={400}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="space-y-4">
            <div>
              <div className="flex gap-2 mb-2">
                <Badge className="bg-yellow-500 text-white">
                  {recipe.strCategory}
                </Badge>
                <Badge className="bg-blue-500 text-white">
                  {recipe.strArea}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mb-2 text-gray-900">
                {recipe.strMeal}
              </h1>
              <p className="text-gray-600 text-lg">
                Deliciosa receta de {recipe.strArea?.toLowerCase()} de la
                categoría {recipe.strCategory?.toLowerCase()}
              </p>
            </div>

            {recipe.strTags && (
              <div className="flex flex-wrap gap-2">
                {recipe.strTags.split(',').map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag.trim()}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="recipe" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="recipe">Receta</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
          </TabsList>

          <TabsContent value="recipe" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Ingredients */}
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle>
                    Ingredients ({ingredients?.length ?? 0})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {ingredients?.map((ingredient, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <span>{ingredient.name}</span>
                          <span className="font-medium text-primary">
                            {ingredient.measure}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Instructions */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Instructions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {instructions.map((instruction, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <div>
                            <p className="text-gray-700">{instruction}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="video">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                Video Tutorial
                </CardTitle>
              </CardHeader>
              <CardContent>
                {youtubeVideoId ? (
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                      title="Recipe Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                ) : (
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">
                    Video not available for this recipe
                    </p>
                  </div>
                )}
                <p className="mt-4 text-gray-600">
                Follow this video tutorial step by step to prepare{' '}
                  {recipe.strMeal}. Learn all the professional techniques and tricks.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
