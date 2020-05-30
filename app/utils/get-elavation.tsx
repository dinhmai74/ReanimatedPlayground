import { Platform } from "react-native"

export const isIos = Platform.OS === "ios"

export const getElevation = (elevation = 8) => {
  if (!isIos) {
    return { elevation }
  }

  if (elevation === 0) {
    return {
      shadowColor: "transparent",
      zIndex: 0,
    }
  }

  return {
    shadowOpacity: 1,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 15,
  }
}
