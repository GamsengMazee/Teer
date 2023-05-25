import Banner from "@/components/Home/Banner";
import Results from "@/components/Home/Results";
import Head from "next/head";

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Teer Mania - Get Your instant Teer Results</title>
        <meta name="description" content="Get your daily teer results instantly. With daily updated Common Numbers, Level up your game and get best results. " />
        <meta name="keywords" content="Teer, Shillong Teer, Shillong teer number, Meghalaya teer results, teer today, teerresults" />
      </Head>
      <Banner />
      <Results resData={props.resData} />
    </div>
  );
}
