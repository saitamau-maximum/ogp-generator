import satori, { init } from "satori/wasm";
import initYoga from "yoga-wasm-web";
import { Resvg, initWasm } from "@resvg/resvg-wasm";
import type { ReactNode } from "react";
import { loadGoogleFont } from "./fonts";
import yogaWasm from "../vender/yoga.wasm";
import resvgWasm from "../vender/resvg.wasm";

const genModuleInit = () => {
  let isInit = false;
  return async () => {
    if (isInit) {
      return;
    }

    init(await initYoga(yogaWasm));
    await initWasm(resvgWasm);
    isInit = true;
  };
};
const moduleInit = genModuleInit();

export const generateImage = async (node: ReactNode) => {
  await moduleInit();
  const notoSans = await loadGoogleFont({
    family: "Noto Sans JP",
    weight: 700,
  });

  const svg = await satori(node, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: "NotoSansJP",
        data: notoSans,
        weight: 700,
        style: "normal",
      },
    ],
  });

  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return pngBuffer;
};
