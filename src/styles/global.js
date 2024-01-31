import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Shippori Mincho';
}

h1 {
  font-size: 4rem;
  font-weight: 700;
}
h2 {
  font-size: 3.5rem;
  font-weight: 700;
}
h3{
  font-size: 3re,;
  font-weight: 700;
}
h4{
  font-size: 2.5rem;
  font-weight: 700;
}
h5{
  font-size: 2.2rem,;
  font-weight: 700;
}
h6{
  font-size: 2rem,;
  font-weight: 700;
}


`