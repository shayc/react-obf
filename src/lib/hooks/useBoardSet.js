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

  function getBoards() {
    const boards = OBF.getBoards(ref.current);

    return boards;
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

  function getBoardSetColors() {
    const colors = OBF.getBoardSetColors(boardSet);

    return colors;
  }

  return {
    clearBoardSet,
    getBoardById,
    getBoardByPath,
    getBoards,
    getBoardSetColors,
    getRootBoard,
    setBoardSet,
  };
}

export default useBoardSet;
