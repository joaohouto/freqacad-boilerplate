import { useState, useEffect } from "react";
import {} from "react-router-dom";
import { db } from "../../database";

import {
  Container,
  Content,
  Header,
  Details,
  ProgressBar,
  Button,
} from "./styles";

import { IconArrowLeft, IconTrash } from "@tabler/icons";

export function Subject() {
  let [subject, setSubject] = useState({});

  const navigate = useNavigate();

  useEffect(() => {});

  return (
    <Container>
      <Header>
        <button onClick={() => navigate(-1)}>
          <IconArrowLeft size={24} />
        </button>

        <button onClick={deleteSubject}>
          <IconTrash color="#999" size={24} />
        </button>
      </Header>

      <Content></Content>
    </Container>
  );
}
