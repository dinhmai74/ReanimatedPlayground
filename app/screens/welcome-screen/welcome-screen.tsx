import { useNavigation } from "@react-navigation/native"
import { List, ListItem } from "@ui-kitten/components"
import { observer } from "mobx-react-lite"
import React, { FunctionComponent as Component } from "react"
import { View } from "react-native"
import styled, { useTheme } from "styled-components"
import { Screen } from "../../components"
import { spacing } from "../../theme"

const Container = styled(View)(p => ({
  flex: 1,
  padding: spacing[6],
  backgroundColor: p.theme["color-basic-100"],
}))

const screens = ["RandomWidth", "MovingCard", "tinderCardScreen"]

export const WelcomeScreen: Component = observer(function WelcomeScreen() {
  const navigation = useNavigation()
  const color = useTheme()
  const renderItem = ({ item }) => (
    <ListItem title={item} onPress={() => navigation.navigate(item)} key={item} />
  )

  return (
    <Container>
      <Screen>
        <List
          data={screens}
          renderItem={renderItem}
          style={{ backgroundColor: color["color-basic-100"] }}
        />
      </Screen>
    </Container>
  )
})
