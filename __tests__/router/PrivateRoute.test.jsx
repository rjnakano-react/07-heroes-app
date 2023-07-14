import { render, screen } from "@testing-library/react"
import { PrivateRoute } from "../../src/router/PrivateRoute"
import { AuthContext } from "../../src/auth"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Test <PrivateRoute />', () => {

    test('should show children when authenticated', () => {

        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            logged: true,
            user: {
                name: 'Pepe',
                id: '123'
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <PrivateRoute>
                        <h1>Ruta actual</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )        

        expect(screen.getByText('Ruta actual')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath","/marvel");
    })

    test('should navigate if not authenticated', () => {
        const contextValue = {
            logged: false
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <Routes>
                        <Route
                            path="/marvel"
                            element={
                                <PrivateRoute>
                                    <h1>Ruta actual</h1>
                                </PrivateRoute>
                            }
                        />
                        <Route path="/login" element={<h1>Página Reenviada</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
                            
        expect(screen.findByText('Página Reenviada')).toBeTruthy();

    })

    test('should store last path in local storage', () => {

    })
})