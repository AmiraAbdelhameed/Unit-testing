/* eslint-disable jest/valid-title */
import { fireEvent, render, screen } from "@testing-library/react";
import { setupServer } from "msw/node";
import Pets from "../Pets";
import { rest } from "msw";
import mockedCats from "../../../mocks/cats.json";
import userEvent from "@testing-library/user-event"
import Card from "../../Card/Card";

// mocking//facking
const server = setupServer(
  rest.get("http://localhost:4000/cats", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockedCats));
  })
);

describe("Test Pets component", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("Test Initial Component render", async () => {
    render(<Pets />);
    let catCards = await screen.findAllByRole("article");
    expect(catCards.length).toBe(5);
  });

  test("Test render after Gender Filter", async () => {
    render(<Pets />);
    let catCards = await screen.findAllByRole("article");
    // userEvent.selectOptions(screen.getByLabelText(/Gender/i),'male')
    fireEvent.change(screen.getByLabelText(/Gender/i),{ target: { value: 'male' } });
    expect(screen.getAllByRole('article').length).toBe(2)
    expect(screen.getAllByRole('article')).toStrictEqual([catCards[1],catCards[3]])
  });
 
  test("Test render after clicking favourite and applying Favourite Filter", async () => {
    render(<Pets />);
    const catCards = await screen.findAllByRole("article");
    const heartButtons = screen.getAllByTestId("heart");
    fireEvent.click(heartButtons[0]);
    fireEvent.change(screen.getByLabelText(/Favourite/i), {
      target: { value: "favoured" },
    });
    const filteredCats = await screen.findAllByRole("article");
    expect(filteredCats.length).toBe(1);
  });
  
});
