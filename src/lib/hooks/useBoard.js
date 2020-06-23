import * as OBF from "@shayc/obf-utils";
import useBoardSet from "./useBoardSet";
import useNavigation from "./useNavigation";
import useOutput from "./useOutput";
import useGrid from "./useGrid";

const initialBoardSet = { manifest: { paths: { boards: {} } }, boards: {} };
const initialDeps = {
  play: () => {
    throw new Error(
      "play() is not implemented: please provide an audio play function to useBoard hook."
    );
  },
  speak: () => {
    throw new Error(
      "speak() is not implemented: please provide a text-to-speech function to useBoard hook."
    );
  },
};

function useBoard(boardSet = initialBoardSet, deps = initialDeps) {
  const {
    clearBoardSet,
    getBoardById,
    getBoardByPath,
    getBoards,
    getRootBoard,
    setBoardSet,
  } = useBoardSet(boardSet);

  const boards = getBoards();

  const boardList = boards.map(({ id, name, buttons }) => {
    return {
      id,
      name,
      buttonsCount: buttons.length,
    };
  });

  const rootBoardId = getRootBoard()?.id;
  const nav = useNavigation([rootBoardId], 0);
  const board = nav.currentHistory ? getBoardById(nav.currentHistory) : {};
  const grid = useGrid(board?.grid || {});
  const output = useOutput();
  async function openFiles(files) {
    clearSet();

    const parsedFiles = await OBF.readFiles(files);
    const boardSet = parsedFiles[0];

    loadSet(boardSet);
  }

  function clearSet() {
    clearBoardSet();
    nav.clear();
  }

  function loadSet(boardSet) {
    setBoardSet(boardSet);
    nav.set([getRootBoard()?.id]);
  }

  function loadBoard(loadBoard) {
    const boardId = loadBoard.id || getBoardByPath(loadBoard.path)?.id;
    nav.push(boardId);
  }

  function loadRootBoard() {
    const rootBoardId = getRootBoard()?.id;
    nav.set([rootBoardId]);
  }

  function doButtonActions(button) {
    if (button.actions?.length) {
      button.actions.forEach((action) => handleAction(action));
    } else if (button.action) {
      handleAction(button.action);
    }
  }

  function handleAction(action) {
    const { SpecialtyActions } = OBF;

    const ActionHandlers = {
      [SpecialtyActions.Backspace]: output.pop,
      [SpecialtyActions.Clear]: output.clear,
      [SpecialtyActions.Home]: loadRootBoard,
      [SpecialtyActions.Space]: outputPushSpace,
      [SpecialtyActions.Speak]: speakOutput,
    };

    const actionHandler = ActionHandlers[action];
    const isSpellingAction = action.startsWith("+");

    if (actionHandler) {
      actionHandler();
    }

    if (isSpellingAction) {
      const string = action.slice(1);
      spellOutput(string);
    }
  }

  function spellOutput(string) {
    output.joinLastValue((value) => {
      return {
        ...value,
        label: `${value?.label || ""}${string}`,
      };
    });
  }

  function outputPushSpace() {
    output.push({ label: "" });
  }

  function speakOutput() {
    const text = output.values.reduce(
      (acc, value) => `${acc} ${value.vocalization || value.label}`,
      ""
    );

    deps.speak(text);
  }

  function handleOutputClick() {
    speakOutput();
  }

  function handleButtonClick(button) {
    const hasActions = button.action || button.actions?.length;

    if (hasActions) {
      doButtonActions(button);
      return;
    }

    // TODO: refactor duplication below
    if (button.load_board) {
      loadBoard(button.load_board);

      if (button.sound) {
        deps.play(button.sound);
      } else if (button.vocalization) {
        deps.speak(button.vocalization);
      }
    }

    if (!button.load_board) {
      const { id, image, label, sound, vocalization } = button;
      const outputValue = { id, image, label, sound, vocalization };
      output.push(outputValue);

      if (button.sound) {
        deps.play(button.sound);
      } else {
        const text = button.vocalization || button.label;
        deps.speak(text);
      }
    }
  }

  return {
    board,
    boardList,
    grid,
    handleButtonClick,
    handleOutputClick,
    openFiles,
    loadBoard,
    loadRootBoard,
    nav,
    output,
    rootBoardId,
  };
}

export default useBoard;
