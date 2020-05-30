import { observer } from "mobx-react-lite"
import React, { FunctionComponent as Component } from "react"
import { View } from "react-native"
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated"
import styled from "styled-components"
import { Button, Screen } from "../components"

const AnimatedView = styled(Animated.View)`
  background-color: red;
  height: 100px;
  width: 10px;
`

const Container = styled(View)`
  flex: 1;
`

const Wrapper = styled(View)`
  flex: 1;
`

export const RandomWidthScreen: Component = observer(function RandomWidthScreen() {
  const randomWidth = useSharedValue(10)

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  }

  const viewStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    }
  })

  return (
    <Screen preset="scroll">
      <Wrapper>
        <AnimatedView style={viewStyle} />
        <Button
          onPress={() => (randomWidth.value = Math.random() * 350)}
          text="inc"
          style={{ alignSelf: "center" }}
        />
      </Wrapper>
    </Screen>
  )
})
