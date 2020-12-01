import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Animated,
  Easing
} from 'react-native'
import Svg, { Circle, G, Rect } from 'react-native-svg'

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

interface DefaultProps {
  radius: number
  progress: Animated.Value
}

export default function Default({
  radius,
  progress
}: DefaultProps) {
  //const [opacity, setOpacity] = useState(initialOpacity)
  //onRef({ setOpacity: setOpacity })
  const circumference = radius * 2 * Math.PI
  const circleRef: any = React.useRef();
  const animated = React.useRef(new Animated.Value(0)).current;
  const percentage = 75
  const duration = 500
  const animation = (toValue) => {
    return Animated.timing(animated, {
      delay: 1000,
      toValue,
      duration,
      useNativeDriver: false,
      easing: Easing.out(Easing.ease),
    }).start(() => {
      animation(toValue === 0 ? percentage : 0);
    });
  };

  React.useEffect(() => {
    animation(percentage);
    animated.addListener((v) => {
      const maxPerc = 100 * v.value / 100;
      const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
      /*if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(v.value)}`,
        });
      }**/
      if (circleRef?.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    });

    return () => {
      animated.removeAllListeners();
    };
  });

  return (
    <Svg
      width={48}
      height={48}
      style={{
      }}>
      <G rotation='90dec' origin={`${radius} ${radius}`}>
        <Circle

          x={radius / 2}
          y={radius / 2}
          stroke={'red'}
          strokeOpacity={0.25}
          fill={'none'}
          cx={radius}
          cy={radius}
          r={radius}
          strokeWidth={3}
          strokeDasharray={circumference}
          //strokeDashoffset={circumference / 3}
          strokeLinecap={'round'}
        />
        <AnimatedCircle
          ref={circleRef}
          x={radius / 2}
          y={radius / 2}
          stroke={'red'}
          fill={'none'}
          cx={radius}
          cy={radius}
          r={radius}
          strokeWidth={3}
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          strokeLinecap={'round'}
        />
      </G>
    </Svg>
  )
}