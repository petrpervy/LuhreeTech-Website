import { describe, expect, it } from 'vitest'
import { cn } from '@/lib/cn'

describe('cn', () => {
  it('joins truthy classes', () => {
    expect(cn('a', false && 'x', 'b', null as any, undefined)).toBe('a b')
  })
})


