'use client'

import Pagina from "@/app/components/Pagina";
import apiAnime from "@/app/services/apiAnime";
import { useEffect, useState } from "react";

export default function Page({params}) {

    const [anime, setAnime] = useState({})

    useEffect(() => {
        apiAnime.get(`anime/${params.id}`).then(resultado => {
            setAnime(resultado.data.data)
        })
    }, [])    

    return (
        <Pagina titulo={anime.title}>

        </Pagina>
    )
    
}