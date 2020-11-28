import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import Circular, { Type } from './Circular'


const { width, height } = Dimensions.get('window')

export enum LoadingType {
  CircularPoint = 'Circular-Point',
  CircularLine = 'Circular-Line',
  CircularDefault = 'Circular-Default'
}

interface OverlayLoadingProps {
  loading: boolean
  overlayBackgroundColor?: string
  loadingText?: string
  type?: LoadingType
}

interface OverlayLoadingState {
  state: number
}

enum LType {
  Circular = 'Circular',
  Linear = 'Linear'
}

class OverlayLoading<P extends OverlayLoadingProps> extends React.Component<P, any> {

  constructor(props) {
    super(props)

    this.state = this._setState()

  }

  _setState = () => {

    let _state = {
      loading: this.props.loading
    }

    return _state
  }

  private _getLoadingView = () => {
    return (
      <Circular />
    )
  }

  render() {
    if (!this.state.loading)
      return null
    return (
      <View style={[StyleSheet.absoluteFill, {
        backgroundColor: 'rgba(20,20,20, .25)'
      }]}>
        {
          this._getLoadingView()
        }
        <View style={{
          height: 56,
          width: Dimensions.get('window').width,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: height / 2 + 24
        }}>
          <Text style={{
            color: 'black',
            fontSize: 16,
          }}>
            Loading...
          </Text>
        </View>
      </View>
    )
  }
}

export default OverlayLoading
