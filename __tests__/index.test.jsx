import { render, screen } from '@testing-library/react'
import articles from '../pages/articles'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('Recommendations Page works', () => {
    render(<articles />)

  })
})