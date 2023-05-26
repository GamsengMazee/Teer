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
          content="Your Dream have some meanings. Check our list of dreams and its meanings. "
        />
        <meta
          name="keywords"
          content="Teer Dream Numbers, Dream Numbers, Meghalaya Teer, Teer, Shillong Teer, "
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5389225006035489"
          crossorigin="anonymous"
        ></script>
      </Head>
      <h1 className="text-center mb-5" style={{ paddingTop: "150px" }}>
        Dream Numbers
      </h1>
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
