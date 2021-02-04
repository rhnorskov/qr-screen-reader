import React, { MouseEvent } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import * as S from "./Code.styles";

export type CodeProps = {
  code: string;
  onCopy: (code: string) => void;
};

export const Code = ({ code, onCopy }: CodeProps) => {
  return (
    <CopyToClipboard text={code} onCopy={onCopy}>
      <S.Base>
        <S.Code>{code}</S.Code>
        <S.ClipboardIcon />
      </S.Base>
    </CopyToClipboard>
  );
};
