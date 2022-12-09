import { useContext} from 'react'
import { View , Text , StyleSheet , FlatList } from 'react-native'
import { KartContext } from '../../contexts/kartContext'
import CartItem from '../../components/CartItem'

export default function Kart(){
    const {kart, addItemKart} = useContext(KartContext);

    return(
        <View style={styles.container} >
          <FlatList
            data={kart}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=> String(item.id) }
            renderItem={ ({item}) => (
                <CartItem
                 data={item}    
                />
            )}
                
         />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fafafa',
        paddingStart: 15,
        paddingEnd: 15,
        paddingTop: 15

    }
})