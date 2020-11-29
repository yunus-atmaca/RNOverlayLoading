import React, { useState } from 'react'
import {
  View,
  Text
} from 'react-native'

export default function point({
  left,
  top,
  onRef,
  initialSize,
  color
}) {
  const [size, setSize] = useState(initialSize)
  onRef({ setSize: setSize })
  return (
    <View
      style={{
        position: 'absolute',
        left: left,
        top: top,
        height: size,
        width: size,
        borderRadius: 6,
        backgroundColor: color,
        opacity: size > 5 ? 1 : (size > 3 ? 0.75 : 0.45),
        alignItems: 'center',
        justifyContent: 'center'
      }} />
  )
}