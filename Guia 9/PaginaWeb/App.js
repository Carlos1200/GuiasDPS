import React from 'react'
import { WebView } from 'react-native-webview';


const App = () => {

  return (
    <WebView
    originWhitelist={['*']}
    style={{flex: 1}}
      source={{html:
        `<h1>Esto es una pagina web</h1>
        <p>Es demasiado cool como para tener estilos</p>
        `
      
      }}
      javaScriptEnabled={true}
  domStorageEnabled={true}
    />
  )
}

export default App
