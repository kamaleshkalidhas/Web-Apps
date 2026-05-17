import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Image, Text, SafeAreaView, StatusBar } from 'react-native';
import WebView from 'react-native-webview';
import NetInfo from '@react-native-community/netinfo';
import Splash from '../components/Splash'; // Import the Splash component

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isConnected, setIsConnected] = useState(false); // State to track internet connection status

  // useEffect hook to fetch initial internet connection status
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  // useEffect hook to handle loading state
  useEffect(() => {
    if (isLoading) {
      // Logic to set isLoading state to false after some delay (simulating content loading)
      const loadingTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 3000); // Adjust the delay as needed

      // Clear the timeout to avoid memory leaks
      return () => clearTimeout(loadingTimeout);
    }
  }, [isLoading]); // useEffect will run whenever isLoading changes

  // Render content based on various conditions
  const renderContent = () => {
    if (error) {
      // Handle error case
    } else if (isLoading) {
      // Display splash screen while content is loading
      return <Splash />;
    } else if (isConnected) {
      // Load WebView if connected to the internet
      return (
        <WebView
          source={{ uri: 'https://www.w3schools.com/' }}
          style={{ flex: 1 }}
          onError={() => setError(true)}
        />
      );
    } else {
      // Display image indicating no internet connection
      return (
        <View style={styles.noInternetContainer}>
          <Image 
            source={require('../assets/images/No_network.png')} 
            style={styles.image} 
            resizeMode="contain"
          />
          <Text style={styles.noInternetText}>Please check your internet connection</Text>
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
<View style={styles.container}>
      {renderContent()}
      {isLoading && <ActivityIndicator style={styles.loadingIndicator} size="large" color="#02844a" />}
    </View>
    </SafeAreaView>
    
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  noInternetContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  image: {
    width: '70%',
    height: '35%',
  },
  noInternetText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: "#000"
  },
  loadingIndicator: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
});

export default App;
