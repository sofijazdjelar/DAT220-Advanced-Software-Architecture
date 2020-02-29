import { Badge } from "react-bootstrap";

const Lock = ({ type, data }) => {
  return (
    <div>
      {`${type} ${data.id}:`}{" "}
      <Badge pill variant={data.isOpen ? "primary" : "secondary"}>
        {data.isOpen ? "open" : "closed"}
      </Badge>
    </div>
  );
};

export default Lock;
