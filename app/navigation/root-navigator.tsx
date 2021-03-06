/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your PrimaryNavigator) which the user
 * will use once logged in.
 */
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"
import React from "react"
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { RandomWidthScreen, WelcomeScreen, MovingCardScreen, TinderCardScreen } from "../screens"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * We recommend using MobX-State-Tree store(s) to handle state rather than navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type RootParamList = {
  welcome: undefined
  RandomWidth: undefined
  MovingCard: undefined
  tinderCardScreen: undefined
}

const Stack = createNativeStackNavigator<RootParamList>()

const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="RandomWidth" component={RandomWidthScreen} />
      <Stack.Screen name="MovingCard" component={MovingCardScreen} />
      <Stack.Screen name="tinderCardScreen" component={TinderCardScreen} />
    </Stack.Navigator>
  )
}

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStack />
    </NavigationContainer>
  )
})

RootNavigator.displayName = "RootNavigator"
