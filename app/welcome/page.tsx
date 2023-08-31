//@ts-nocheck

"use client"

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

const TypingText = styled.p`
  overflow: hidden;
  white-space: nowrap;
  background-color: #fd9426;
  text-align: left;
`;

const FormCont = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
  right: 0;
  width: fit-content;
  pointer-events: none;
  user-select: none;
  padding: 10px;
`;

export default function Index() {
  const lines = [
    "welcome to thew new https://www.stridehealth.com/",
  ];

  return (
    <FormCont>
      {lines.map((line, index) => (
        <DelayedTypewriter key={index} text={line} delay={index * 4000} />
      ))}
    </FormCont>
  );
}

const DelayedTypewriter = ({ text, delay }) => {
  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  return showTypewriter ? <Typewriter text={text} /> : null;
};

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingTimer = setInterval(() => {
      setDisplayText((prevText) => {
        const nextCharacter = text[currentIndex];
        currentIndex++;
        if (currentIndex === text.length) {
          setIsTypingComplete(true);
          clearInterval(typingTimer);
        }
        return prevText + nextCharacter;
      });
    }, 150);

    return () => {
      clearInterval(typingTimer);
    };
  }, [text]);

  const handleClick = () => {
    if (text.includes("<a")) {
      const anchor = document.getElementById("usb");
      if (anchor) {
        const href = anchor.getAttribute("href");
      }
    }
  };

  return (
    <TypingText onClick={handleClick}>
      {isTypingComplete ? (
        <span dangerouslySetInnerHTML={{ __html: displayText }} />
      ) : (
        displayText
      )}
    </TypingText>
  );
};
