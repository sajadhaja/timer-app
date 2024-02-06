import { useState } from "react";
import { Timer } from "../../basic/Timer/Timer";
import "./TimerWrapper.css";

interface Props {
  count: number;
}
export default function TimerWrapper(props: Props) {
  const [countStart, setCountStart] = useState<number>(0);
  const [terminate, setTerminate] = useState<boolean>(false);
  const [pause, setPause] = useState<boolean>(false);
  const [resume, setResume] = useState<boolean>(false);

  const startTimer = () => {
    setTerminate(false);
    setPause(false);
    setResume(false);
    setCountStart(props.count);
  };

  const onCompleteTimer = () => {
    setCountStart(0);
  };

  const onClickTimer = () => {
    setTerminate(true);
  };

  const onMouseHoverTimer = () => {
    setResume(false);
    setPause(true);
  };

  const onMouseLeaveTimer = () => {
    setResume(true);
    setPause(false);
  };

  const renderStartButton = () => (
    <>
      {countStart === 0 && (
        <button onClick={startTimer} className="start-button">
          Start timer
        </button>
      )}
    </>
  );

  const renderTimerDisplay = () => (
    <>
      {countStart > 0 && (
        <div
          tabIndex={0}
          onClick={onClickTimer}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onClickTimer();
            }
          }}
          onFocus={onMouseHoverTimer}
          onBlur={onMouseLeaveTimer}
          onMouseEnter={onMouseHoverTimer}
          onMouseLeave={onMouseLeaveTimer}
        >
          <Timer
            countStart={countStart}
            pause={pause}
            terminate={terminate}
            resume={resume}
            onComplete={onCompleteTimer}
          ></Timer>
        </div>
      )}
    </>
  );

  return (
    <div className="timer-container">
      <div className="timer-display">{renderTimerDisplay()}</div>{" "}
      <div className="timer-buttons">{renderStartButton()}</div>
    </div>
  );
}
