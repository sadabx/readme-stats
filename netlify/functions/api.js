import indexHandler from "../../api/index.js";
import gistHandler from "../../api/gist.js";
import pinHandler from "../../api/pin.js";
import topLangsHandler from "../../api/top-langs.js";
import wakatimeHandler from "../../api/wakatime.js";
import patInfoHandler from "../../api/status/pat-info.js";
import upHandler from "../../api/status/up.js";

const routes = {
  "/api": indexHandler,
  "/api/": indexHandler,
  "/api/gist": gistHandler,
  "/api/pin": pinHandler,
  "/api/top-langs": topLangsHandler,
  "/api/wakatime": wakatimeHandler,
  "/api/status/pat-info": patInfoHandler,
  "/api/status/up": upHandler,
};

export default async (request, context) => {
  const url = new URL(request.url);
  
  // Normalize path by removing trailing slash unless it's just /api/
  let pathname = url.pathname;
  if (pathname.length > 5 && pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }

  const handler = routes[pathname];

  if (!handler) {
    return new Response("Not Found", { status: 404 });
  }

  // Build Express-like query object from searchParams
  const query = {};
  for (const [key, value] of url.searchParams.entries()) {
    query[key] = value;
  }

  // Mock Express-like Request object
  const req = {
    query,
    headers: Object.fromEntries(request.headers.entries()),
    method: request.method,
    url: request.url,
  };

  // Mock Express-like Response object
  let responseBody = "";
  let responseStatus = 200;
  const responseHeaders = {};

  const res = {
    setHeader(name, value) {
      responseHeaders[name.toLowerCase()] = value;
      return this;
    },
    send(body) {
      if (body !== null && body !== undefined) {
        if (typeof body === "object" || typeof body === "boolean") {
          if (!responseHeaders["content-type"]) {
            responseHeaders["content-type"] = "application/json";
          }
          responseBody = JSON.stringify(body);
        } else {
          responseBody = String(body);
        }
      } else {
        responseBody = "";
      }
      return this;
    },
    status(code) {
      responseStatus = code;
      return this;
    },
    json(body) {
      responseHeaders["content-type"] = "application/json";
      responseBody = JSON.stringify(body);
      return this;
    },
  };

  try {
    await handler(req, res);

    return new Response(responseBody, {
      status: responseStatus,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("Error executing function:", error);
    return new Response("Internal Server Error: " + error.message, {
      status: 500,
    });
  }
};

export const config = {
  path: ["/api", "/api/*"],
};
