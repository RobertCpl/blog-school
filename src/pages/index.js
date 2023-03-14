import Recomended from "@/components/sections/Reconmended";
import Head from "next/head";
import Header from "./../components/layout/Header";

const posts = [
   {
      id: 1,
      title: "Relacje rodzinne w edukacji domowej",
      content:
         "Jak zadbać o relacje, żeby edukacja domowa była dobra dla całej rodziny? Na co zwrócić uwagę? 8 ważnych elementów budowania relacji rodzice-dziecko. ",
      feature_media:
         "https://images.pexels.com/photos/2613438/pexels-photo-2613438.jpeg?auto=compress&cs=tinysrgb&w=1600",
   },

   {
      id: 2,
      title: "Relacje rodzinne w edukacji domowej",
      content:
         "Jak zadbać o relacje, żeby edukacja domowa była dobra dla całej rodziny? Na co zwrócić uwagę? 8 ważnych elementów budowania relacji rodzice-dziecko. ",
      feature_media:
         "https://images.pexels.com/photos/1726246/pexels-photo-1726246.jpeg?auto=compress&cs=tinysrgb&w=1600",
   },
   {
      id: 3,
      title: "Relacje rodzinne w edukacji domowej",
      content:
         "Jak zadbać o relacje, żeby edukacja domowa była dobra dla całej rodziny? Na co zwrócić uwagę? 8 ważnych elementów budowania relacji rodzice-dziecko. ",
      feature_media:
         "https://images.pexels.com/photos/256246/pexels-photo-256246.jpeg?auto=compress&cs=tinysrgb&w=1600",
   },
   {
      id: 4,
      title: "Relacje rodzinne w edukacji domowej",
      content:
         "Jak zadbać o relacje, żeby edukacja domowa była dobra dla całej rodziny? Na co zwrócić uwagę? 8 ważnych elementów budowania relacji rodzice-dziecko. ",
      feature_media:
         "https://images.pexels.com/photos/10676/Warsaw-center-free-license-CC0.jpg?auto=compress&cs=tinysrgb&w=1600",
   },
];

export default function Home() {
   return (
      <>
         <Head>
            <title>Blog - szkoły w chmurze</title>
            <meta name="description" content="Blog o nasz wydażeniach w chmurze" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Header posts={posts} />
         <Recomended posts={posts} />
      </>
   );
}
