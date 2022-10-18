import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

function animeDetails() {
    const { animeid } = useRouter().query
    const [anime, setAnime] = useState({})
    useEffect(() => {
        if (!animeid) return
        // fetch(`https://api.jikan.moe/v4/anime/${animeid}`).then((res) => {
        //     setAnime(res.json())
        // })
        const fetchAnime = () => {
            const res = fetch(`https://api.jikan.moe/v4/anime/${animeid}`)
                .then((res) => res.json())
                .then((anime) => setAnime(anime.data))
        }
        fetchAnime()
    }, [animeid])
    return (
        <div>
            <Head>
                <title>{anime.title}</title>
            </Head>
            <div>
                <Link href="/">
                    <button>Back</button>
                </Link>
                <div>
                    <img src={anime?.images?.jpg.image_url} width="500px" />
                </div>
            </div>
        </div>
    )
}

export default animeDetails
