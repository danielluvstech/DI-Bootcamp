import React from "react";
import LifecycleDemo from "./LifecycleDemo";
import FavoriteColor from "./FavoriteColor";

function App() {
  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>React Lifecycle - Updating Phase</h1>

      {/* Part I: Lifecycle Updating Demo */}
      <section style={{ border: "1px solid #ccc", marginBottom: "30px", padding: "15px" }}>
        <h2>Part I: LifecycleDemo</h2>
        <p>This component demonstrates all 5 lifecycle methods during updates.</p>
        <LifecycleDemo />
      </section>

      {/* Part II: shouldComponentUpdate & componentDidUpdate */}
      <section style={{ border: "1px solid #ccc", padding: "15px" }}>
        <h2>Part II: FavoriteColor</h2>
        <p>
          This component starts with <strong>red</strong> and changes to <strong>blue</strong>.
          Try changing <code>shouldComponentUpdate</code> to <code>false</code> to block the update.
        </p>
        <FavoriteColor />
      </section>
    </div>
  );
}

export default App;
