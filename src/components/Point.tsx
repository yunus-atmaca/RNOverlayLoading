import React, { useState } from 'react'
import { View } from 'react-native'

export default function point({
  index,
  left,
  top,
  onRef
}) {
  const [size, setSize] = useState(0)
  onRef({ setSize: setSize })
  return (
    <View
      style={{
        position: 'absolute',
        left: left,
        top: top,
        height: index,
        width: index,
        borderRadius: 6,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
      }} />
  )
}