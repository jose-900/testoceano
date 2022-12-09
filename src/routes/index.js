import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../pages/Home'
import Kart from '../pages/kart'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name='Kart'
                component={Kart}
                options={{
                    headerTitle:'Detalhes dos Pilotos'
                }}
            />

        </Stack.Navigator>
    )
}