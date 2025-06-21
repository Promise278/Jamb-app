import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from './Dashboard';
import DrawerContent from './DrawerContent'

const DrawerNav = createDrawerNavigator();

export default function Drawer() {
  return (
    <DrawerNav.Navigator  drawerContent={(props) => <DrawerContent {...props} />} screenOptions={{ headerShown: false }} >
      <DrawerNav.Screen name="DashboardHome" component={Dashboard} />
        
    </DrawerNav.Navigator>
  );
}
