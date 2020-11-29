import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import OverlayLoading from './src/OverlayLoading'

class App extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <TouchableOpacity onPress={() => {
          console.debug('CLICK')
        }}>
          <View style={{
            height: 52,
            width: 52,
            backgroundColor: 'blue'
          }}>

          </View>
        </TouchableOpacity>

        <OverlayLoading
          loading={true}
          loadingColor={'black'}
        />
      </View>
    )
  }
}

export default App