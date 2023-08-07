import React, { useState, useEffect } from 'react';
import {Row, Cursor} from './styles'

const TypingEffect = ({ words, speed }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const currentWord = words[currentWordIndex];

  useEffect(() => {
    let isDeleting = false;
    let currentIndex = 0;
    let timeout;

    const type = () => {
      const currentText = currentWord.substring(0, currentIndex);
      setDisplayText(currentText);

      if (isDeleting) {
        currentIndex--;
      } else {
        currentIndex++;
      }

      const typingSpeed = speed;

      if (isDeleting && currentIndex === 0) {
        isDeleting = false;
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        timeout = setTimeout(type, 1000);
        return;
      } else if (!isDeleting && currentIndex === currentWord.length) {
        isDeleting = true;
        timeout = setTimeout(type, speed);
        return;
      }

      timeout = setTimeout(type, typingSpeed);
    };

    timeout = setTimeout(type, speed);

    return () => clearTimeout(timeout);
  }, [currentWord, currentWordIndex, speed, words]);

  return (
    <Row >
      {displayText}
      <Cursor>|</Cursor>
    </Row>
  );
};

export default TypingEffect;