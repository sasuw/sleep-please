import { Sleep } from '../sleep';

async function demonstrateAbortableSleep() {
    console.log('Demonstrating Abortable Sleep');

    // Example 1: Normal successful sleep
    try {
        console.log('Starting normal sleep...');
        await Sleep.sleep(2000);
        console.log('Normal sleep completed successfully');
    } catch (error) {
        console.error('Normal sleep failed:', error);
    }

    // Example 2: Aborted sleep
    try {
        console.log('Starting abortable sleep...');
        const controller = new AbortController();
        const sleepPromise = Sleep.sleep(2000, controller.signal);

        // Abort the sleep after 500ms
        setTimeout(() => {
            console.log('Aborting sleep...');
            controller.abort();
        }, 500);

        await sleepPromise;
    } catch (error) {
        console.error('Sleep was aborted:', error.message);
    }

    // Example 3: Multiple abort scenarios
    async function multipleAbortScenarios() {
        console.log('Demonstrating multiple abort scenarios');

        // Scenario 1: Abort before sleep starts
        {
            const controller = new AbortController();
            controller.abort(); // Abort immediately

            try {
                await Sleep.sleep(1000, controller.signal);
            } catch (error) {
                console.log('Scenario 1 - Aborted before sleep:', error.message);
            }
        }

        // Scenario 2: Abort during sleep
        {
            const controller = new AbortController();
            const sleepPromise = Sleep.sleep(2000, controller.signal);

            setTimeout(() => {
                controller.abort();
            }, 500);

            try {
                await sleepPromise;
            } catch (error) {
                console.log('Scenario 2 - Aborted during sleep:', error.message);
            }
        }

        // Scenario 3: Successful sleep with abort signal
        {
            const controller = new AbortController();
            try {
                await Sleep.sleep(500, controller.signal);
                console.log('Scenario 3 - Sleep completed successfully');
            } catch (error) {
                console.log('Scenario 3 - Unexpected abort:', error.message);
            }
        }
    }

    await multipleAbortScenarios();
}

// Run the demonstration
demonstrateAbortableSleep().catch(console.error);