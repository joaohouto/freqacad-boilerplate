import { useState, useEffect } from "react";

import { Container, Content, Header, Form, Button } from "./styles";

import { IconArrowLeft } from "@tabler/icons";

export default function Subject() {
  let [subject, setSubject] = useState({});

  useEffect(() => {}, []);

  return (
    <Container>
      <Header>
        <button>
          <IconArrowLeft size={24} />
        </button>
      </Header>

      <Content></Content>
    </Container>
  );
}
