function StartScreen({ numQestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcome to the React Quize!</h2>
      <h3>{numQestions} questions to test your React mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => setTimeout(() => dispatch({ type: "start" }), 100)}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
