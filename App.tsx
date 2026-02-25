import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Inicio_Sesion from './Pantallas/Incio_Sesion';
import Registro from './Pantallas/Registro';
import Inicio from './Pantallas/Inicio';
import Subir_Post from './Pantallas/Subir_Post';
import Perfil from './Pantallas/Perfil';
import Editar_Perfil from './Pantallas/Editar_Perfil';

export type RootStackParamList = {
  Inicio_Sesion: undefined,
  Registro: undefined,
  Inicio: undefined,
  Subir_Post: undefined,
  Perfil: undefined,
  Editar_Perfil: undefined,
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Inicio_Sesion'>
        <Stack.Screen 
            name="Inicio_Sesion" 
            component={Inicio_Sesion} 
            options={{ 
                headerShown: false 
            }}
        />
        <Stack.Screen 
            name="Registro" 
            component={Registro} 
            options={{ 
                headerShown: false 
            }}
        />
        <Stack.Screen 
            name="Inicio" 
            component={Inicio} 
            options={{ 
                headerShown: false 
            }}
        />
        <Stack.Screen 
            name="Subir_Post" 
            component={Subir_Post} 
            options={{ 
                headerShown: false 
            }}
        />
        <Stack.Screen 
            name="Perfil" 
            component={Perfil} 
            options={{ 
                headerShown: false 
            }}
        />
        <Stack.Screen 
            name="Editar_Perfil" 
            component={Editar_Perfil} 
            options={{ 
                headerShown: true 
            }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default App;
