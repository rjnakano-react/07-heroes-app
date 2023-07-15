import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { SearchPage } from "../../../src/heroes"

describe('Test <SearchPage />', () => {
    test('should display with default values', () => {
        const { container } = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()
    })

    test('should display Batman and the input field with the queryString value', () => {
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage />
            </MemoryRouter>
        )
        
        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman')

        const img = screen.getByRole('img');
        expect(img.src).toContain("/assets/heroes/dc-batman.jpg");

    })
})