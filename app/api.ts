
export const TMDB_CONFIG = {

    BASE_URL: '',
    API_KEY: '',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_TMDB_ACCESS_TOKEN}`
    }
}

