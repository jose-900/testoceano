import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Pilotos({data , addToKart}) {
 return (
   <View style={styles.container} >
         <View>
            <Text style={styles.title}>{data.name}</Text>
            <Text>Volta 1: {data.volta_1_tempo}</Text> 
            <Text>Volta 2: {data.volta_2_tempo}</Text>
            <Text>Volta 3: {data.volta_3_tempo}</Text>
            <Text>Volta 4: {data.volta_4_tempo}</Text>
         </View>
    <TouchableOpacity style={styles.buttonAdd} onPress={addToKart}>
        <Text style={styles.buttonText} >+</Text>   
    </TouchableOpacity>     
   </View>
  );
}
const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        borderColor:'#DFDFDF',
        borderRadius:2,
        marginBottom: 14,
        padding: 8,
        paddingBottom: 14,
        paddingTop: 14,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title:{
        fontWeight:'bold'
    },
    buttonAdd:{
        paddingStart: 12,
        paddingEnd: 12,
        backgroundColor:'#006600',
        paddingTop: 6,
        paddingBottom: 6,
        borderRadius: 4,
    },
    tempo:{
        fontWeight:'bold',
        
    }
})