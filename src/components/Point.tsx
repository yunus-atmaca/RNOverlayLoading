import React, { useState } from 'react'
import {
  View,
  Text
} from 'react-native'

export default function point({
  left,
  top,
  onRef,
  initialSize
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
        backgroundColor: 'red',
        opacity: size > 5 ? 1 : (size > 3 ? 0.7 : 0.5),
        alignItems: 'center',
        justifyContent: 'center'
      }} />
  )
}