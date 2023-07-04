import { Accordion } from '@rewind-ui/core';

export function AccordionComponent() {
  return (
    
  <Accordion activeColor="gray" bordered={false} defaultItem="item-2">
    <Accordion.Item anchor="item-1">
      <Accordion.Header className="font-semibold">Semi-bold header</Accordion.Header>
      <Accordion.Body className="text-red-700 bg-red-50">Some red text on a red background...</Accordion.Body>
    </Accordion.Item>

    <Accordion.Item anchor="item-2">
      <Accordion.Header className="font-semibold">Header</Accordion.Header>
      <Accordion.Body className="text-green-700 bg-green-50">Some green text on a green background...</Accordion.Body>
    </Accordion.Item>
  </Accordion>
  );
}