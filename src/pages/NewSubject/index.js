import { useNavigate } from "react-router-dom";
import { db } from "../../database";

import { Container, Content, Header, Form, Button, InfoCard } from "./styles";

import { IconArrowLeft } from "@tabler/icons";

export function NewSubject() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header>
        <button onClick={() => navigate(-1)}>
          <IconArrowLeft size={24} />
        </button>
      </Header>

      <Content></Content>
    </Container>
  );
}
