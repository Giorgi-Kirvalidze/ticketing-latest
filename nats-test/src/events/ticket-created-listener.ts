import { Message } from "node-nats-streaming";
import { Subjects } from "../../../common/src/events/subjects";
import { TicketCreatedEvent } from "../../../common/src/events/ticket-created-event";
import { Listener } from "@kirvalidze/common";

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
  queueGroupName = "payments-service";

  onMessage(data: TicketCreatedEvent["data"], msg: Message) {
    console.log("Event data!", data);

    console.log(data.id);
    console.log(data.title);
    console.log(data.price);

    msg.ack();
  }
}
