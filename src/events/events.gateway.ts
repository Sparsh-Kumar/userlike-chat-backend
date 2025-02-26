import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({ namespace: 'events' })
export default class EventsGateway {
  private readonly msg: string = 'Hello world!';

  @SubscribeMessage('message')
  public handleMessage(client: any, payload: any): string {
    return this.msg;
  }
}
