import Table from "react-bootstrap/Table";
import classes from "./Table.module.css";

export default function TableComp(props) {
  return (
    <div className={classes.tableContainer}>
      <div className={classes.title}>
        <h1>{props.title}</h1>
      </div>
      <div className={classes.tableWrapper}>
        <Table className={classes.table} striped bordered hover variant="dark">
          <thead>
            <tr>
              <th className="text-center">FR {props.frTime}</th>
              <th className="text-center">SR {props.srTime}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">{props.frResults}</td>
              <td className="text-center">{props.srResults}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
