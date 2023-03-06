import { OrderCreatedEvent, Publisher, Subjects } from "@kirvalidze/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
