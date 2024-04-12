import { View, Text, ScrollView } from 'react-native'
import {styles} from './styles'
import Anuncio from '../../components/anuncio'

function Anuncios(){
  return(
    <View style={styles.tela}>
      <View>      
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
          <Anuncio foto='https://i0.wp.com/nectar.empregare.com/wp-content/uploads/2023/02/recepcionista-profissao.jpg?fit=1500%2C1000&ssl=1' titulo='Recepcionista' linha1='Qualificações: bom-humor, inglês' linha2='Carga horária: 36h semanais' linha3='Salário: R$3100,00'/>

          <Anuncio foto='https://blog.prozeducacao.com.br/wp-content/uploads/2022/09/enfermeira.jpg' titulo='Enfermeira(o)' linha1='Qualificações: no minímo técnico em enfermagem' linha2='Carga horária: 40h semanais' linha3='Salário: R$5000,00'/>

          <Anuncio foto='https://media.licdn.com/dms/image/C4D03AQGG2fR0s0rl3A/profile-displayphoto-shrink_200_200/0/1644285468858?e=2147483647&v=beta&t=uw0Dtlt0pSmpVGmiwjmwJl7rju9avKcJlcNUdgRLk70' titulo='Programador' linha1='Qualificações: ser perigoso' linha2='Carga horária: 2h semanais' linha3='Salário: R$10000,09'/>

          <Anuncio foto='https://imgb.ifunny.co/images/ddc0e80282453baba436f81d129994b20b13466934a211b33528053af628cf53_1.jpg' titulo='ADM' linha1='Qualificações: ser engraçado' linha2='Carga horária: 100h semanais' linha3='Salário: R$271838000,00'/>

          <Anuncio foto='https://aws-br-pic.kwai.net/kimg/EKzM1y8qmgEKAnMzEg1waG90by1vdmVyc2VhGoQBdXBpYy8yMDIzLzEyLzIwLzA4L0JNakF5TXpFeU1qQXdPRFF3TlRGZk1UVXdNREF4TlRRM05ETTRPVGd4WHpFMU1ERXdORGd5TXpBNU5EUTNNRjh5WHpNPV9vZmZuX0IzODVmMDZkYjljMWM2MTAxYzU3M2MxMjg5OTU3MjlmZi53ZWJw.webp' titulo='Chefe do necrotério' linha1='Qualificações: tocar berimbau' linha2='Carga horária: 40h semanais' linha3='Salário: R$5000,00'/>
        </ScrollView>
      </View>
    </View>
  )
}

export default Anuncios