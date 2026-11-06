import { vitest, describe, test, beforeEach, expect } from "vitest";
import { parseStartingPosition } from "../../src/input/parse_inputs";
import { isPosition } from "../../src/utility/typeguards";

describe("parseStartingPosition", () => {
    test("parseStartingPosition returns type of Position", () => {
        const inputPosition = parseStartingPosition(["5", "5", "E"])
        console.log(inputPosition)
        expect(isPosition(inputPosition)).toBe(true)
    });

    test("parseStartingPosition throws Error when Invalid", () => {
        const input = ["5", "5", "Banana"]
        expect(() => { parseStartingPosition(input) }).toThrow()
    });

    test("parseStartingPosition returns valid position with lower case direction", () => {
        const input = ["5", "5", "e"]
        expect(isPosition(parseStartingPosition(input))).toBe(true)
    });

    test("parseStartingPosition throws with string as coordinate", () => {
        const input = ["ABC", "5", "e"]
        expect(() => { parseStartingPosition(input) }).toThrow("Invalid input.");
    });

    test("parseStartingPosition returns valid position with input as values", () => {
        const input = ["6", "5", "e"]
        expect(parseStartingPosition(input)["x"]).toBe(6);
        expect(parseStartingPosition(input)["y"]).toBe(5);
        expect(parseStartingPosition(input)["facing"]).toBe("E");
    });
})

