import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'São Paulo',
      slug: 'saopaulo',
      location: { latitude: -23.507682441250395, longitude: -46.64134960701396 }
    }
    const place2 = {
      id: '2',
      name: 'Dublin',
      slug: 'dublin',
      location: { latitude: 53.35170710661504, longitude: -6.262875419029746 }
    }

    render(<Map places={[place, place2]} />)

    expect(screen.getByTitle(/são paulo/i)).toBeInTheDocument()
    expect(screen.getByTitle(/dublin/i)).toBeInTheDocument()
  })
})
