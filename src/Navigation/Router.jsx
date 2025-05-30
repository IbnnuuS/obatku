import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {Home, Exploration, Profile} from '../screens';
import ObatDetail from '../screens/obatDetail';
import AddObatScreen from '../screens/addObat';
import {Home as HomeIcon, Discover, ProfileCircle} from 'iconsax-react-native';
import EditObatScreen from '../screens/editObat';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#89AC46',
        tabBarInactiveTintColor: '#BDBDBD',
        tabBarStyle: {
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '600',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => (
            <HomeIcon
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Exploration"
        component={Exploration}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({focused, color}) => (
            <Discover
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, color}) => (
            <ProfileCircle
              color={color}
              variant={focused ? 'Bold' : 'Linear'}
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ObatDetail"
          component={ObatDetail}
          options={{
            title: 'Detail Obat',
            headerStyle: {
              backgroundColor: '#89AC46',
              height: 74,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '600',
            },
            gestureEnabled: true,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="addObat"
          component={AddObatScreen}
          options={{
            title: 'Tambah Obat',
            headerStyle: {
              backgroundColor: '#89AC46',
              height: 74,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '600',
            },
            gestureEnabled: true,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
        <Stack.Screen
          name="editObat"
          component={EditObatScreen}
          options={{
            title: 'Edit Obat',
            headerStyle: {
              backgroundColor: '#89AC46',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '600',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
