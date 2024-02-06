import { useEffect, useState } from "react";
import "./TimerCircle.css";

interface Props {
  count: number;
  isPaused: boolean;
  /**To announce by screen reader */
  isAssertive?: boolean;
}

export function TimerCircle(props: Props) {
  const [total, setTotal] = useState<number>(props.count);
  const [k, setK] = useState<number>(0);
  const [l, setL] = useState<number>(100);

  useEffect(() => {
    const index = total - props.count;
    setL(100 - k);
    setK((index / total) * 100);
  }, [props.count, total]);
  return (
    <>
      <svg width="100px" height="100px" viewBox="0 0 42 42" className="donut">
        <circle
          className="circleOuter"
          cx="21"
          cy="21"
          r="15.91549430918954"
          stroke-dasharray={l + " " + k} //100, 0 to 0, 100
          stroke-dashoffset={l}
        ></circle>

        <circle
          className="circleInner"
          cx="21"
          cy="21"
          r="15.91549430918954"
          stroke-dasharray={k + " " + l} //0,100  to 100, 0
          stroke-dashoffset="0"
        ></circle>

        <g>
          {props.count && (
            <text
              aria-live={props.isAssertive ? "assertive" : "off"}
              className="count-text"
              x="50%"
              y="50%"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              {props.count}
            </text>
          )}
          {props.isPaused && (
            <text
              className="pause-text"
              x="50%"
              y="70%"
              dominant-baseline="middle"
              text-anchor="middle"
            >
              Paused... !
            </text>
          )}
        </g>
      </svg>
    </>
  );
}
