import { vitest, describe, test, beforeEach, expect } from "vitest";
import { parseInstructions, parsePlateauCreation, parseStartingPosition } from "../../src/input/parse_inputs";
import { isPosition, isValidInstructions } from "../../src/utility/typeguards";
import { Instruction, INSTRUCTIONS } from "../../src/input/input_types";

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

describe("parseInstructions", () => {
    test("returns a valid Array of instructions", () => {
        const input: string = "LMMMMR"
        expect(parseInstructions(input)[0]).toBe("L");
        expect(parseInstructions(input)[1]).toBe("M");
        expect(parseInstructions(input)[2]).toBe("M");
    });

    test("throws an invalid instructions string error", () => {
        const input: string = "LMMMMW"
        expect(() => { isValidInstructions(parseInstructions(input)) }).throw(("invalid instruction string"));
    });
})


describe("parseGridSize", () => {
    test("returns a valid Plateau", () => {
        const input: number[] = [5, 6];
        expect(parsePlateauCreation(input).x).toBe(5);
        expect(parsePlateauCreation(input).y).toBe(6)
    });

    test("returns a valid Plateau when given negative int at x", () => {
        const input: number[] = [-5, 6];
        expect(parsePlateauCreation(input).x).toBe(5);
        expect(parsePlateauCreation(input).y).toBe(6)
    });

    test("returns a valid Plateau when given two negative int at y", () => {
        const input: number[] = [5, -6];
        expect(parsePlateauCreation(input).x).toBe(5);
        expect(parsePlateauCreation(input).y).toBe(6)
    });

    test("returns a valid Plateau when given two negative int", () => {
        const input: number[] = [-5, -6];
        expect(parsePlateauCreation(input).x).toBe(5);
        expect(parsePlateauCreation(input).y).toBe(6)
    });

    test("throws error when given non number array", () => {
        const input = ["test", -6];
        expect(() => { parsePlateauCreation(input) }).toThrow("invalid grid size - Please enter valid Integers");
    });

})