import { Container } from "./style"

export function Button({ title, loading = false, ...rest }){
  // props serve para buscar o título que foi colocado.
    return (
    <Container
     type="button"
    disabled={loading}
    {...rest}
    
    >
      {loading ? 'Carregando...' : title }
    </Container>
    )
  }