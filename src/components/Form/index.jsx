import { Container } from "./style";


export function Form({
  containerStyle,
  title,
  titleStyle,
  subtitle,
  subtitleStyle,
  firstInput,
  firstInputStyle,
  secondInput,
  secondInputStyle,
  thirdInput,
  thirdInputStyle,
  fourInput,
  fourInputStyle,
  textarea,
  textareaStyle,
  button,
  buttonStyle,
  
  }){



  return(
    <Container style={containerStyle}>
      <h5 style={titleStyle}>{title}</h5>
     <span style={subtitleStyle}>{subtitle}</span>
     <div className="input-wrapper">
      <input style={firstInputStyle} type="text" placeholder={firstInput}/>
      <input style={secondInputStyle} type="text" placeholder={secondInput}/>
      <input style={thirdInputStyle} type="text" placeholder={thirdInput}/>
      <input style={fourInputStyle} type="text" placeholder={fourInput}/>
 
      <textarea style={textareaStyle} placeholder={textarea}></textarea>
    </div>
      <button style={buttonStyle}>{button}</button>
    </Container>
  )
}