import { initServer } from './App';

async function init() {
  const app = await initServer();
  app.listen(8000, () => console.log(`Server Started At Port 8000`));
}

init().catch((error) => {
  console.error('Error starting server:', error);
  process.exit(1);
});