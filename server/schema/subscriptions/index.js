import { PubSub } from 'apollo-server';

import * as ITEM_EVENTS from './item';
import * as USER_EVENTS from './user';

export const EVENTS = {
  ITEM: ITEM_EVENTS,
  USER: USER_EVENTS
};

const pubsub = new PubSub()
pubsub.ee.setMaxListeners(90);

export default pubsub;
