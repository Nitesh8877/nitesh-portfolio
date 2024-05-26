import React from "react";
import { Suspense,lazy } from "react";
import Spinner from "../components/Spinner";
import { Container, ContainerCenter, Heading } from "../components/utility";

const ContactForm = lazy(()=>import("../components/ContactForm"))


const Contact = () => {
  return (
    <Container className="p-4">
      <Heading className="text-center">Contact Us</Heading>
      <Suspense fallback={<Spinner />}>
      <ContainerCenter className="p-4 m-4 gap-3 flex-col md:flex-row">
        <ContactForm />
      </ContainerCenter>
      </Suspense>
    </Container>
  );
};

export default Contact;
