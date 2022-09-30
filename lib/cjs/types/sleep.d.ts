export declare class Sleep {
    /**
     * Returns a promise, which resolves after the given number of milliseconds.
     *
     * @param ms Number of milliseconds to wait before resolving
     * @returns Promise
     */
    static sleep(ms: number): Promise<unknown>;
    /**
     * Creates a function, which calls Sleeper.sleep with the
     * given number of milliseconds.
     *
     * @param ms Number of milliseconds to wait before resolving
     * @returns Promise
     */
    static createSleeper(ms: number): () => Promise<unknown>;
}
//# sourceMappingURL=sleep.d.ts.map