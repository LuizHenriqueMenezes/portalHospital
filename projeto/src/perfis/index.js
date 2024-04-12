import { View, Text, Image, ScrollView } from 'react-native';
import { styles } from './styles';

let dr1 = {
  nome: 'Nina Menezes Feitosa',
  area: 'Pediatria',
  avaliacao: 'Excelente',
  foto: 'https://pbs.twimg.com/profile_images/1774784473696985089/674u45z3_400x400.jpg',
};

let dr2 = {
  nome: 'Fabinho Fanhoso',
  area: 'Ortopedista',
  avaliacao: 'Ótimo',
  foto: 'https://pbs.twimg.com/profile_images/1702924747078557696/vvk5El5g_400x400.jpg',
};

let dr3 = {
  nome: 'Alfredo Borges',
  area: 'Cirurgião Plastico',
  avaliacao: 'Bom',
  foto: 'https://pbs.twimg.com/media/GKGEZx3XkAAbKJm?format=jpg&name=medium',
};

function perfil() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{ uri: dr1.foto }} style={[styles.foto]} />
        <Text style={[styles.nomin]}>{dr1.nome}</Text>
        <Text style={[styles.xxxx]}>ÁREA: {dr1.area}</Text>
        <Text style={[styles.xxxx]}>AVALIAÇÃO: {dr1.avaliacao}</Text>

        <Image source={{ uri: dr2.foto }} style={[styles.foto]} />
        <Text style={[styles.nomin]}>{dr2.nome}</Text>
        <Text style={[styles.xxxx]}>ÁREA: {dr2.area}</Text>
        <Text style={[styles.xxxx]}>AVALIAÇÃO: {dr2.avaliacao}</Text>

        <Image source={{ uri: dr3.foto }} style={[styles.foto]} />
        <Text style={[styles.nomin]}>{dr3.nome}</Text>
        <Text style={[styles.xxxx]}>ÁREA: {dr3.area}</Text>
        <Text style={[styles.xxxx]}>AVALIAÇÃO: {dr3.avaliacao}</Text>
      </ScrollView>
    </View>
  );
}

export default perfil;
