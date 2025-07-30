import React, { useState } from 'react'
import { Icon } from '@/components'

interface Props {
  isLoading: boolean
  onSearch: (term: string) => void;
}

export const SearchRecipe = ({ isLoading, onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    e.preventDefault()
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim())
    }
  }

  const handleClear = () => {
    setSearchTerm('')
    onSearch('')
  }

  return (
    <div className="w-full max-w-2xl">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for recipes, ingredients..."
            className="w-full px-4 py-3 pl-12 pr-20 text-gray-900 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent shadow-sm"
            disabled={isLoading}
          />
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Icon name="search" className="h-5 w-5 text-gray-400" />
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            {searchTerm && (
              <button
                type="button"
                onClick={handleClear}
                className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Icon name="x" className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 flex gap-3 justify-center">
          <button
            type="submit"
            disabled={!searchTerm.trim() || isLoading}
            className="px-6 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading && searchTerm ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Search...
              </div>
            ) : (
              'Seach'
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
