export const BASE_URL = "https://dogsapi.origamid.dev/json";

export const PHOTO_GET = {
  endpoint: {
    photos: "/api/photo",
    photos_query: "/api/photo/?_total=9&_page=1&_user=0",
    photo: "/api/photo/:id",
  },
  method: "GET",
};

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
