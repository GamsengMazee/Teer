import { Table } from "react-bootstrap";
import classes from "./predictions.module.css";
import { formula } from "@/utils/formula";
import { previousDate } from "@/utils/yesterdayDate";
import { useContext } from "react";
import AppContext from "@/store/AppContext";
import Head from "next/head";

const prevDate = previousDate();

export default function Predictions({ resData }) {
  const context = useContext(AppContext);

  // const [houseData, setHouseData] = useState();
  let newData = [];
  let s1;
  let s2;
  let combinedData = [];
  let uniqueData = [];

  //filter the data as per date and teer name
  resData.filter((val) => {
    if (
      val.date.includes(prevDate) &&
      val.teer.toLowerCase().includes("shillong")
    ) {
      newData.push(val);
    }
  });

  //Execute only when newData in not empty
  if (newData[0] !== null && newData[0] !== undefined) {
    //further filter the data for fr and sr and save it to a variable
    newData.filter((val) => {
      if (val.teer.includes("shillong")) {
        s1 = val.fr;
        s2 = val.sr;
      }
    });

    // split the values
    //split method saves values as an array
    const splitS1 = s1.toString().padStart(2, "0").split("");
    const splitS2 = s2.toString().padStart(2, "0").split("");

    combinedData = [
      ...formula[0][splitS1[0]],
      ...formula[0][splitS1[1]],
      ...formula[0][splitS2[0]],
      ...formula[0][splitS2[1]],
    ];

    // Defining function to remove duplicate data from an array
    function getUnique(array) {
      let uniqueArray = [];

      // Loop through array values
      for (let i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
          uniqueArray.push(array[i]);
        }
      }
      return uniqueArray;
    }

    uniqueData = getUnique(combinedData);
  }

  return (
    <div style={{ height: "400px" }}>
      <Head>
        <title>Teer Mania - Common Numbers</title>
        <meta
          name="description"
          content="At Teer Mania we update our Common Numbers everyday. We have predicted 90% teer results correctly. "
        />
        <meta
          name="keywords"
          content="Teer, Direct Number, Shillong Teer, Common Number, Previous teer results, Meghalaya teer results, teer today"
        />
      </Head>
      <div className={classes.tableWrapper} style={{ paddingTop: "160px" }}>
        <h1 className="text-center mb-5">Common Numbers</h1>
        <Table bordered hover>
          <thead>
            <tr>
              <th className="text-center">Direct Number</th>
              <th className="text-center">House</th>
              <th className="text-center">Ending</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center text-wrap">
                {uniqueData.map((val, index) => {
                  return <span key={index}>{`${val},  `}</span>;
                })}
              </td>
              <td className="text-center">
                {context.valueContext ? context.valueContext[0].house : " "}
              </td>
              <td className="text-center">
                {context.valueContext ? context.valueContext[0].ending : " "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className={classes.note}>
        <h2 className="h2 text-center">How does this works?</h2>
        <p className={classes.note_text}>
          <span className="ps-5">If</span> ab and xy are in the Direct Number
          then chances are ax, ay, bx, and by are also to be considered for
          todays target.{" "}
        </p>

        <p className="mt-5 mb-5 px-3">
          <span className="pd-5 h5">Note:</span> This predictions are not 100%
          accurate. We are not responsible for any mishap or loses.{" "}
        </p>
      </div>
    </div>
  );
}
