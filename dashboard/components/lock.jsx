import { Badge } from "react-bootstrap";

const Lock = ({ type, data }) => {
  const open = data.isOpen == "true";
  return (
    <div>
      {`${type} ${data.id}:`}{" "}
      <Badge pill variant={open ? "primary" : "secondary"}>
        {open ? "open" : "closed"}
      </Badge>
    </div>
  );
};

export default Lock;
