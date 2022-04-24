import "./index.scss";

export const BingoCard = ({ numbers, playerName }) => {
  return (
    <div className="bingo-card">
      <h2 className="bingo-player-name">{playerName}</h2>
      <div className="bingo-numbers-wrapper">
        {numbers.map((number, key) => (
          <span key={key} className={`bingo-number number-${key}`} id={key}>
            {number}
          </span>
        ))}
      </div>
    </div>
  );
};
