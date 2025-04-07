import { useQuize } from "../context/QuizeContext";

function Progres() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuize();
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Qestion <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>
          {points}/{maxPossiblePoints}
        </strong>
      </p>
    </header>
  );
}

export default Progres;
