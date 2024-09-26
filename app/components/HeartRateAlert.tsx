import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import styles from "../style"; // Importando os estilos
import { authenticateWithSpotify, playSpotifyPlaylist } from "./spotifyAuth"; // Importando as funções de autenticação

const HeartRateAlert = () => {
  const [accessToken, setAccessToken] = useState("");

  // Função para lidar com o clique no botão de playlist
  const handlePlayPlaylist = async () => {
    try {
      // Se o usuário ainda não foi autenticado, faça a autenticação
      if (!accessToken) {
        const token = await authenticateWithSpotify();
        setAccessToken(token); // Salvar o token de acesso no estado
      }

      // ID da playlist que você deseja tocar
      const playlistId = "3WlAfHbriUPICeO5CfACnt";
      await playSpotifyPlaylist(accessToken, playlistId);
      Alert.alert("Playlist tocando no Spotify!");
    } catch (error) {
      Alert.alert("Erro ao tentar tocar a playlist.");
    }
  };

  return (
    <View style={styles.alertContainer}>
      <View style={styles.heartIconWrapper}>
        <Text style={styles.heartIcon}>❤️</Text>
      </View>
      <Text style={styles.alertTitle}>Atenção!!</Text>
      <Text style={styles.alertMessage}>
        Seus batimentos cardíacos ultrapassaram 100bpm.
      </Text>
      <Text style={styles.alertPrompt}>Você gostaria...</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity onPress={handlePlayPlaylist} style={styles.alertButton}>
          <Text style={styles.alertButtonText}>Escutar Playlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.alertButton}>
          <Text style={styles.alertButtonText}>Participar de uma Imersão</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.alertButtonFullWidth}>
        <Text style={styles.alertButtonText}>
          Estou apenas realizando uma atividade física.
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeartRateAlert;
