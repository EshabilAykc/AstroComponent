import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Reactbir() {
  const [count, setCount] = useState(0);
  const [timerOn, setTimerOn] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const startTimer = () => {
    intervalRef.current = window.setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    setTimerOn(true);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current!);
    setTimerOn(false);
  };

  const handleClick = () => {
    if (timerOn) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  // Toplam 20 dakika (1200 saniye) varsayılan olarak ayarlanır
  const totalSeconds = 1200;
  const remainingSeconds = totalSeconds - count;
  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  return (
    <>
      <style>{`
        body {
          background: linear-gradient(to right, #4ecdc4, #556270);
          margin: 0;
          padding: 0;
        }
      `}</style>
      <Container className="vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-4 mb-5">Ders çalışmaya Başlayalım</h1>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center">
              {timerOn
                ? `Kalan süre: ${minutes}:${seconds < 10 ? "0" + seconds : seconds}`
                : "Süre durduruldu."}
            </h2>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button
              variant={timerOn ? "danger" : "success"}
              size="lg"
              onClick={handleClick}
            >
              {timerOn ? "Durdur" : "Başlat"}
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
