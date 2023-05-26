import Layout from "@/components/Layout/Layout";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@/styles/globals.css";
import AppContext from "@/store/AppContext";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";
import Login from "./login";
import Script from "next/script";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const [adminState, setAdminState] = useState(true); //toggle between footer and admin component
  const [resData, setResData] = useState(); //store results data from db
  const [valueContext, setValueContext] = useState(); //for useContext hook

  const router = useRouter();

  const path = router.pathname;

  // fetch results data and pass it to component
  function fetchData() {
    try {
      fetch(`api/get_result/todaysresult`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setResData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  //fetch House ending data
  function houseEnding() {
    try {
      fetch(`api/house/get_data`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setValueContext(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    fetchData();
    houseEnding();

    if (path !== "/adminpanel") {
      setAdminState(false);
    } else {
      setAdminState(true);
    }
  }, [path]);

  if (path == "/login") {
    return <Login />;
  } else if (resData !== null && resData !== undefined) {
    return (
      <AppContext.Provider value={{ valueContext, setValueContext }}>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-H7EW7F172T"
        />

        <Script strategy="afterInteractive" id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-H7EW7F172T');
           `}
        </Script>
        {/*  Google Analytics Ends*/}

        <Head>
          <meta
            name="google-site-verification"
            content="UXadkPAeoO-Dli-mHnaTwTsyq3mZ918nwPvwypImSBw"
          />
          {/* gAds */}
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5389225006035489"
            crossorigin="anonymous"
          ></script>
        </Head>

        <Layout>
          <Component resData={resData} {...pageProps} />
          {adminState ? "" : <Footer />}
        </Layout>
      </AppContext.Provider>
    );
  }
}
