import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QualityPillars } from '@/components/standards/QualityPillars'

describe('QualityPillars', () => {
  it('should render the heading', () => {
    render(<QualityPillars />)
    expect(screen.getByText('Six Pillars of Quality')).toBeInTheDocument()
  })

  it('should render all six quality pillars', () => {
    render(<QualityPillars />)

    expect(screen.getByText('CO2 Extraction')).toBeInTheDocument()
    expect(screen.getByText('Third-Party Lab Testing')).toBeInTheDocument()
    expect(screen.getByText('USDA Organic Hemp')).toBeInTheDocument()
    expect(screen.getByText('THC-Free Guarantee')).toBeInTheDocument()
    expect(screen.getByText('GMP Certified')).toBeInTheDocument()
    expect(screen.getByText('Veterinarian Formulated')).toBeInTheDocument()
  })

  it('should render pillar descriptions', () => {
    render(<QualityPillars />)

    expect(
      screen.getByText(/supercritical CO2 extraction/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/independent, ISO-certified laboratories/i)
    ).toBeInTheDocument()
  })

  it('should render benefits for each pillar', () => {
    render(<QualityPillars />)

    expect(screen.getByText('No chemical residues')).toBeInTheDocument()
    expect(screen.getByText('Potency verification')).toBeInTheDocument()
    expect(screen.getByText('US-grown hemp')).toBeInTheDocument()
  })
})
