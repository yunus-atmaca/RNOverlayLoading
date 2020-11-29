import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import OverlayLoading, { LoadingType } from './src/OverlayLoading'

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
          loadingColor={'red'}
          loadingText={'Loading...'}
          type={LoadingType.CircularLine}
          renderLoadingText={() => {
            return (
              <Text style={{
                color: 'blue',
                fontSize: 18,
              }}>
                Test Render...
              </Text>
            )
          }}
        />
      </View>
    )
  }
}

export default App