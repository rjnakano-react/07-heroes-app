import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../src/auth";
import { Navbar } from "../../../src/ui";

const mockedUseNavigate = jest.fn();

// Create a mock from a library
jest.mock('react-router-dom',() =>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockedUseNavigate
}));

describe('Test <Navbar />', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'Pepe',
            id: '123'
        },
        logout: jest.fn()
    };

    beforeEach(() => jest.clearAllMocks() );

    test('should display logged username', () => {
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        expect(screen.getByText(contextValue.user.name)).toBeTruthy()        
    })

    test('should call logout and navigate when clicking on button', () => {
        
        
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        
        const logoutBtn = screen.getByRole('button', {name : 'logoutBtn'} )
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});
    })
})