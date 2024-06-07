import { useCallback } from "react";
import { Button } from "../Button/Button";
import { Tag } from "../Tag/Tag";
import { useNavigate } from "react-router-dom";

type Props = {
    id: string;
}

export function Card({ id }: Props) {
    const navigate = useNavigate();
    const handleSelectBook = useCallback(() => {
        navigate(`/${id}`);
    }, [id, navigate])
    return (
        <div className="p-4 grid grid-cols-3  gap-3 flex-row shadow-lg rounded-lg border border-gray-100 max-w-lg w-full">
            <img src="https://m.media-amazon.com/images/I/71J3ahTm3BL._SL1358_.jpg" alt=""
                className="col-span-1 w-full rounded-lg"
            />
            <div className="col-span-2">
                <p className="font-bold text-2xl text-evergreen">Codigo Limpo</p>
                <p className="font-light text-lg text-gray-500 mb-2">Autor</p>
                <Tag title="Pororoca" className='mb-3' />
                <p><strong>Sinopse: </strong>Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Eos ipsum, architecto
                    quidem quas natus in eveniet, quisquam sed
                    consequatur rerum quibusdam nisi deleniti
                    voluptate inventore officiis facilis.
                    Similique, laboriosam ipsa!</p>
                <Button title="Ver Mais" variant="ligth" className="w-1/2" onClick={handleSelectBook} />
            </div>
        </div>
    )
}