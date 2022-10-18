import Head from 'next/head'
import Link from 'next/link'
import Search from '../components/Search'
import SearchResults from '../components/SearchResults'

export default function Home() {
    return (
        <div className="bg-black h-fit min-h-screen pt-9 flex flex-col text-white">
            <Head>
                <title>ANIME</title>
                <meta
                    name="keywords"
                    content="practice, anime, jikan, cartoon"
                />
            </Head>
            <h1 className="text-5xl p-5 font-bold ml-9">Anime search</h1>
            <Search />
        </div>
    )
}
