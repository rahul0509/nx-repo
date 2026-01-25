// Uncomment this line to use CSS modules
import { useState } from 'react';
import About from './components/about';
import Header from './components/header';
import TextForm from './components/text-form';

export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkMode);

    if (darkMode === false) {
      document.body.style.backgroundColor = 'grey';
    } else {
      document.body.style.backgroundColor = 'white';
    }
  };
  return (
    <div>
      <Header
        title="TextUtils"
        aboutText="About"
        darkMode={darkMode}
        toggleMode={toggleMode}
      />
      <div className="container mt-3">
        <TextForm heading="Enter text to analyze" darkMode={darkMode} />
      </div>
      {/* <About /> */}
    </div>
  );
}

export default App;
