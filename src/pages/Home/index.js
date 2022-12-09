import { useState , useContext} from 'react'
import { View , Text , StyleSheet ,SafeAreaView, FlatList,TouchableOpacity } from 'react-native'
import {Feather } from '@expo/vector-icons'
import Pilotos from '../../components/Pilotos'
import {useNavigation} from '@react-navigation/native'
import { KartContext } from '../../contexts/kartContext'

export default function Home(){
    const { kart , addItemKart } = useContext(KartContext)
    const navigation = useNavigation();
    const [corrida,setCorrida] = useState([
        {
            id:'1',
            name: "F.MASSA",
            volta_1_tempo: '1:02.852',
            volta_2_tempo: '1:03.130',
            volta_3_tempo: '1:02.769',
            volta_4_tempo: '1:02.787' 
        },
        {	id:'2',
            name: "K.RAIKKONEN",
            volta_1_tempo: '1:04.108',
            volta_2_tempo: '1:03.982',
            volta_3_tempo: '1:03.978',
            volta_4_tempo: '1:03.076' 
        },
        {
            id:'3',
            name: "R.BARRICHELLO",
            volta_1_tempo: '1:04.352',
            volta_2_tempo: '1:04.002',
            volta_3_tempo: '1:03.716',
            volta_4_tempo: '1:04.010' 
        },
        {	id:'4',
            name: "M.WEBBER",
            volta_1_tempo: '1:04.414',
            volta_2_tempo: '1:04.805',
            volta_3_tempo: '1:04.287',
            volta_4_tempo: '1:04.216' 
        },
        {	id:'5',
            name: "F.ALONSO",
            volta_1_tempo: '1:18.456',
            volta_2_tempo: '1:07.011',
            volta_3_tempo: '1:08.704',
            volta_4_tempo: '1:20.050' 
        },
        {	id:'6',
            name: "S.VETTEL",
            volta_1_tempo: '3:31.315',
            volta_2_tempo: '1:37.864',
            volta_3_tempo: '1:18.097',
            volta_4_tempo: '0:00.000'
        }
         
   
    ])

    function handleAddKart(item){
            addItemKart(item)
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.kartContent}>
                <Text style={styles.title} >Lista dos pilotos - Tempos</Text>
                
                <TouchableOpacity 
                style={styles.kartButton}
                
                onPress={()=> navigation.navigate("Kart")} 
                >
                {kart.length >= 1 && (
                    <View style={styles.dot}>
                    <Text style={styles.dotText}>
                        {kart?.length}
                    </Text>
                    </View>
                )}
                <Feather name="edit"  size={30} color="#000"/>
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.list}
                data={corrida}
                keyExtractor={(item)=> String(item.id)}
                renderItem={({item})=> <Pilotos data={item} addToKart={()=> handleAddKart(item)} /> }
            />


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#FAFAFA',
        paddingEnd: 14,
        paddingStart: 14
    },
    kartContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:22,
        marginBottom:22
    },
    title:{
        fontSize:22,
        fontWeight:'bold'
    },
    dot:{
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor:'#006600',
        width:20,
        height:20,
        borderRadius:10,
        position: 'absolute',
        zIndex: 99,
        bottom: -2,
        left: -4,
    },
    dotText:{
        fontSize: 12,
        color: '#fff'
      
    }
})