/**
 * Contains static sleep-related methods for pausing execution
 */
export class Sleep {
    /**
     * Private constructor to prevent instantiation
     */
    private constructor() {
      // Prevent direct instantiation
    }
  
    /**
     * Creates a promise that resolves after a specified duration
     * 
     * @param ms Number of milliseconds to wait
     * @returns A promise that resolves after the specified duration
     * @throws {Error} If duration is negative
     */
    public static sleep(ms: number, signal?: AbortSignal): Promise<void> {
      if (!Number.isFinite(ms)) {
        throw new TypeError('Sleep duration must be a finite number');
      }
      
      if (ms < 0) {
        throw new Error('Sleep duration must be non-negative');
      }
  
      return new Promise<void>((resolve, reject) => {
        const timer = setTimeout(resolve, ms);
        
        if (signal) {
          signal.addEventListener('abort', () => {
            clearTimeout(timer);
            reject(new Error('Sleep aborted'));
          }, { once: true });
        }
      });
    }
    
    /**
     * Creates a reusable sleep function for a specific duration
     * 
     * @param ms Number of milliseconds to wait
     * @returns A function that returns a promise resolving after the specified duration
     */
    public static createSleeper(ms: number): () => Promise<void> {
      return () => Sleep.sleep(ms);
    }

  }