import { Button as KTButton, ButtonProps as BaseButtonProps } from "@ui-kitten/components"
import { flatten, mergeAll } from "ramda"
import * as React from "react"
import { ViewStyle } from "react-native"
import { Text } from "../text/text"

export interface ButtonProps extends BaseButtonProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: string
  txOptions?: object

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string

  /**
   * An optional style override useful for padding & margin.
   */
  style?: ViewStyle | ViewStyle[]

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: any

  /**
   * One of the different types of text presets.
   */
  children?: any
  full?: boolean
  loading?: boolean
  loadingSize?: number | "small" | "large"
  loadingColor?: string
}

export const Button: React.FC<ButtonProps> = props => {
  const {
    tx,
    text,
    style: styleOverride,
    textStyle: textStyleOverride,
    children,
    disabled,
    full,
    onPress: onPressProps,
    ...rest
  } = props

  const notFullStyle: ViewStyle = !full && { alignSelf: "flex-start" }
  const opacity = disabled ? 0.2 : 1

  const viewStyle = mergeAll(
    // @ts-ignore
    flatten([notFullStyle, styleOverride, { opacity }]),
  )

  const textStyle = mergeAll(
    // @ts-ignore
    flatten([textStyleOverride]),
  )

  const customProps = {}

  return (
    <KTButton
      style={viewStyle}
      onPress={!disabled ? onPressProps : undefined}
      activeOpacity={disabled ? opacity : 0.5}
      {...rest}
      {...customProps}
    >
      {evaProps => {
        let content = tx || text
        if (children && typeof children !== "string") {
          return React.cloneElement(children, { ...evaProps })
        } else if (children) content = children

        return <Text {...evaProps} style={[evaProps.style, textStyle]} text={content} />
      }}
    </KTButton>
  )
}
