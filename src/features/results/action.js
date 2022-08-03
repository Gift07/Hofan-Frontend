import { createAsyncThunk } from "@reduxjs/toolkit";

export const FetchResults = createAsyncThunk(
  "Results/Fetch",
  async ({ bodyData, axiosPrivate }) => {
    try {
      console.log(bodyData);
      const { data } = await axiosPrivate.post("necta/results/", bodyData);

      const extract = (obj, ...keys) => {
        const newObject = Object.assign({});
        Object.keys(obj).forEach((key) => {
          if (keys.includes(key)) {
            newObject[key] = obj[key];
            delete obj[key];
          }
        });
        return newObject;
      };
      const newItem = extract(data.subjects);
      console.log(data);
      console.log(newItem);
      return data;
    } catch (error) {
      return error;
    }
  }
);
