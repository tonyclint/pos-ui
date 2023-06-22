import axios from "axios";

const utils = {
  async apiHandler<T>(
    request: Promise<any>,
  ): Promise<any> {
    try {
      return (await request).data;
    } catch (error: any) {
      if (axios.isAxiosError(error)) {
        return Promise.reject(error.response?.data);
      }
      throw new Error(error as any);
    }
  },
};

export default utils;
