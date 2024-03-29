import { Container } from "./style"



export function Tag({text}){
  return(
    <Container>
      <button>        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26.0439 14C26.0439 7.08683 20.4351 1.47803 13.522 1.47803C6.6088 1.47803 1 7.08683 1 14C1 20.9132 6.6088 26.522 13.522 26.522C20.4351 26.522 26.0439 20.9132 26.0439 14Z" stroke="#FF6D6D" strokeWidth="2" strokeMiterlimit="10"/>
        <path d="M19.7837 8.78247L11.0183 19.2174L7.26172 15.0435" stroke="#FF6D6D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    {text}

      </button>
    </Container>    

    
  )
}