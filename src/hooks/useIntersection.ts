import React, { useEffect, useRef } from "react";

type optionsType = {
  root: HTMLElement | null;
  rootMargin: string,
  treshold: number,
}

export function useIntercetion<T>(cb: (entry: any) => void, arrayRef: Array<T>, options: optionsType) {
  const arrayRefs = useRef<any[]>(arrayRef);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cb(entry);
          observer.unobserve(entry.target);
        }
      })
    }, options)

    arrayRefs.current.forEach(item => {
      if (item) observer.observe(item)
    })
  }, [cb, options])
}