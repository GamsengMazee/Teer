import { useEffect, useState } from "react";
import TableComp from "../Table/TableComp";
import { previousDate } from "@/utils/yesterdayDate";
import { timings } from "@/utils/timings";
import classes from "./results.module.css";
import Card from "../ui/Card";

const prevDate = previousDate();

const timeNow = new Date();
const time = timeNow.getHours();
const todaysDate = timeNow.toLocaleDateString("en-GB");

export default function Results({ resData }) {
  const [timeToggle, setTimeToggle] = useState(prevDate);
  let newData = [];
  let r1_fr;
  let r1_sr;
  let r2_fr;
  let r2_sr;
  let r3_fr;
  let r3_sr;

  //set the result for todays date if the time is pass 3pm.
  useEffect(() => {
    if (timeNow.getDay() === 0) {
      setTimeToggle(prevDate);
    } else if (timeNow.getDay() === 1 && time < 14) {
      setTimeToggle(prevDate);
    } else if (time >= 14) {
      setTimeToggle(todaysDate);
    }
  }, []);

  resData.filter((val) => {
    if (val.date.includes(timeToggle)) {
      newData.push(val);
    }
  });

  newData.filter((val) => {
    if (val.teer.includes("shillong")) {
      r1_fr = val.fr;
      r1_sr = val.sr;
    }
    if (val.teer.includes("khanapara")) {
      r2_fr = val.fr;
      r2_sr = val.sr;
    }
    if (val.teer.includes("jowai")) {
      r3_fr = val.fr;
      r3_sr = val.sr;
    }
  });

  return (
    <div className={classes.main}>
      <div className={classes.cardWrapper}>
        <Card classes={classes.card}>
          <div className={classes.section}>
            <h1>What is Teer?</h1>
            <p>
              {`Teer is the archery game of Meghalaya. Teer meaning "Bow and Arrow" is similar to a lottery game where the
          player choose or bet on the number ranging from 00 to 99. However, Teer lucky draw
          is different from the traditional lottery game. The lucky number
          depends on the number of arrows hitting the target.`}
            </p>
          </div>
        </Card>
      </div>
      <div className={classes.tableContainer}>
        <TableComp
          date={timeToggle}
          title="Shillong Teer Results"
          frResults={r1_fr ? r1_fr.toString().padStart(2, "0") : "X"}
          srResults={r1_sr ? r1_sr.toString().padStart(2, "0") : "X"}
          frTime={timings.shillong.fr}
          srTime={timings.shillong.sr}
        />

        <TableComp
          date={timeToggle}
          title="Khanapara Teer Results"
          frResults={r2_fr ? r2_fr.toString().padStart(2, "0") : "X"}
          srResults={r2_sr ? r2_sr.toString().padStart(2, "0") : "X"}
          frTime={timings.khanapara.fr}
          srTime={timings.khanapara.sr}
        />

        <TableComp
          date={timeToggle}
          title="Jowai Teer Results"
          frResults={r3_fr ? r3_fr.toString().padStart(2, "0") : "X"}
          srResults={r3_sr ? r3_sr.toString().padStart(2, "0") : "X"}
          frTime={timings.jowai.fr}
          srTime={timings.jowai.sr}
        />
      </div>
    </div>
  );
}
