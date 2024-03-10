import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import 'jsdom'

afterEach(() => {
  cleanup()
})
