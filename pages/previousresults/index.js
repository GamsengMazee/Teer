import { Table } from "react-bootstrap";
import classes from "./previous.module.css";
import Head from "next/head";
import { useState } from "react";

const todaysDate = new Date().toLocaleDateString("en-GB");

export default function PreviousResults({ resData }) {
  const [origin, setOrigin] = useState("shillong");

  let newData = [];

  //Filter out todays result
  resData.filter((val) => {
    if (!val.date.includes(todaysDate) && val.teer.includes(origin)) {
      newData.push(val);
    }
  });

  //Select Shillong Result
  function originShillongHandler() {
    setOrigin("shillong");
  }

  //Select Khanapara Result
  function originKhanaparaHandler() {
    setOrigin("khanapara");
  }

  // Select Jowai Result
  function originJowaiHandler() {
    setOrigin("jowai");
  }

  return (
    <div className={classes.main}>
      <Head>
        <title>Teer Mania - Teer previous Results</title>
        <meta
          name="description"
          content="Get all previous results for KHANAPARA TEER, SHILLONG TEER and JOWAI TEER. Check our Common Numbers, We use Advanced Prediction Technique.  "
        />
        <meta
          name="keywords"
          content="previous results, previous teer, previous teer results, shillong teer results, teer today, meghalaya teer, shillong teer, teerresults"
        />
        <link rel="canonical" href="https://www.teermania.com/previousresults" />
      </Head>

      <div className={classes.header}>
        <h1 className="text-center mb-5" style={{ paddingTop: "150px" }}>
          Previous Results
        </h1>
        <p>Get the previous teer results of Jowai, Shillong and Khanapara.</p>
      </div>
      <div className={classes.btnWrapper}>{/*this class needs defination*/}
        <button
          className={"px-5 mx-1 btn btn-success h1 "}
          style={{ fontSize: "15px" }}
          onClick={originShillongHandler}
        >
          Shillong
        </button>
        <button
          className={"px-5 mx-1 btn btn-success h1"}
          style={{ fontSize: "15px" }}
          onClick={originKhanaparaHandler}
        >
          Khanapara
        </button>
        <button
          className={"px-5 mx-1 btn btn-success h1"}
          style={{ fontSize: "15px" }}
          onClick={originJowaiHandler}
        >
          Jowai
        </button>
      </div>
      <div className={classes.tableWrapper}>
        <Table bordered hover>
          <thead>
            <tr>
              <th className="text-center">Date</th>
              <th className="text-center">Origin</th>
              <th className="text-center">FR</th>
              <th className="text-center">SR</th>
            </tr>
          </thead>
          <tbody>
            {/*Populate table with data dream numbers */}
            {newData.map((items) => {
              return (
                <tr key={items._id}>
                  <td className="text-center">{items.date.slice(0, 10)}</td>
                  <td className="text-center">{items.teer}</td>
                  <td className="text-center">
                    {items.fr.toString().padStart(2, "0")}
                  </td>
                  <td className="text-center">
                    {items.sr.toString().padStart(2, "0")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
