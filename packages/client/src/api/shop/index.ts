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
