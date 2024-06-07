import { useParams } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { Container } from "../../components/Container/Container";
import { HeaderTitle } from "../../components/Header/HeaderTitle";
import { Title } from "../../components/Title/Title";

export function BookDetails() {
    const { id } = useParams();
    return (
        <Container>
            <HeaderTitle />
            <div className="gap-4 grid md:grid-cols-2 mt-16 grid-cols-1">
                <div>
                    <h2 className="text-5xl font-bold text-evergreen">Nome do livro</h2>
                    <p className="text-xl text-gray-500 font-light py-4">Autor</p>
                    <p className="text-gray-500 mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe id temporibus ipsam, delectus voluptatum velit consequuntur ipsa, eligendi molestias, repudiandae autem exercitationem veniam rem modi repellat ipsum asperiores iure!</p>
                </div>
                <div>
                    <img src="https://m.media-amazon.com/images/I/71J3ahTm3BL._SL1358_.jpg"
                        alt=""
                        className="w-full rounded-lg"
                    />
                </div>
            </div>
            <div>
                <Title title="Recomedações com base nesse livro" className="my-6"/>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
                    <Card id='123' />
                    <Card id='123' />
                    <Card id='123' />
                    <Card id='123' />
                </div>
            </div>
        </Container>
    )
}