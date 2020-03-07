import { useRef } from "react";

import * as OBF from "@shayc/obf-utils";

const initialBoardSet = { manifest: { paths: { boards: {} } }, boards: {} };

function useBoardSet(boardSet = initialBoardSet) {
  const ref = useRef(OBF.denormalizeBoardSet(boardSet));

  function getBoardById(id) {
    const board = OBF.getBoardById(id, ref.current);

    return board;
  }

  function getBoardByPath(path) {
    const board = OBF.getBoardByPath(path, ref.current);

    return board;
  }

  function getRootBoard() {
    const board = OBF.getRootBoard(ref.current);

    return board;
  }

  function clearBoardSet() {
    ref.current = initialBoardSet;
  }

  function setBoardSet(boardSet) {
    const set = denormalizeBoardSet(boardSet);
    ref.current = set;
  }

  function denormalizeBoardSet(boardSet) {
    const set = OBF.denormalizeBoardSet(boardSet);

    return set;
  }

  return {
    clearBoardSet,
    getBoardById,
    getBoardByPath,
    getRootBoard,
    setBoardSet
  };
}

export default useBoardSet;
