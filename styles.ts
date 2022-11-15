import * as styledComponents from "styled-components/native";

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as unknown as styledComponents.ReactNativeThemedStyledComponentsModule<MydefaultTheme>;
interface MydefaultTheme {
  blueColor: string;
  inputBgColor: string;
  borderColor: string;
}
const MyTheme = {
  blueColor: "#00aeec",
  inputBgColor: "#F6F7F8",
  borderColor: "#F1F2F3",
};
export { css, ThemeProvider, MyTheme };
export default styled;
