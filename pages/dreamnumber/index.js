import { Table } from "react-bootstrap";
import { dreamNumbers } from "@/utils/essentials";
import classes from "./dream.module.css";
import Head from "next/head";

export default function DreamNumber() {
  return (
    <div className={classes.main}>
      <Head>
        <title>Teer Mania - Dream Numbers</title>
        <meta
          name="description"
          content="Your Dream have some meanings. Check our list of dreams and its meanings."
        />
        <meta
          name="keywords"
          content="Teer Dream Numbers, Dream Numbers, Meghalaya Teer, Teer, Shillong Teer, "
        />
        <link rel="canonical" href="https://www.teermania.com/dreamnumber" />
      </Head>

      <div className={classes.header}>
        <div className={classes.headerContainer}>
          <h1 className="text-center mb-5" style={{ paddingTop: "150px" }}>
            Dream Numbers
          </h1>
          <p>
            Every dream has a meaning. We have decoded various dreams and listed
            them here. These are mostly based on research and experience.
          </p>
        </div>
      </div>
      <div className={classes.tableWrapper}>
        <Table bordered hover>
          <thead>
            <tr>
              <th className="text-center">SL. No</th>
              <th className="text-center">Dream</th>
              <th className="text-center">Number</th>
              <th className="text-center">House</th>
              <th className="text-center">Ending</th>
            </tr>
          </thead>
          <tbody>
            {/*Populate table with data dream numbers */}
            {dreamNumbers.map((items) => {
              return (
                <tr key={items.id}>
                  <td className="text-center">{items.id}</td>
                  <td className="text-center">{items.dream}</td>
                  <td className="text-center">{items.direct}</td>
                  <td className="text-center">{items.house}</td>
                  <td className="text-center">{items.ending}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
