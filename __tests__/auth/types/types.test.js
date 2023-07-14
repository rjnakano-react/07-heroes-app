import { types } from "../../../src/auth/types/types"

describe('Test types.js', () => {
    test('should return the following types', () => {
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })
})