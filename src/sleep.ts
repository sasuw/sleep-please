/**
 * Contains static sleep-related methods
 */
export class Sleep{

    /**
     * Returns a promise, which resolves after the given number of milliseconds.
     * 
     * @param ms Number of milliseconds to wait before resolving
     * @returns Promise
     */
    public static sleep(ms: number){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    /**
     * Creates a function, which calls Sleeper.sleep with the
     * given number of milliseconds.
     * 
     * @param ms Number of milliseconds to wait before resolving
     * @returns Promise
     */
    public static createSleeper(ms: number){
        return () => Sleep.sleep(ms);
    }

}