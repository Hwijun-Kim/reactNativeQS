import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';

import WebView from 'react-native-webview';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const url = 'https://www.google.com';

function App(): React.JSX.Element {
  const ref = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <WebView
          ref={ref}
          style={styles.webview}
          source={{uri: url}}
          originWhitelist={['*']}
          javaScriptEnabled={true}
          domStorageEnabled={true}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  webview: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
  },
});

export default App;
