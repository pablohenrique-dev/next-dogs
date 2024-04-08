export const BASE_URL = process.env.API_BASE_URL!;
const PASSWORD_LOST_URL = process.env.PASSWORD_LOST_URL!;

export function PHOTO_GET() {
  return {
    url: BASE_URL + "/api/photo",
    method: "GET",
  };
}

export function TOKEN_POST() {
  return {
    url: BASE_URL + "/jwt-auth/v1/token",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  };
}

export function TOKEN_VALIDATE_POST(token: string) {
  return {
    url: BASE_URL + "/jwt-auth/v1/token/validate",
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export function USER_GET(token: string) {
  return {
    url: BASE_URL + "/api/user",
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export function USER_POST(body: {
  username: string;
  password: string;
  email: string;
}) {
  return {
    url: BASE_URL + "/api/user",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
}

export function PASSWORD_LOST_POST(login: string) {
  return {
    url: BASE_URL + "/api/password/lost",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: {
      login,
      url: PASSWORD_LOST_URL,
    },
  };
}

export function PASSWORD_RESET_POST(body: {
  login: string;
  password: string;
  key: string;
}) {
  return {
    url: BASE_URL + "/api/password/reset",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  };
}
