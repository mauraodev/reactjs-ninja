'use strict'

import React from 'react'
import Button from './button'

const SearchButton = () => (
  <Button handleClick={(e) => { alert('Search') }}>Search</Button>
)

export default SearchButton
