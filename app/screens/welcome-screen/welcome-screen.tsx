import React, { FunctionComponent as Component } from "react"
import { View, Image, ViewStyle, TextStyle, ImageStyle, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color, spacing } from "../../theme"
import styled from "styled-components"

const Container = styled(View)`
  flex: 1;
  padding: ${spacing[6]}px;
`

const screens = ["RandomWidth"]

export const WelcomeScreen: Component = observer(function WelcomeScreen() {
  const navigation = useNavigation()

  return (
    <Container>
      <Screen preset="scroll" backgroundColor={color.transparent}>
        {screens.map((v, i) => (
          <Button text={v} key={v} onPress={() => navigation.navigate(v)} />
        ))}
      </Screen>
    </Container>
  )
})
