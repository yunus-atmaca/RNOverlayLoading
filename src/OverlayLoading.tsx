import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import Circular, { CircularType } from './Circular'

const { width, height } = Dimensions.get('window')

export enum LoadingType {
  CircularCircle = 'Circular-Circle',
  CircularLine = 'Circular-Line',
  CircularDefault = 'Circular-Default'
}

interface OverlayLoadingProps {
  loading: boolean
  overlayBackgroundColor?: string
  loadingText?: string
  loadingColor?: string
  renderLoadingText?: () => React.ReactNode
  type?: LoadingType
}

class OverlayLoading extends React.Component<OverlayLoadingProps, any> {

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

    if (this.props.type) {
      let splitType = this.props.type.split('-')

      //console.log(splitType)
      if (splitType[0] === 'Circular') {
        return (
          <Circular
            loadingColor={this.props.loadingColor || '#cf000f'}
            type={splitType[1]}
          />
        )
      } else if (splitType[0] === 'Line') {

      } else {
        console.warn('Un-know Type')
        return null
      }
    }

    return (
      <Circular
        loadingColor={this.props.loadingColor || '#cf000f'}
        type={CircularType.Circle}
      />
    )
  }

  render() {
    if (!this.state.loading)
      return null
    return (
      <View style={[StyleSheet.absoluteFill, {
        backgroundColor: this.props.overlayBackgroundColor || 'rgba(20,20,20, .25)'
      }]}>
        {
          this._getLoadingView()
        }
        {
          <View style={{
            height: 56,
            width: Dimensions.get('window').width,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: height / 2 + 24
          }}>
            {
              this.props.renderLoadingText ?
                (
                  this.props.renderLoadingText()
                )
                :
                (
                  this.props.loadingText !== '' && this.props.loadingText && (
                    <Text style={{
                      color: 'black',
                      fontSize: 16,
                    }}>
                      {this.props.loadingText}
                    </Text>
                  )
                )
            }
          </View>
        }
      </View>
    )
  }
}

export default OverlayLoading
