import jsQR, { QRCode } from "jsqr";
import React, { useState } from "react";
import screenshot, { Display } from "screenshot-desktop";
import sharp from "sharp";

import * as S from "./App.styles";
import { Code } from "./components/Code";

export function App() {
  const [codes, setCodes] = useState<QRCode[]>([]);
  const [status, setStatus] = useState<
    "processing" | "success" | "error" | "empty"
  >(null);

  const handleClick = async () => {
    setStatus("processing");

    try {
      const codes = await scanScreens();

      if (codes.length) {
        setCodes(codes);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <>
      <S.Header />
      <S.Main>
        <S.Messages>
          {status === "success" && (
            <S.SuccessMessage>QR code succesfully scanned!</S.SuccessMessage>
          )}

          {status === "error" && (
            <S.ErrorMessage>No code was found</S.ErrorMessage>
          )}
        </S.Messages>

        <S.Button loading={status === "processing"} onClick={handleClick}>
          <S.ButtonLoader loading={status === "processing"} />
          Scan QR code
        </S.Button>

        {codes.length > 0 &&
          codes.map((code) => (
            <Code key={code.data} code={code.data} onCopy={() => {}} />
          ))}
      </S.Main>

      <S.Global />
    </>
  );
}

async function scanScreen(display: Display) {
  const image = await screenshot({ screen: display.id });

  return new Promise<QRCode>((resolve, reject) => {
    sharp(image)
      .raw()
      .threshold()
      .ensureAlpha()
      .toBuffer((error, buffer, { width, height }) => {
        if (error) reject(error);
        resolve(jsQR(new Uint8ClampedArray(buffer), width, height));
      });
  });
}

async function scanScreens() {
  const displays = await screenshot.listDisplays();

  const codes = await Promise.all(
    displays.map((display) => scanScreen(display))
  );

  return codes.filter(Boolean);
}
