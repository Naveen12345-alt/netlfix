import React from 'react'
import { useContent } from '../hooks'
import selectionFilter from '../utils/selection-filter'
import { BrowseContainer } from '../containers/browse'

export default function Browse() {
  // we need series and films
  const { series } = useContent('series')
  const { films } = useContent('films')

  // we need slides
  const slides = selectionFilter({ series, films })

  // pass it to the browse containers
  return <BrowseContainer slides={slides} />
}
