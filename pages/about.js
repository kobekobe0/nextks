import Head from 'next/head'
import Link from 'next/link'
function About() {
    return (
        <div>
            <Head>
                <title>About page</title>
            </Head>
            <h1>About page</h1>
            <Link href="/">
                <button>home</button>
            </Link>
        </div>
    )
}

export default About
