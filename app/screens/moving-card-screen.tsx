import { Card } from "@ui-kitten/components"
import { observer } from "mobx-react-lite"
import React, { FunctionComponent as Component } from "react"
import { PanGestureHandler } from "react-native-gesture-handler"
// @ts-ignore
import Animated, {
  // @ts-ignore
  useAnimatedGestureHandler,
  // @ts-ignore
  useAnimatedStyle,
  // @ts-ignore
  useSharedValue,
  // @ts-ignore
  withSpring,
} from "react-native-reanimated"
import styled from "styled-components"
import { Screen, Text } from "../components"
import { spacing } from "../theme"

const Container = styled(Screen)(p => ({
  paddingHorizontal: spacing[6],
}))

export const MovingCardScreen: Component = observer(function MovingCardScreen() {
  const x = useSharedValue(0)
  const y = useSharedValue(0)
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = x.value
      ctx.startY = y.value
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX
      y.value = ctx.startY + event.translationY
    },
    onEnd: _ => {
      x.value = withSpring(0)
    },
  })

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }, { translateY: y.value }],
    }
  })

  return (
    <Container>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={cardStyle}>
          <Card>
            <Text>
              The Maldives, officially the Republic of Maldives, is a small country in South Asia,
              located in the Arabian Sea of the Indian Ocean. It lies southwest of Sri Lanka and
              India, about 1,000 kilometres (620 mi) from the Asian continent
            </Text>
          </Card>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  )
})
