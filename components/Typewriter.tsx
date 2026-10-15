'use client';

import { useEffect, useState } from 'react';

type Props = { words: string[]; typeMs?: number; deleteMs?: number; pauseMs?: number };

// Types a word, pauses, deletes it, then types the next one.
// Starts with the first word already shown, so the server HTML has real text and nothing jumps.
export default function Typewriter({ words, typeMs = 80, deleteMs = 40, pauseMs = 1700 }: Props) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return; // keep the static word

    let i = 0;
    let n = words[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (deleting) {
        n -= 1;
        setText(words[i].slice(0, n));
        if (n === 0) {
          deleting = false;
          i = (i + 1) % words.length;
          timer = setTimeout(tick, 300);
          return;
        }
        timer = setTimeout(tick, deleteMs);
      } else {
        n += 1;
        setText(words[i].slice(0, n));
        if (n === words[i].length) {
          deleting = true;
          timer = setTimeout(tick, pauseMs);
          return;
        }
        timer = setTimeout(tick, typeMs);
      }
    };

    timer = setTimeout(tick, pauseMs);
    return () => clearTimeout(timer);
  }, [words, typeMs, deleteMs, pauseMs]);

  return (
    <>
      <span className="sr-only">{words.join(', ')}</span>
      <span aria-hidden>
        {text}
        <span className="cursor" />
      </span>
    </>
  );
}