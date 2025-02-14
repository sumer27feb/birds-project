import { useState } from "react";
import Navbar from "./components/Navbar";
import DragDropFiles from "./components/DragDropFiles";
import Results from "./components/Results";
import Footer from "./components/Footer";

function App() {
  const [result, setResult] = useState(null);

  const handleResult = (apiResult) => {
    setResult(apiResult);
  };

  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-green-200 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]">
          <Navbar />
          <DragDropFiles
            onResult={handleResult}
            onCancel={() => setResult(null)}
          />
          <Results result={result} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
