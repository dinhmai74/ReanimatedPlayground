import { observer } from "mobx-react-lite"
import React, { FunctionComponent as Component } from "react"
import styled from "styled-components"
import { Screen, SizedBox } from "../../components"
import { TinderCard } from "./TinderCard"
import { spacing } from "../../theme"

const StyledScreen = styled(Screen)(p => ({
  backgroundColor: p.theme["color-basic-100"],
  padding: spacing[6],
}))

export const TinderCardScreen: Component = observer(function TinderCardScreen() {
  return (
    <StyledScreen>
      <SizedBox h={4} />
      <TinderCard />
    </StyledScreen>
  )
})
