import React, { useState, useEffect } from "react";
import NavBar from "../navbar/NavBar";
import './Resume.css'
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../assets/Ashish_Thakur_Resume.pdf"
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/soumyajit4419/portfolio/master/src/Assets/Soumyajit_Behera-BIT_MESRA.pdf";

//   const pdf = "https://drive.google.com/file/d/1X-5JvCI74yjPN-UYQeofBPNiGYdHVTCB/view?usp=sharing"


export default function Resume() {
    const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
  return (
    <>
    <NavBar/>
    <div>
    <Container fluid className="resume-section">
      {/* <Particle /> */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      <Row className="resume">
        <Document file={resumeLink} className="d-flex justify-content-center">
          <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </Row>

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdf}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  </div>
  </>
  )
}
