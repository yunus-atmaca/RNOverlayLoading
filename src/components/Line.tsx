import React, { useState } from 'react'
import { View } from 'react-native'

export default function line({
  onRef,
  left,
  top,
  degree,
  color,
  initialOpacity
}) {
  const [opacity, setOpacity] = useState(initialOpacity)
  onRef({ setOpacity: setOpacity })
  return (
    <View
      style={[{
        position: 'absolute',
        left: left,
        top: top,
        height: 8,
        width: 2,
        opacity: opacity,
        borderRadius: 1,
        backgroundColor: color,
        alignItems: 'center',
        justifyContent: 'center',
      }, { transform: [{ rotate: (-90 + degree) + 'deg' }] }]} />
  )
}