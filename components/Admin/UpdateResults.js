import { useState } from "react";
import Card from "../ui/Card";
import classes from "./updateResult.module.css";

let timestamp =new Date().toLocaleDateString("en-GB") + " " + new Date().toLocaleTimeString();

export default function UpdateResults(props) {

  let fr ="";
  let sr = ""; 

  if(props.origin !== undefined){
    fr = props.origin.fr;
    sr = props.origin.sr; 
  }
    
   
  //state with initial value as it triggers react controlled components
  const initialValue = {
    teer: `${props.id}`,
    fr: fr,
    sr: sr,
    date: timestamp,
  };
  const [teer, setTeer] = useState(initialValue);

  //binds the input field to state
  const onChangeHandler = (e) => {
    e.preventDefault();

    const { name } = e.target;
    const { value } = e.target;

    setTeer((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };

    //post todays teer
  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/update/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teer),
    });

    const data = await response.json();

    props.toggleToast();
    setTeer(initialValue);

    console.log(data);
  };


  //  update todays teer
  const updateHandler = async (e) =>{
     
     const response = await fetch(`/api/update/${props.origin._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(teer),
    });

    const data = await response.json();

    props.toggleToast();
    setTeer(initialValue);

    console.log(data);

  }

  return (
    <div className={classes.main}>
      <Card>
        <h2>{props.title}</h2>
        <div className={classes.formWrapper}>
          <form>
            <div className={classes.inputWrapper}>
              <label>First Round:</label>
              <input
                type="number"
                name="fr"
                onChange={onChangeHandler}
                placeholder="Enter number"
                value={teer.fr}
              />
            </div>
            <div className={classes.inputWrapper}>
              <label>Second Round:</label>
              <input
                type="number"
                name="sr"
                onChange={onChangeHandler}
                placeholder="Enter number"
                value={teer.sr}
              />
            </div>
            <button className="btn btn-primary" disabled = {fr} type="submit" onClick={submitHandler} placeholder="Submit">
              SUBMIT
            </button>

            <button className="btn btn-success mx-5" type="submit" onClick={updateHandler} placeholder="update">
              UPDATE
            </button>
          </form>
        </div>
      </Card>
    </div>
  );
}
