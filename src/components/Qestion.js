import { useQuize } from "../context/QuizeContext";
import Options from "./Options";

function Qestion() {
  const { questions, dispatch, answer, index } = useQuize();

  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options
        question={questions[index]}
        dispatch={dispatch}
        answer={answer}
      />
    </div>
  );
}

export default Qestion;
