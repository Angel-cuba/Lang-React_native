import React from 'react'
import { View, StyleSheet, StatusBar } from 'react-native'

const Layout = ({ children }) => {
     return (
          <View style={styles.container}>
               <StatusBar style={styles.statusbar}/>
                    {children}
          </View>
     )
}

const styles = StyleSheet.create({
     container: {
          backgroundColor: "silver",
          padding: 20,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",

          },
          statusbar: {
               backgroundColor: "#1d2951"
          }
})

export default Layout
