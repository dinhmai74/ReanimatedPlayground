import { useNavigation } from "@react-navigation/native"
import { Button, Icon } from "@ui-kitten/components"
import React, { FunctionComponent as Component } from "react"
import { View, ViewStyle } from "react-native"
import { translate } from "../../i18n/"
import { spacing } from "../../theme"
import { Text } from "../text/text"
import { HeaderProps } from "./header.props"

// static styles
const ROOT: ViewStyle = {
  flexDirection: "row",
  paddingHorizontal: spacing[4],
  alignItems: "center",
  paddingBottom: spacing[5],
  justifyContent: "flex-start",
}

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export const Header: Component<HeaderProps> = props => {
  const { headerText, headerTx, style } = props
  const header = headerText || (headerTx && translate(headerTx)) || ""
  const navigation = useNavigation()

  return (
    <View style={{ ...ROOT, ...style }}>
      <Button
        onPress={() => navigation.goBack()}
        appearance="ghost"
        accessoryLeft={props => <Icon {...props} name="arrow-ios-back-outline" />}
      />
      <Text text={header} />
    </View>
  )
}
