import "./App.css";
import AppRoute from "./routes/AppRoute";

function App() {
  const textStyle = {
    fontFamily: 'Swiss, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif',
  };

  return (
    <main className="App" style={textStyle}>

      <AppRoute />
    </main>
  );
}

export default App;
