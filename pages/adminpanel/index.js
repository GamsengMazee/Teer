import { useCallback, useEffect, useState } from "react";
import { getCookies } from "cookies-next";
import UpdateResults from "@/components/Admin/UpdateResults";
import classes from "./adminPanel.module.css";
import ToastComp from "../../components/ui/ToastComp";
import { useRouter } from "next/router";
import Loader from "@/components/ui/Loader";
import HouseComponent from "@/components/Admin/HouseComponent";
import Head from "next/head";

const todaysDate = new Date().toLocaleDateString("en-GB");

export default function Admin({ resData }) {
  const [toastState, setToastState] = useState(false);
  const [loaderState, setLoaderState] = useState(true);

  const router = useRouter();

  //Redirect to homepage if cookie does not exist or verify cookie if it exist
  const authenticate = useCallback(async () => {
    try {
      const response = await fetch("/api/auth/auth0", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setLoaderState(false);
      } else {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }, [router]);

  useEffect(() => {
    authenticate();
  }, [authenticate]);

  //toggle modal
  const toggleToast = () => {
    setToastState(true);

    setTimeout(() => {
      setToastState(false);
    }, 3000);
  };

  let newData = [];
  let t1;
  let t2;
  let t3;

  //filter the data as per date and teer name
  resData.filter((val) => {
    if (val.date.includes(todaysDate)) {
      newData.push(val);
    }
  });

  //further filter for teer origin
  newData.filter((val) => {
    if (val.teer.includes("shillong")) {
      t1 = val;
    }
    if (val.teer.includes("khanapara")) {
      t2 = val;
    }
    if (val.teer.includes("jowai")) {
      t3 = val;
    }
  });

  if (loaderState) {
    return (
      <div className={classes.loaderWrapper}>
        <Loader />
      </div>
    );
  } else {
    return (
      <div className={classes.admin}>
        <Head>
        <title>Admin Page</title>
          <meta name="robots" content="noindex" />
          <link rel="canonical" href="https://www.teermania.com/adminpanel" />
        </Head>
        
        <h1
          className="text-center"
          style={{ paddingTop: "150px", marginBottom: "35px" }}
        >
          Admin Panel
        </h1>
       
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5">
              <UpdateResults
                origin={t1}
                toggleToast={toggleToast}
                title="Shillong Teer Update"
                id="shillong"
              />
            </div>
            <div className="col-md-4 mb-5">
              <UpdateResults
                origin={t2}
                toggleToast={toggleToast}
                title="Khanapara Teer Update"
                id="khanapara"
              />
            </div>
            <div className="col-md-4 mb-5">
              <UpdateResults
                origin={t3}
                toggleToast={toggleToast}
                title="Jowai Teer Update"
                id="jowai"
              />
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-5">
                <HouseComponent
                  toggleToast={toggleToast}
                  title="Update House Ending"
                />
              </div>
            </div>
          </div>
          <ToastComp toastState={toastState} />
        </div>
      </div>
    );
  }
}
