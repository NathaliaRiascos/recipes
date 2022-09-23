import { useLayoutEffect, useState } from 'react'

export const useDimensions = () => {
  const getDimensions = () => {
    const {
      innerWidth: width,
      innerHeight: height
    } = window
    return { width, height }
  }

  const [dimensions, setDimensions] = useState(getDimensions())
  const { width, height } = dimensions

  useLayoutEffect(() => {
    const handleDimensions = () => {
      setDimensions(getDimensions())
    }
    window.onresize = handleDimensions
    return () => window.removeEventListener('resize', handleDimensions)
  }, [])
  return {
    width,
    height
  }
}
