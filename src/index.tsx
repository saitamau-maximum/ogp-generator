import { Hono } from "hono";
import { OGP } from "./components/ogp";
import { generateImage } from "./lib/img";

const app = new Hono();

app.get("/", async (c) => {
  const msg = c.req.query("msg");
  const img = await generateImage(<OGP msg={msg} />);
  c.header("Cache-Control", "max-age=604800");
  return c.body(img);
});

export default app;
