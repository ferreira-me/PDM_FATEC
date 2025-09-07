import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerToggleButton } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Ionicons from '@expo/vector-icons/Ionicons';

import { CepProvider } from './src/contexts/CepContext';
import { RootStackParamList } from './src/types';

import ViaCEP from './src/screens/ViaCEP';
import Consultas from './src/screens/Consultas';

const Drawer = createDrawerNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <CepProvider>
        <NavigationContainer>
          <Drawer.Navigator
            initialRouteName="ViaCEP"
            screenOptions={({ route }) => ({
              headerLeft: () => <DrawerToggleButton />,
              drawerIcon: ({ color, size }) => {
                const name = route.name === 'ViaCEP' ? 'search' : 'list';
                return <Ionicons name={name} size={size} color={color} />;
              },
            })}
          >
            <Drawer.Screen name="ViaCEP" component={ViaCEP} options={{ title: 'ViaCEP' }} />
            <Drawer.Screen name="Consultas" component={Consultas} options={{ title: 'Consultas de CEP' }} />
          </Drawer.Navigator>
        </NavigationContainer>
      </CepProvider>
    </GestureHandlerRootView>
  );
}
