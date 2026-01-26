// Uncomment this line to use CSS modules
import { useState } from 'react';
import About from './components/about';
import Header from './components/header';
import TextForm from './components/text-form';
import Alert from './components/Alert';

export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState<{ message: string; type: string }>({
    message: 'Light mode has been enabled',
    type: 'Success',
  });

  const showAlert = (message: string, type: string) => {
    setAlert({ message: message, type: type });

    setTimeout(() => {
      setAlert({ message: '', type: '' });
    }, 1500);
  };

  const toggleMode = () => {
    setDarkMode(!darkMode);

    if (darkMode === false) {
      document.body.style.backgroundColor = 'grey';
      document.title = 'TextUtils - Dark Mode';
      showAlert('Dark mode has been enabled', 'Success');
    } else {
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode';
      showAlert('Light mode has been enabled', 'Success');
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
      <Alert type={alert.type} message={alert.message} />
      <div className="container mt-3">
        <TextForm
          heading="Enter text to analyze"
          darkMode={darkMode}
          showAlert={showAlert}
        />
      </div>
      {/* <About /> */}
    </div>
  );
}

export default App;
