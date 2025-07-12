import React from "react";
import BuggyCounter from "./BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Error Boundary Simulations</h1>

      {/* Simulation 1 */}
      <section style={{ border: "1px solid #ccc", marginBottom: "20px", padding: "10px" }}>
        <h2>Simulation 1: Shared Error Boundary</h2>
        <p>
          Two counters inside the same error boundary. If one crashes, both disappear.
        </p>
        <ErrorBoundary>
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>
      </section>

      {/* Simulation 2 */}
      <section style={{ border: "1px solid #ccc", marginBottom: "20px", padding: "10px" }}>
        <h2>Simulation 2: Separate Error Boundaries</h2>
        <p>
          Each counter has its own error boundary. If one crashes, the other is unaffected.
        </p>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
        <ErrorBoundary>
          <BuggyCounter />
        </ErrorBoundary>
      </section>

      {/* Simulation 3 */}
      <section style={{ border: "1px solid #ccc", padding: "10px" }}>
        <h2>Simulation 3: No Error Boundary</h2>
        <p>
          This counter has no error boundary. When it crashes, the whole app crashes.
        </p>
        <BuggyCounter />
      </section>
    </div>
  );
}

export default App;



