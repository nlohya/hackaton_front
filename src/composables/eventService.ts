import type { Event } from "../models/events.dto";

const URL = "http://localhost:3000/api/events";

async function getEvents(): Promise<Event[]> {
  const response = await fetch(URL);
  return await response.json();
}

export function useEventService() {
  return {
    getEvents: () => getEvents(),
  };
}
