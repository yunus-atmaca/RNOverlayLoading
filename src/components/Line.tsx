import React, { useState } from 'react'
import { View } from 'react-native'

interface LineProps {
  onRef: (ref) => void
  left: number
  top: number
  degree: number
  color: string
  initialOpacity: number
}

export default function line({
  onRef,
  left,
  top,
  degree,
  color,
  initialOpacity
}: LineProps) {
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