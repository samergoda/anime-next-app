"use server"

import AnimeCard, { AnimeProp } from "@/components/AnimeCard"

export async function getData(page:number){
    let data = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=4&order=popularity`
    )
    let res = await data.json()
    console.log(res)
    return res.map((item: AnimeProp, index:number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ))
}