import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { AppRouter } from '../../src/router';

describe('Test <AppRouter />', () => {
    test('should display login page when unauthenticated', () => {

        const contextValue = {
            logged: false
        };

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>

        );

        expect(screen.getAllByText('Login').length).toBe(2);

    })
    
    test('should display any page but login page when authenticated', () => {

        const contextValue = {
            logged: true,
            user: {name: 'Ryuma', id:'123'}
        };

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>

        );

        expect(screen.getByText('Logout')).toBeTruthy();
        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);

    })
})