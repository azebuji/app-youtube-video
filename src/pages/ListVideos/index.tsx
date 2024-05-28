import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { Helmet } from "react-helmet-async";
import * as Yup from "yup";

import waitingIcon from './../../assets/img/waiting.gif';
import { VideosData } from "./interfaces";
import JsonVideos from './jsonListVideos.json'
import { findVideos } from "./services/servicesListVideos";

const Default = () => {
  const [videos, setVideos] = useState<VideosData>();
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    search: Yup.string(),
    dailyLimits: Yup.array()
      .of(
        Yup.number()
          .min(0, "Minímo 0 minutos")
          .max(1440, "Máxima de 1440 minutos") // 1440 min = 24 horas
          .required("Limite diário obrigatório")

      )
      .required("Informe os limites diários"),
    type: Yup.string()
      .oneOf(["pattern", "google-api"])
      .required("Selecione um tipo de busca"),
  });

  const formik = useFormik({
    initialValues: {
      search: "",
      dailyLimits: [0, 0, 0, 0, 0, 0, 0],
      type: "pattern",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true)
        const data = await findVideos(values).then((data) => {
          setLoading(false);
          return data
        })

        if (data) {
          setVideos(data)
        }

      } catch (error: any) {
        setError(error);
        setTimeout(() => { setError(null) }, 3000)
      }
    }
  });

  return (
    <React.Fragment>
      <Helmet title="Listagem de videos" />

      <Container fluid className="p-0">
        <Row className="mt-4">
          <Col md={12}>
            <h3 className="mb-3">Busca de Vídeos</h3>
            <Form onSubmit={formik.handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="search">
                    <Form.Label>Pesquisar:</Form.Label>
                    <Form.Control
                      type={formik.values.type === "pattern" ? "text" : "pattern"}
                      disabled={formik.values.type === "pattern"}
                      name="search"
                      value={formik.values.type === "pattern" ? formik.values.search = "" : formik.values.search}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.search && formik.errors.search && (
                      <Form.Text className="text-danger">
                        {formik.errors.search}
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="dailyLimits">
                    <Form.Label>Limites Diários (minutos):</Form.Label>
                    <Row>
                      {formik.values.dailyLimits.map((limit, index) => (
                        <Col key={index} md={3}>
                          <label>Dia {index + 1}</label>
                          <Form.Control
                            type="number"
                            name={`dailyLimits[${index}]`}
                            value={limit}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            min={0}
                            max={1440}
                          />

                          {formik.touched.dailyLimits &&
                            formik.errors.dailyLimits && (
                              <Form.Text className="text-danger">
                                {formik.errors.dailyLimits[index]}
                              </Form.Text>
                            )}

                        </Col>
                      ))}
                    </Row>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="type">
                    <Form.Label>Tipo de Busca:</Form.Label>
                    <div>
                      <Form.Check
                        type="radio"
                        label="Dados Padrões"
                        name="type"
                        value="pattern"
                        checked={formik.values.type === "pattern"}
                        onChange={formik.handleChange}
                      />
                      <Form.Check
                        type="radio"
                        label="Busca na API do Google"
                        name="type"
                        value="google-api"
                        checked={formik.values.type === "google-api"}
                        onChange={formik.handleChange}
                      />
                    </div>
                    {formik.touched.type && formik.errors.type && (
                      <Form.Text className="text-danger">
                        {formik.errors.type}
                      </Form.Text>
                    )}
                  </Form.Group>
                </Col>
                <Col md={6} className="btn-videos">

                  <Button variant="primary" type="submit" className="mt-3" disabled={loading}>
                    {loading ? <><img className="findingIcon" src={waitingIcon} /> Pesquisando...</> : "Pesquisar"}
                  </Button>

                  <p className="text-danger">{error && error}</p>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        <hr />

        <Row className="mt-4">
          <Col md={12}>
            {videos && (
              <>
                <h3 className="mb-3">
                  Dias Necessários:{" "}
                  {videos.daysNeeded}
                </h3>
                <h3 className="mb-3">Palavras Mais Usadas:</h3>
                <ul>
                  {videos &&
                    videos.mostUsedWords.map((word, index) => (
                      <li key={index}>{word}</li>
                    ))}
                </ul>
              </>
            )}
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={12}>
            <h3 className="mb-3">Lista de Vídeos:</h3>

            <div className={videos && videos?.videosFormated.length > 14 ? "table-scrolling" : ""}>
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th></th>
                    <th>Título</th>
                    <th>Descrição</th>
                    <th>Duração</th>
                  </tr>
                </thead>

                <tbody>
                  {videos && videos.videosFormated.map((video, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{video.title}</td>
                      <td>{video.description}</td>
                      <td>{video.duration}</td>
                    </tr>
                  ))}

                </tbody>
              </Table>
            </div>

          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Default;