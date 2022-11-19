import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import HostDetails from '../components/HostDetails';
import SelectCarScreen from '../components/SelectCarScreen';
import NavigateCard2 from '../components/NavigateCard2';
import RideOptionsCard2 from '../components/RideOptionsCard2';
import RiderDetails from '../components/RiderDetails';

const Stack = createStackNavigator();

const MapNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="NavigateCard" component={NavigateCard} />
            <Stack.Screen name="HostDetails" component={HostDetails} />
            <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
        </Stack.Navigator>
    );
}

export default MapNavigator;
