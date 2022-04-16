import faker from 'faker';
import { createServer, Factory, Model } from 'miragejs';

 export type Availability = {
  id: number;
  month_day: string;
  // week_day_available: string;
  hour: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      availability: Model.extend<Partial<Availability>>({})
    },

    factories: {
      availability: Factory.extend({
        month_day() {
          return new Date(faker.date.recent(20)).toLocaleDateString('pt-BR', {
            day: '2-digit',
          });
        },
        // week_day_available() {
        //   faker.date.weekday
        // },
        hour(i: number) {
          return `Hour ${i + 1}`
        }
      })
    },

    seeds(server) {
      server.createList('availability', 4);
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