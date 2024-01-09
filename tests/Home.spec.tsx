import { render, screen, within } from '@testing-library/react'

import Home from '../src/app/[lang]/page'

describe('Home', () => {
	it('should have Docs text', async () => {
		// arrange
		render(await Home({ params: { lang: 'en' } }))

		// act
		const myElement = screen.getByText('Docs')

		// assert
		expect(myElement).toBeInTheDocument()
	})

	it('should contain the text "information"', async () => {
		// arrange
		render(await Home({ params: { lang: 'en' } }))

		// act
		const myElement = screen.getByText(/information/i)

		// assert
		expect(myElement).toBeInTheDocument()
	})

	it('should have an alternative text attribute on the image', async () => {
		// arrange
		render(await Home({ params: { lang: 'en' } }))

		// act
		const imageLink = screen.getByRole('link', { name: /By Vercel Logo/ })
		const image = within(imageLink).getByRole('img')

		// assert
		expect(image).toHaveAttribute('alt', 'Vercel Logo')
	})

	it('should open the links in a new tab', async () => {
		// arrange
		render(await Home({ params: { lang: 'en' } }))

		// act
		const links = screen.getAllByRole('link')

		// assert
		links.forEach((link) => {
			// expect(link).toHaveAttribute('target', '_blank')
			expect(link).toHaveAttribute('rel', 'noopener noreferrer')
		})
	})
})
