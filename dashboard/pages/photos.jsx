import { useState, useEffect } from "react";
import { Card, Image, Row, Container } from "react-bootstrap";
import Layout from "../components/layout";
import withAuth from "../components/auth";
import { storage } from "../config";

const Photos = () => {
  const [list, setList] = useState([]);
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    storage
      .ref("images")
      .listAll()
      .then(list => setList([...list.items]));
  }, []);

  useEffect(() => {
    list.forEach(item => {
      console.log(item);
      storage
        .ref("images")
        .child(item.name)
        .getDownloadURL()
        .then(url => {
          setUrls([...urls, url]);
        });
    });
  }, [list]);

  const addImage = e => {
    e.preventDefault();
    const imageFile = e.target.files[0];
    const imageName = imageFile.name;

    const uploadTask = storage.ref(`/images/${imageName}`).put(imageFile);

    uploadTask.on(
      "state_changed",
      snapShot => {
        console.log(snapShot);
      },
      err => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(imageName)
          .getDownloadURL()
          .then(fireBaseUrl => {
            setUrls([...urls, fireBaseUrl]);
          });
      }
    );

    e.target.value = "";
  };

  return (
    <Layout>
      <Container fluid style={{ marginTop: 16 }}>
        <input type="file" onChange={e => addImage(e)} />
        <Card style={{ marginTop: 16 }}>
          <Container fluid style={{ padding: 16 }}>
            <Row noGutters>
              {urls.map((url, index) => (
                <Image
                  src={url}
                  width={400}
                  height={400}
                  style={{ objectFit: "cover" }}
                  key={`image-${index}`}
                />
              ))}
            </Row>
          </Container>
        </Card>
      </Container>
    </Layout>
  );
};

export default withAuth(Photos);
