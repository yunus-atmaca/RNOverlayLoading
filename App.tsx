import React from 'react'
import { View, Text } from 'react-native'

import OverlayLoading from './src/OverlayLoading'

class App extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <OverlayLoading
          loading={true}
        />
      </View>
    )
  }
}

export default App