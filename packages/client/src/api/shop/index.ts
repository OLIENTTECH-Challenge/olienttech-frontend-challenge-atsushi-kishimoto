import { APP_API_URL } from '@/libs/constants';
import { SuccessResponse } from '@olienttech/model';

type SigninRequest = {
  id: string;
  password: string;
};

export const signin = async (req: SigninRequest) => {
  const { id, password } = req;

  const res = await fetch(`${APP_API_URL}/shops/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      password,
    }),
  });

  await new Promise((resolve) => setTimeout(resolve, 2000)); // NOTE: トーストの挙動を試すために, わざと処理待ちしている

  if (res.ok) {
    const json = (await res.json()) as SuccessResponse<{ id: string; name: string; token: string }>;

    // NOTE: トークンをCookieにセット
    document.cookie = `token=${json.data.token}; path=/`;

    return json.data;
  } else {
    throw new Error();
  }
};

type FetchShopRequest = {
  shopId: string;
  token: string;
};

type FetchShopResponse = {
  id: string;
  name: string;
  description: string;
};

export const fetchShop = async (req: FetchShopRequest) => {
  const { shopId, token } = req;

  const res = await fetch(`${APP_API_URL}/shops/${shopId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error();
  }

  const json = (await res.json()) as SuccessResponse<FetchShopResponse>;
  return json.data;
};

/* 取引可能な製造会社をFetch */
type FetchPartnerManufacturersRequest = {
  shopId: string;
  token: string;
};

type FetchPartnerManufacturersResponse = {
  id: string;
  name: string;
  description: string;
}[];

export const fetchPartnerManufacturers = async (
  req: FetchPartnerManufacturersRequest,
): Promise<FetchPartnerManufacturersResponse> => {
  const { shopId, token } = req;

  const res = await fetch(`${APP_API_URL}/shops/${shopId}/partner-manufacturers`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error();
  }
  const json = (await res.json()) as SuccessResponse<FetchPartnerManufacturersResponse>;
  return json.data;
};

/* 製造会社の取り扱い商品をFetch */
type FetchHandlingProductsRequest = {
  shopId: string;
  manufacturerId: string;
  token: string;
};

type FetchHandlingProductsResponse = {
  products: {
    id: string;
    name: string;
    description: string;
    categories: { id: string; name: string }[];
    stock: number;
  }[];
};

export const fetchHandlingProducts = async (
  req: FetchHandlingProductsRequest,
): Promise<FetchHandlingProductsResponse> => {
  const { shopId, manufacturerId, token } = req;

  const res = await fetch(`${APP_API_URL}/shops/${shopId}/partner-manufacturers/${manufacturerId}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error();
  }
  const json = (await res.json()) as SuccessResponse<FetchHandlingProductsResponse>;
  return json.data;
};
