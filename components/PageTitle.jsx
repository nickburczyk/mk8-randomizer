import { View, Text, StyleSheet, PixelRatio } from "react-native";
import { palette } from "../assets/palette";

const fontScale = PixelRatio.getFontScale()
const getFontSize = (size) => size / fontScale

export const PageTitle = ({title, blurb}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {blurb && 
        <Text style={styles.blurb}>{blurb}</Text>
      }
    </View>

  )
}

const styles = StyleSheet.create({
  title: {
    color: palette.red.hex, 
    fontWeight: '900',
    fontSize: getFontSize(36),
    lineHeight: 54,
  },
  blurb: {
    color: palette.white.hex,
    marginBottom: 20,
    fontSize: getFontSize(16)
  },
})