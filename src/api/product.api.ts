import instance from "./Axios";

export async function getProducts({
  orderBy = "recent",
  page = 1,
  pageSize = 10,
}) {
  const query = `orderBy=${orderBy}&page=${page}&pageSize=${pageSize}`;
  // console.log(query);
  try {
    const response = await instance.get(`/products?${query}`);

    const body = response.data;

    // console.log(body);

    return body;
  } catch (error) {
    console.error("API 오류 \n", error);
  }
}

export async function getProductId(productId: string | undefined) {
  const response = await instance.get(`/products/${productId}`);
  const body = response.data;

  // console.log(body);

  return body;
}

export async function getComment(productId: string | undefined, limit = 3) {
  const response = await instance.get(
    `/products/${productId}/comments?limit=${limit}`
  );
  const body = response.data;

  // console.log(body);

  return body;
}
