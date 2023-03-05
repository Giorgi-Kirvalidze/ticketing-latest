import { TicketCreatedEvent } from "@kirvalidze/common";
import { Publisher } from "../../../common/src/events/base-publisher";
import { Subjects } from "../../../common/src/events/subjects";

export class TickerCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
