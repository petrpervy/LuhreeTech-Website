import React from 'react'
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { GlassCard } from '@/components/GlassCard'

describe('GlassCard', () => {
  it('renders consistently', () => {
    const { container } = render(<GlassCard>hello</GlassCard>)
    expect(container.firstChild).toMatchSnapshot()
  })
})


