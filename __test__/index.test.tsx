/* eslint-disable max-len */

// import { prettyDOM } from '@testing-library/dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Index from '../pages/index'
import { Home } from '../pages/index'

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

    const textsToSearch = [
      'Welcome to',
      'Get started by editing',
      'pages/index.tsx',
      'Documentation →',
      'Learn →',
      'Examples →',
      'Deploy →',
      'Powered by'
    ]

    textsToSearch.forEach((text) => {
      component.getByText(text)
    })

    const logo = component.container.querySelector('footer a span img')
    if (logo) {
      expect(logo).toHaveAttribute('src', '/vercel.svg')
    } else {
      throw new Error('Logo not found')
    }
  })
  test('Links', () => {
    const links = [
      {
        href: 'https://nextjs.org',
        text: 'Next.js!'
      },
      {
        href: 'https://nextjs.org/docs',
        text: 'Documentation →'
      },
      {
        href: 'https://nextjs.org/learn',
        text: 'Learn →'
      },
      {
        href: 'https://github.com/vercel/next.js/tree/canary/examples',
        text: 'Examples →'
      },
      {
        href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        text: 'Deploy →'
      },
      {
        href: 'https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
        text: 'Powered by'
      }
    ]

    const allA = component.container.querySelectorAll('a')
    allA.forEach((a: any) => {
      const { textContent } = a

      const link = links.find(({ text }) => textContent?.includes(text))

      if (link) {
        expect(a).toHaveAttribute('href', link.href)
      } else {
        throw new Error('Link not found')
      }
    })
  })
})
