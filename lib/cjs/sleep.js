"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sleep = void 0;
class Sleep {
    /**
     * Returns a promise, which resolves after the given number of milliseconds.
     *
     * @param ms Number of milliseconds to wait before resolving
     * @returns Promise
     */
    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    /**
     * Creates a function, which calls Sleeper.sleep with the
     * given number of milliseconds.
     *
     * @param ms Number of milliseconds to wait before resolving
     * @returns Promise
     */
    static createSleeper(ms) {
        return () => Sleep.sleep(ms);
    }
}
exports.Sleep = Sleep;
//# sourceMappingURL=sleep.js.map