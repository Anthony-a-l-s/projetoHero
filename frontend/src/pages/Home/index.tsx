import { useState, useCallback } from "react"
import { Header } from "../../components/Header/Header"
import { Container } from "../../components/Container/Container"
import { Title } from "../../components/Title/Title"
import { Button } from "../../components/Button/Button"
import { Card } from "../../components/Card/Card"
import { Input } from "../../components/Input/Input"

export function Home() {
    const [selectedGender, setSelecteGender,] = useState<string[]>([])
    const genderBooks = [
        'Ação',
        'Aventura',
        'Biografia',
        'Comédia',
        'Drama',
        'Ficção',
    ]

    const hadleSelect = useCallback((title: string)=>{
        if(selectedGender.includes(title)){
            const removeGender = selectedGender.filter(item => item != title);
            setSelecteGender(removeGender)
            
        }else{
            setSelecteGender([...selectedGender, title])
        }
    },[selectedGender],
);

    return (
        <div className="mb-6">
            <Header />
            <Container>
                <Title title='O que você quer ler hoje?' />
                <div className="gap-8 grid md:grid-cols-8 my-6 grid-cols-4">
                    {genderBooks.map((book, index) => (
                        <Button title={book} 
                        key={index}
                        variant={selectedGender.includes(book)? 'dark' : 'ligth'}
                        onClick={()=>hadleSelect(book)} />
                    ))}
                </div>
                <div className="py-7">
                    <p className='text-evergreen font-semibold text-2xl'>Sobre o que você gostaria de receber uma recomendação de livro?</p>
                    <Input placeholder="Eu gostaria de ler ..."/>
                </div>
                <Title title='Livros recomendados' className="my-5"/>
                <Card id='123'/>
            </Container>
        </div>
    )
}