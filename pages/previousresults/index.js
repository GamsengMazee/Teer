import { Table } from "react-bootstrap";
import classes from "./previous.module.css";
import Head from "next/head";


const todaysDate = new Date().toLocaleDateString("en-GB");

export default function PreviousResults({ resData }) {

  let newData = [];

  //Filter out todays result
  resData.filter((val) => {
    if (!val.date.includes(todaysDate)) {
      newData.push(val);
    }
  });

  return (
    <div className={classes.main}>
      <Head>
        <title>Teer Mania - Teer previous Results</title>
        <meta
          name="description"
          content="All the teer Results are here. Get all the previous teer results "
        />
        <meta
          name="keywords"
          content="previous results, previous teer, previous teer results, shillong teer results, teer today, meghalaya teer, shillong teer, teerresults"
        />
      </Head>

      <div className={classes.header}>
        <h1 className="text-center mb-5" style={{ paddingTop: "150px" }}>
          Previous Results
        </h1>
        <p>Get the previous teer results of Jowai, Shillong and Khanapara.</p>
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
