import { useContext, useState } from "react";
import Card from "../ui/Card";
import AppContext from "@/store/AppContext";
import classes from "./updateResult.module.css";

let todaysDate = new Date().toLocaleDateString("en-GB");

export default function HouseComponent(props) {
  const context = useContext(AppContext);

  const initialValue = {
    house: "",
    ending: "",
    date: todaysDate,
  };
  const [inputField, setInputField] = useState(initialValue);

  //binds the input field to state
  const onChangeHandler = (e) => {
    e.preventDefault();

    const { name } = e.target;
    const { value } = e.target;

    setInputField((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

  let id;
  if(context.valueContext !== undefined){
    id = context.valueContext[0]._id
  }

  //  update todays teer
  const updateHandler = async (e) => {
    e.preventDefault()
    const response = await fetch(`/api/house/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputField),
    });

    const data = await response.json();

    props.toggleToast();
    setInputField(initialValue);

    console.log(data);
  };

  return (
    <div className={classes.main}>
      <Card>
        <h2>{props.title}</h2>
        <div className={classes.formWrapper}>
          <form>
            <div className={classes.inputWrapper}>
              <label>House:</label>
              <input
                className="mx-2"
                onChange={onChangeHandler}
                type="text"
                name="house"
                placeholder="Enter number"
                value={inputField.house}
              />
            </div>

            <div className={classes.inputWrapper}>
              <label>Ending:</label>
              <input
                className="mx-2"
                onChange={onChangeHandler}
                type="text"
                name="ending"
                placeholder="Enter number"
                value={inputField.ending}
              />
            </div>
            <button
              className="btn btn-success"
              type="submit"
              placeholder="Submit"
              onClick={updateHandler}
            >
              UPDATE
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
}
