import { useEffect, useState } from "react";
import { useCountdown } from "usehooks-ts";
import { TimerCircle } from "../Circle/TimerCircle";

interface TimerProps {
  countStart: number;
  pause: boolean;
  terminate: boolean;
  resume: boolean;
  onComplete: () => void;
}

export function Timer(props: TimerProps) {
  const [isStarted, setStarted] = useState<boolean>(false);
  const [count, { startCountdown, stopCountdown, resetCountdown }] =
    useCountdown({
      countStart: props.countStart,
      intervalMs: 1000,
    });

  useEffect(() => {
    if (props.pause) {
      stopCountdown();
    }

    if (props.terminate) {
      props.onComplete();
      resetCountdown();
    }

    if (props.resume) {
      startCountdown();
    }

    if (
      !isStarted &&
      props.countStart > 0 &&
      (!props.pause || !props.terminate)
    ) {
      setStarted(true);
      startCountdown();
    }

    if (count === 0 && props.onComplete) {
      props.onComplete();
    }
  }, [props.countStart, props.pause, props.terminate, count]);

  return (
    <>
      <TimerCircle isPaused={props.pause} count={count}></TimerCircle>
    </>
  );
}
