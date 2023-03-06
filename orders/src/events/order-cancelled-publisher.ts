import { OrderCancelledEvent, Publisher, Subjects } from "@kirvalidze/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
    readonly subject = Subjects.OrderCancelled;
}