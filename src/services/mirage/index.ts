import faker from 'faker';
import { createServer, Factory, Model } from 'miragejs';

 export type Availability = {
  id: number;
  month_day: string;
  // week_day_available: string;
  hour: string[];
}

export function makeServer() {
  const server = createServer({
    models: {
      availability: Model.extend<Partial<Availability>>({})
    },

    factories: {
      availability: Factory.extend({
        month_day() {
          return new Date(faker.date.recent(90)).toLocaleDateString('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          });
        },
        // week_day_available() {
        //   faker.date.weekday
        // },
        hour(i: number) {
          return ['09:00', '14:00', '18:00', '19:00']
        }
      })
    },

    seeds(server) {
      server.createList('availability', 100);
    },

    routes() {
      this.namespace = 'api';

      this.get('/availability');
      this.timing = 1000 * 2; // 1 segundo

      
      this.namespace = '';
      this.passthrough();
    }
  })

  return server
}