import Spinner from "react-bootstrap/Spinner";

export default function LoadingBox() {
  return (
    <div>
      <Spinner animation="border" role="status">
      </Spinner>
      <span className="visibility-hidden">{' '}Loading...</span>
    </div>
  );
}
