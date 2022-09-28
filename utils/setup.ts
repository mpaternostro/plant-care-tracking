import { afterAll, afterEach, beforeAll, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import { server } from "./mocks/server";
// TODO: throws an error. see https://github.com/testing-library/jest-dom/issues/427
// import "@testing-library/jest-dom";

const fetchMock = createFetchMock(vi);
fetchMock.enableMocks();

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
