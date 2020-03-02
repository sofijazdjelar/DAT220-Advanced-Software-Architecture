import { useState } from "react";
import { Card, Image, Row, Container } from "react-bootstrap";
import Layout from "../components/layout";
import withAuth from "../components/auth";

const uploadedImages = [
  "./images/old_person.jpg",
  "./images/old_person.jpg",
  "./images/old_person.jpg",
  "./images/old_person.jpg",
  "./images/old_person.jpg",
  "./images/old_person.jpg",
  "./images/old_person.jpg",
  "./images/old_person.jpg",
  "./images/old_person.jpg"
];

const Photos = () => {
  const [addedImages, setAddedImages] = useState([]);

  const addImage = e => {
    e.preventDefault();
    const name = e.target.files[0].name;

    setAddedImages([...addedImages, `./images/${name}`]);
    e.target.value = "";
  };

  return (
    <Layout>
      <Container fluid style={{ marginTop: 16 }}>
        <input type="file" onChange={e => addImage(e)} />
        <Card style={{ marginTop: 16 }}>
          <Container fluid style={{ padding: 16 }}>
            <Row noGutters>
              {[...uploadedImages, ...addedImages].map(src => (
                <Image src={src} width={200} />
              ))}
            </Row>
          </Container>
        </Card>
      </Container>
    </Layout>
  );
};

export default withAuth(Photos);
