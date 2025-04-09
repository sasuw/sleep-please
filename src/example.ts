import { Sleep } from './sleep';

async function demonstrateSleep() {
  console.log('Starting sleep demonstration');

  // Basic sleep usage
  console.log('Sleeping for 1 second...');
  await Sleep.sleep(1000);
  console.log('Woke up after 1 second');

  // Creating a reusable sleeper
  const shortSleep = Sleep.createSleeper(500);
  
  console.log('Using createSleeper:');
  console.log('First short sleep...');
  await shortSleep();
  console.log('Second short sleep...');
  await shortSleep();

  // Parallel sleeping
  console.log('Demonstrating parallel sleeps');
  const start = Date.now();
  await Promise.all([
    Sleep.sleep(1000),
    Sleep.sleep(1500),
    Sleep.sleep(2000)
  ]);
  const duration = Date.now() - start;
  console.log(`Parallel sleeps completed in approximately ${duration}ms`);

  // Error handling
  try {
    await Sleep.sleep(-100); // This will throw an error
  } catch (error) {
    console.error('Expected error:', error.message);
  }
}

// Run the demonstration
demonstrateSleep().catch(console.error);