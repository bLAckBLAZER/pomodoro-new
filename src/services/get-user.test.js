// ************************************************************************************
//
// NOTE: This is just for jest practice purpose. Its not related to this project AT ALL!
//
// *************************************************************************************

import getUser from "./get-user";
import * as axios from "axios";

jest.mock("axios");

describe("get user service", () => {
  test("should return user when API call is successful", async () => {
    const expectedState = { name: "tanay", age: 30, address: "Bokaro" };

    const resp = {
      data: expectedState,
    };

    axios.get.mockResolvedValue(resp);

    const state = await getUser();

    expect(state).toEqual({ name: "tanay", age: 30, address: "Bokaro" });
  });

  test("should return errorMessage when API call fails", async () => {
    axios.get.mockRejectedValue({
      isAxiosError: true,
      response: { data: { errorMessage: "user not found" } },
    });

    axios.isAxiosError.mockImplementation((payload) => true);

    const user = await getUser();
    expect(user).toEqual({ errorMessage: "user not found" });

    expect(axios.isAxiosError).toBeCalledTimes(1);
  });
});
