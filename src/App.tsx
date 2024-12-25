import Footer from "./components/Footer";
import Header from "./components/Header";
import Timer from "./features/timer/Timer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-grow justify-center items-center">
        <Timer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
