import { authorize } from "react-native-app-auth";
import SpotifyWebApi from "spotify-web-api-js";

// Configuração de autenticação do Spotify
const spotifyApi = new SpotifyWebApi();

const spotifyAuthConfig = {
  clientId: "9b45f364bd204eb396723099f754d8d8",
  clientSecret: "c1086983408a493db3410bf1d3154d91",
  redirectUrl: "myapp://auth", // Coloque a URI de redirecionamento configurada no dashboard do Spotify
  scopes: [
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "playlist-read-private",
    "playlist-read-collaborative",
    "streaming",
  ],
  serviceConfiguration: {
    authorizationEndpoint: "https://accounts.spotify.com/authorize",
    tokenEndpoint: "https://accounts.spotify.com/api/token",
  },
};

// Função para autenticar o usuário no Spotify
export const authenticateWithSpotify = async () => {
  try {
    const authState = await authorize(spotifyAuthConfig);
    spotifyApi.setAccessToken(authState.accessToken);
    return authState.accessToken;
  } catch (error) {
    console.error("Erro na autenticação do Spotify:", error);
    throw error;
  }
};

// Função para tocar uma playlist específica no Spotify
export const playSpotifyPlaylist = async (accessToken, playlistId) => {
  if (!accessToken) {
    throw new Error("Token de acesso não fornecido.");
  }

  try {
    spotifyApi.setAccessToken(accessToken);
    await spotifyApi.play({
      context_uri: `spotify:playlist:${playlistId}`,
    });
  } catch (error) {
    console.error("Erro ao tocar playlist:", error);
    throw error;
  }
};
