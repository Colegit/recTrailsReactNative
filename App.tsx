import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import {Appbar, FAB} from 'react-native-paper';

import {ThemeProvider} from 'styled-components/native';

import {TenantEnum, TenantService} from './tenant/tenantService'


import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App () {

  //changing this variable will change all tenant specific configs within the project.
  const tenant = TenantEnum.mackenzie

  const tenantTheme = TenantService.getThemeForTenant(tenant)
  const tenantTitle = TenantService.getTitleForTenant(tenant) 

  return (
    <SafeAreaProvider>
    <View>
      <ThemeProvider theme={tenantTheme}>

      <Appbar.Header style={{backgroundColor: tenantTheme.primaryColor}}>
            <Appbar.Content title={tenantTitle}  
            titleStyle={{ color: tenantTheme.headerTextColor }}/>
            <Appbar.Action
              icon="crosshairs-gps"
              onPress={() => {
                console.log('go to current location');
              }}
            />
            <Appbar.Action
              icon="map-legend"
              onPress={() => {
                console.log('open legend');
              }}
            />
      </Appbar.Header>
      </ThemeProvider>
    </View>

    <FAB
          style={{
            position: 'absolute',
            margin: 16,
            right: 0,
            bottom: 0,
            backgroundColor: tenantTheme.secondaryColor,
          }}
          icon="layers"
          onPress={() => {
            // Handle FAB click
            console.log('Floating Action Button Clicked');
          }}
        />
    </SafeAreaProvider>
  );
}
