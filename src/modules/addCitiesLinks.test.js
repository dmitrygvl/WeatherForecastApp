import { addCitiesLinks } from "./addCitiesLinks";

jest.mock("./getAndDisplayWeather");

describe("addCitiesLinks", () => {
  let mockGetAndDisplayWeather;
  let mockPreventDefault;

  beforeEach(() => {
    mockGetAndDisplayWeather = jest.fn();
    mockPreventDefault = jest.fn();
    document.body.innerHTML = ` 
      <a href="#">City 1</a>
      <a href="#">City 2</a>
      <a href="#">City 3</a>
    `;
  });

  it("adds event listener to each link", async () => {
    const link1 = document.createElement("a");
    const link2 = document.createElement("a");
    document.body.appendChild(link1);
    document.body.appendChild(link2);
    const mockAddEventListener = jest.fn();
    link1.addEventListener = mockAddEventListener;

    await addCitiesLinks();

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      expect(mockAddEventListener).toHaveBeenCalledWith(
        "click",
        expect.any(Function),
      );
    });
  });
});
