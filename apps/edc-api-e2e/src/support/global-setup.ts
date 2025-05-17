import { waitForPortOpen } from '@nx/node/utils';

module.exports = async function () {
  // Start services that that the app needs to run (e.g. database, docker-compose, etc.).
  console.log('\nSetting up...\n');

  const host = process.env.HOST ?? 'localhost';
  const port = process.env.PORT ? Number(process.env.PORT) : 3000;
  await waitForPortOpen(port, { host });

  // Hint: Use `globalThis` to pass variables to global teardown.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (globalThis as any).__TEARDOWN_MESSAGE__ = '\nTearing down...\n';
};
