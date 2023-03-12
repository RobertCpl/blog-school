import Head from "next/head";
import Header from "./../components/layout/Header";

export default function Home() {
   return (
      <>
         <Head>
            <title>Blog - szkoły w chmurze</title>
            <meta name="description" content="Blog o nasz wydażeniach w chmurze" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Header />
      </>
   );
}
