import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "./mocks/server";
// TODO: throws an error. see https://github.com/testing-library/jest-dom/issues/427
// import "@testing-library/jest-dom";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
