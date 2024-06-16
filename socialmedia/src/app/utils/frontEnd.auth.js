import decode from 'jwt-decode';

const authService = () => {
    const getProfile = () => {
        const token = getToken();
        try {
            return token ? decode(token) : null;
        } catch (error) {
            console.error('Error getting profile', error);
            return null;
        }
    };
    const loggedIn = () => {
        const token = getToken();
        return !!token && !isTokenExpired(token);
    }
    const isTokenExpired = () => {
        try {
            const token = getToken();
            const decoded = decode(token);
            return decoded.exp < Date.now() / 1000;
        } catch (error) {
            console.error('Error checking token expiration', error);
            return false;
        }
    }
    const getToken = () => localStorage.getItem('id_token');
    const login = (idToken) => {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/home');
    };
    const logout = () => {
        localStorage.removeItem('id_token');
        window.location.reload();
    }

    return {
        getProfile,
        loggedIn,
        isTokenExpired,
        getToken,
        login
    }

}
export default authService();