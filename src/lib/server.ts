import { Logger } from 'winston';
import { AddressInfo } from 'net';
import createApp from './app';
import bootstrap from './bootstrap';
import { TYPES } from './util/ioc-types';

const DEFAULT_PORT = 3000;

const PORT = process.env.PORT || DEFAULT_PORT;

async function main() {
  const container = await bootstrap();

  const app = await createApp(container);

  const server = app.listen(PORT, () => {
    const addr = server.address() as AddressInfo;
    const logger = container.get<Logger>(TYPES.Logger);
    logger.info(`Server listening on ${addr.address}:${addr.port}!`);
  });
}

main();

/**
 * Trata o evento de shutdown enviado pelo sistema operacional.
 */
process.on('SIGINT', async () => {
  try {
    process.exit(0);
  } catch (err) {
    process.exit(1);
  }
});
