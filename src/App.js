import "./globals.css";
import Main from "./components/organisms/main";
import Header from "./components/organisms/header";
import Footer from "./components/organisms/footer";

function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
