import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
    const styles = {
        style:{
            width: 50,
            height: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }
    }
  return (
    <Spinner style={styles.style} animation="border" variant="info" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
