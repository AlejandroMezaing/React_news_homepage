import { ArticlesContainer } from "./components/ArticlesContainer";
import { MainArticule } from "./components/MainArticule";
import { NewContainer } from "./components/NewContainer";
import Header from "./components/header";
function App() {
  return (
    <main className="px-4 pt-6">
      <Header />
      <div className="lg:flex lg:gap-8">
        <MainArticule />
        <NewContainer />
      </div>
      <ArticlesContainer />
    </main>
  );
}

export default App;
