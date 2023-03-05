import { Publisher, Subjects , TicketUpdatedEvent} from "@kirvalidze/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
