import React from 'react'
import {
  View,
  Text,
  Dimensions
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

  constructor(props) {
    super(props)

  }

  toDegrees = (angle) => {
    return angle * (180 / Math.PI);
  }

  toRadians = (angle) => {
    return angle * (Math.PI / 180);
  }

  render() {
    return (
      <View>
        {
          colr.map((_, index) => {
            return (
              <Point
                key={index + 'key'}
                onRef={() => { }}
                index={index}
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