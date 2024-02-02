import { Container } from "./style";

export function TextGroup({
  smallerTitle,
  largerTitle,
  text,
  secondText,
  containerStyle,
  smallerTitleStyle,
  largerTitleStyle,
  textGroupStyle,
  textStyle,
  secondTextStyle
}) {
  return (
    <Container style={containerStyle}>
      <span style={smallerTitleStyle}>{smallerTitle}</span>
      <h1 style={largerTitleStyle}>{largerTitle}</h1>
      <div className="texts-group" style={textGroupStyle}>
        <p style={textStyle}>{text}</p>
        <p style={secondTextStyle}>{secondText}</p>
      </div>
    </Container>
  );
}