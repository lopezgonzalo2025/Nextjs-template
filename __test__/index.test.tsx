/* eslint-disable max-len */

// import { prettyDOM } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'

import { render } from '@testing-library/react'

import Index from '../src/app/page'
import { Home } from '../src/app/page'

describe('<Index />', () => {
  let component: any

  beforeEach(() => {
    component = render(<Index />)
  })

  test('Snapshots', () => {
    const { container } = component
    expect(container).toMatchSnapshot()
  })

  test('Render with destructuring import', () => {
    // Usefully for testing components that are exported with a name
    render(<Home />)
  })

  test('Render with default import', () => {
    // Debug the component to see the HTML output in the console (useful for debugging)
    // component.debug()

    const textsToSearch = ['Home']

    textsToSearch.forEach((text) => {
      component.getByText(text)
    })
  })
})
