import React from "react";
import { render, cleanup, waitForElement } from "@testing-library/react";
import PlayerList from "./PlayerList";
import axiosMock from "axios";

afterEach(cleanup);

it("fetches and displays data", async () => {
  const playerList = [
    {
      name: "Billy Joel",
      country: "United States",
      searches: 100000,
      id: 1337
    },
    { name: "Weird Al", country: "United States", searches: 100, id: 9001 }
  ];
  axiosMock.get.mockResolvedValueOnce({
    data: playerList
  });

  const { getByText } = render(<PlayerList />);

  for (let player of playerList) {
    const playerElement = await waitForElement(() =>
      getByText(new RegExp(player.name))
    );

    expect(playerElement).toBeTruthy();
  }

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
});
