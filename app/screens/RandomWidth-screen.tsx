import { observer } from "mobx-react-lite"
import React, { FunctionComponent as Component } from "react"
import { Header, Screen, Button } from "../components"
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated"
import styled from "styled-components"
import { color } from "../theme"
import { View } from "react-native"

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
    <Container>
      <Screen preset="scroll">
        <Header headerText="RandomWidthScreen" />
        <Wrapper>
          <AnimatedView style={viewStyle} />
          <Button
            onPress={() => (randomWidth.value = Math.random() * 350)}
            text="inc"
            style={{ alignSelf: "center" }}
          />
        </Wrapper>
      </Screen>
    </Container>
  )
})
