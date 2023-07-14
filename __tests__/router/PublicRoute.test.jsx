import { render, screen } from "@testing-library/react"
import { PublicRoute } from "../../src/router/PublicRoute"
import { AuthContext } from "../../src/auth"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Test <PublicRoute />', () => {

    test('should show children if not authenticated', () => {

        const contextValue = {
            logged: false
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta pública</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Ruta pública')).toBeTruthy();
    })

    test('should navigate when authenticated', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Pepe',
                id: '123'
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route
                            path="login"
                            element={
                                <PublicRoute>
                                    <h1>Ruta pública</h1>
                                </PublicRoute>
                            }
                        />
                        <Route path="/" element={<h1>Página Reenviada</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.findByText('Página Reenviada')).toBeTruthy();

    })

})