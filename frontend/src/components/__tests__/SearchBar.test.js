import { render, screen, fireEvent, act } from '@testing-library/react'
import SearchBar from '../SearchBar'

describe("SearchBar component", () => {

    const mockChangeValue = jest.fn()
    const searchValue = ''
    
    it('renders search tag', () => {
        render(<SearchBar
            searchValue={searchValue}
            onSearchValueChange={mockChangeValue}
        />)
        const tagElement = screen.getByText('What do you want to eat today?')
        expect(tagElement).toBeInTheDocument()
    })
    
    it('renders input field with empty value', () => {
        render(<SearchBar
          searchValue={searchValue}
          onSearchValueChange={mockChangeValue}
        />)
        const inputElement = document.querySelector('input')
        expect(inputElement.value).toBe('')
    })
    
    it('triggers event handler on input change', () => {
        const changedSearchValue = 'Test'
        const {rerender} = render(
            <SearchBar
                searchValue={searchValue}
                onSearchValueChange={mockChangeValue}
            />
        )
        act(() => {
            fireEvent.change(document.querySelector('input'), {
                target: {value: 'Test'}
            })
        })
        rerender(
            <SearchBar
                searchValue={changedSearchValue}
                onSearchValueChange={mockChangeValue}
            />
        )
        const inputElement = document.querySelector('input')
        expect(inputElement.value).toBe('Test')
        expect(mockChangeValue).toBeCalledTimes(1)
    })
})
