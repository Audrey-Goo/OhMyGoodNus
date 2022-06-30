import { render, screen } from '@testing-library/react'
import PProfile from '../pages/profile'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('Home page works', () => {
    render(<PProfile />)

  })
})