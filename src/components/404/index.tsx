import { Container } from '../../components/Cards/style'
import { NotFoundImage } from "./styles";
import portal404 from '../../assets/img/404.png'

export function NotFound() {
    return (
        <Container>
            <NotFoundImage src={portal404} />
        </Container>
    )
}