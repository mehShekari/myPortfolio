import React, { useRef, useCallback } from "react";

export function useThrottle<T>(cb: ((callBack: T) => void), delay: number) {
  const shouldWaitRef = useRef<Boolean>(false);
  const wattingArgsRef = useRef<any>(null);

  const timeoutFunc = useCallback(() => {
    if (wattingArgsRef.current == null) {
      shouldWaitRef.current = false;
    } else {
      cb(wattingArgsRef.current);
      wattingArgsRef.current = null;
      setTimeout(timeoutFunc, delay);
    }
  }, [wattingArgsRef.current])

  return (args: T) => {
    if (shouldWaitRef.current) {
      wattingArgsRef.current = args;
      return
    }

    cb(args);
    shouldWaitRef.current = true;
    setTimeout(timeoutFunc, delay);
  }
}