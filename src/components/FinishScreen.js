import { useQuize } from "../context/QuizeContext";

function FinishScreen() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuize();
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "😁";
  if (percentage >= 1 && percentage < 50) emoji = "🤔";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        {emoji}Your scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
        ({Math.ceil(percentage)}%){emoji}
      </p>
      <p className="highscore">(Highscore {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type: "reset",
          })
        }
      >
        Reset Quize
      </button>
    </>
  );
}

export default FinishScreen;
