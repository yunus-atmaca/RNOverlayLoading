import React from 'react'
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native'

import Point from './components/Point'

export enum Type {
  Circle = 'Circle',
  Line = 'Line',
  Default = 'Default'
}

const { width, height } = Dimensions.get('window')

const colr = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
]

const RADIUS = 16
const DEGREE = 360 / colr.length
const CENTER_POINT = {
  x: width / 2,
  y: height / 2,
}

class Circular extends React.Component {

  currentIndex: number
  interval: any
  constructor(props) {
    super(props)

    this.currentIndex = 11
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }

    this.interval && clearInterval(this.interval)
  }

  toDegrees = (angle) => {
    return angle * (180 / Math.PI);
  }

  toRadians = (angle) => {
    return angle * (Math.PI / 180);
  }

  _getSize = (index) => {
    switch (index) {
      case 0:
        return 7;
      case 1:
        return 6;
      case 2:
        return 5;
      case 3:
      case 4:
        return 4;
      case 5:
      case 6:
      case 7:
        return 3;
      case 8:
      case 9:
      case 10:
        return 2;
      case 11:
        return 0;
    }
  }

  _onLayout = () => {
    //console.debug('_onLayout')
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }

    /*this.interval = setInterval(() => {
      this.currentIndex = this.currentIndex === 11 ? 0 : this.currentIndex + 1
      for (let i = 0; i <= 11; ++i) {
        let index = this.currentIndex - i < 0 ?
          (12 + (this.currentIndex - i))
          :
          (this.currentIndex - i)
        this[index].setSize(this._getSize(i))
      }
    }, 180)*/
  }

  render() {
    return (
      <View onLayout={this._onLayout}>
        {
          colr.map((_, index) => {
            return (
              <Point
                key={index + 'key'}
                onRef={(ref) => { this[index] = ref }}
                initialSize={this._getSize(Math.abs(index - 11))}
                left={RADIUS * Math.cos(this.toRadians(DEGREE) * index) + CENTER_POINT.x}
                top={RADIUS * Math.sin(this.toRadians(DEGREE) * index) + CENTER_POINT.y}
              />
            )
          })
        }
      </View>
    )
  }
}

export default Circular