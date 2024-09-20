import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style"; // Importando os estilos

const HeartRateAlert = () => {
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
        <TouchableOpacity style={styles.alertButton}>
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
