import { Container } from "./styles"

export function Button({title, color, loading = false, ...rest}){

    return(
    <Container 
        type="button"
        color="color"
        disabled={loading}


        {...rest}
    >
        { loading ?  'Carregando ...' : title}
    </Container>
    )
}