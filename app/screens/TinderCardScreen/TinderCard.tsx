import React from "react"
import styled from "styled-components"
import { getElevation } from "../../utils/get-elavation"
import { Dimensions, View, Image, StyleSheet } from "react-native"
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
import { PanGestureHandler } from "react-native-gesture-handler"
import { spacing } from "../../theme"
import { Text } from "@ui-kitten/components"
const { width, height } = Dimensions.get("window")

const Wrapper = styled(Animated.View)(p => ({
  backgroundColor: "#ffffff",
  height: height * 0.6,
  width: width * 0.8,
  padding: spacing[6],
  ...getElevation(),
}))

const StyledImage = styled(Image)(p => ({
  ...StyleSheet.absoluteFillObject,
  opacity: 0.7,
}))

const Header = styled(Text)(p => ({
  textAlign: "center",
  color: p.theme["color-basic-700"],
}))

interface TinderCardProps {}
const THRESH_HOLD = 300

export const TinderCard: React.FC<TinderCardProps> = props => {
  const x = useSharedValue(0)

  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = x.value
    },
    onActive: (event, ctx) => {
      x.value = ctx.startX + event.translationX
    },
    onEnd: ({ velocityX }) => {
      if (x.value < THRESH_HOLD && velocityX > 0) x.value = withSpring(0)
      else if (x.value > THRESH_HOLD && velocityX < 0) x.value = withSpring(0)
    },
  })

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: x.value }, { rotateZ: x.value * 0.001 }],
    }
  })

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <Wrapper style={containerAnimatedStyle}>
        <StyledImage source={{ uri: "https://picsum.photos/500/500" }} />
        <Header category="h1">123 </Header>
      </Wrapper>
    </PanGestureHandler>
  )
}
