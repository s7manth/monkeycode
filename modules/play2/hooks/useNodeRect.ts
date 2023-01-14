import { useEffect, useState } from "react";

interface IRect {
  top: number;
  left: number;
}

export function useNodeRect<T extends HTMLElement>(
  refreshValue: string
): [IRect, (node: T) => void] {
  const [node, setNode] = useState<T>();
  const [rect, setRect] = useState({
    top: 0,
    left: 0,
  });
  useEffect(() => {
    if (!node) return;
    setRect({
      top: node.offsetTop,
      left: node.offsetLeft,
    });
  }, [node, refreshValue]);
  return [rect, setNode];
}
