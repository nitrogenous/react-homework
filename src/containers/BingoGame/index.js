import { useState, useEffect, useCallback } from "react";
import { BingoCard } from "../../components/BingoCard";
import "./index.scss";

export const BingoGame = () => {
  const [bingoCards, setBingoCards] = useState([]);
  const [userPoints, setUserPoints] = useState([]);
  const [pickedNumbers, setPickedNumbers] = useState([]);
  const [announcementText, setAnnouncementText] = useState("");

  const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const generateCardNumbers = useCallback(() => {
    let numbers = [];

    while (numbers.length < 8) {
      const number = randomInt(1, 100);

      if (!numbers?.includes(number)) numbers.push(number);
    }

    return numbers;
  }, []);

  const pickNumber = () => {
    const pickedNumber = randomInt(1, 100);

    if (!pickedNumbers.includes(pickedNumber)) {
      setPickedNumbers([...pickedNumbers, pickedNumber]);
      setAnnouncementText(pickedNumber);
      return pickedNumber;
    } else {
      pickNumber();
    }
  };

  const updateUserPoint = (userKey) => {
    let newUserPoints = JSON.parse(JSON.stringify(userPoints));

    newUserPoints[userKey] = newUserPoints[userKey]
      ? newUserPoints[userKey] + 1
      : 1;

    setUserPoints(newUserPoints);
  };

  const restartTheGame = () => {
    setBingoCards([]);
    setUserPoints([]);
    setPickedNumbers([]);
  };

  useEffect(() => {
    if (bingoCards.length <= 0) {
      const player1 = generateCardNumbers();
      const player2 = generateCardNumbers();
      const player3 = generateCardNumbers();

      setBingoCards([player1, player2, player3]);
    }
  }, [bingoCards.length, generateCardNumbers]);

  useEffect(() => {
    const latesPickedNumber = pickedNumbers[pickedNumbers.length - 1];
    let newAnnouncementText = announcementText;

    bingoCards.forEach((bingoCard, key) => {
      if (bingoCard.includes(latesPickedNumber)) {
        updateUserPoint(key);

        newAnnouncementText += ` - Player ${key + 1} Hits`;
      }
    });

    setAnnouncementText(newAnnouncementText);
  }, [pickedNumbers]);

  useEffect(() => {
    if (userPoints.includes(8)) {
      const winnerPlayer = userPoints.findIndex((userPoint) => userPoint === 8);
      const latesPickedNumber = pickedNumbers[pickedNumbers.length - 1];

      setAnnouncementText(
        `${latesPickedNumber} - Player ${winnerPlayer + 1} Wins!`
      );
      restartTheGame();
    }
  }, [userPoints]);

  return (
    <div className="bingo-wrapper">
      <div className="bingo-controls">
        <button className="pick-number-button" onClick={() => pickNumber()}>
          Pick a Number
        </button>
        <span className="announcement-text">{announcementText}</span>
      </div>
      <div className="bingo-deck">
        {bingoCards.map((bingoCard, key) => (
          <BingoCard
            numbers={bingoCard}
            playerName={`Player ${key + 1}`}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};
