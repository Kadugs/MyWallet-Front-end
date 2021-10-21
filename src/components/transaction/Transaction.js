import {Container, Header, Input, Button} from './ContainerTransaction';

export default function Transaction({type}) {
    let text = "";
    switch(type) {
        case 1: text = "entrada";
        break;
        case 2: text = "saída";
        break;
        default: text = "";
    }
    return (
        <Container>
            <Header>Nova {text}</Header>
            <Input type="number" placeholder="Valor"/>
            <Input type="text" placeholder="Descrição"/>
            <Button>Salvar {text}</Button>
        </Container>
    )
}