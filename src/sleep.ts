/**
 * Contains static sleep-related methods
 */
export class Sleep{

    /**
     * Private constructor to prevent instantiation
     */
    private constructor(){
        //no instantiation
    };

    /**
     * Returns a promise, which resolves after the given number of milliseconds.
     * 
     * @param ms Number of milliseconds to wait before resolving
     * @returns Promise
     */
    public static sleep(ms: number): Promise<unknown>{
        return new Promise(resolve => setTimeout(resolve, ms));
    }
  
    /**
     * Creates a function, which calls Sleeper.sleep with the
     * given number of milliseconds.
     * 
     * @param ms Number of milliseconds to wait before resolving
     * @returns Promise
     */
    public static createSleeper(ms: number): Function{
        return () => Sleep.sleep(ms);
    }

}