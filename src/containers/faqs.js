import React, { useState } from 'react';
import { Accordion, OptForm } from '../components';
import faqsData from '../fixtures/faqs.json';

export function FaqsContainer() {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item onClick={() => toggle(item.id)} key={item.id}>
          <Accordion.Header key1={item.id} clicked={clicked}>
            {item.header}
          </Accordion.Header>
          {clicked === item.id && <Accordion.Body>{item.body}</Accordion.Body>}
        </Accordion.Item>
      ))}
      <Accordion.Frame />

      <OptForm>
        <OptForm.Input placeholder="Email address" />
        <OptForm.Button>Try it now</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
