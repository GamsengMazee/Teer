import Banner from "@/components/Home/Banner";
import Results from "@/components/Home/Results";
import Head from "next/head";


export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Teer Mania - Get Your instant Teer Results</title>
        <meta name="google-site-verification" content="UXadkPAeoO-Dli-mHnaTwTsyq3mZ918nwPvwypImSBw" />
      </Head>
      <Banner />
      <Results resData={props.resData} />
    </div>
  );
}
