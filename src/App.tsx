import Timer from "./app/Timer";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
