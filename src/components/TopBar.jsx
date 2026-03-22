import { Container, Dropdown } from "react-bootstrap";
import { useState, useEffect } from "react";

const Topbar = () => {
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("ENG");

  useEffect(() => {
    const savedCurrency = localStorage.getItem("currency");
    const savedLanguage = localStorage.getItem("language");

    if (savedCurrency) setCurrency(savedCurrency);
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  useEffect(() => {
    localStorage.setItem("currency", currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <div className="topbar">
      <Container className="d-flex justify-content-between align-items-center">
        <div>OPEN NOW FROM 11:00 AM TO 7:00 PM</div>

        <div className="d-flex gap-3">

          <Dropdown>
            <Dropdown.Toggle size="sm" variant="light">
              Currency: {currency}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setCurrency("USD")}>
                USD
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCurrency("INR")}>
                INR
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setCurrency("EUR")}>
                EUR
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle size="sm" variant="light">
              Language: {language}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setLanguage("ENG")}>
                ENGLISH
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setLanguage("HIN")}>
                HINDI
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </div>
      </Container>
    </div>
  );
};

export default Topbar;