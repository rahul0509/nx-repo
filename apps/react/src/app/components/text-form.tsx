import { useState } from 'react';

// https://react.dev/reference/react/hooks
export function TextForm(props: {
  heading: string;
  darkMode: boolean;
  showAlert: (message: string, type: string) => void;
}) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!', 'Success');
  };

  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase!', 'Success');
  };

  const handleClearClick = () => {
    const newText = '';
    setText(newText);
    props.showAlert('Text Cleared!', 'Success');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to Clipboard!', 'Success');
  };
  const handleExtraSpacesClick = () => {
    const newText = text.split(/[ ]+/).join(' ');
    setText(newText);
    props.showAlert('Extra spaces removed!', 'Success');
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };
  const [text, setText] = useState('Enter text here');
  // text = "new text"; // wrong way to change the state
  // setText("new text"); // correct way to change the state
  return (
    <>
      <div className="input-group">
        <span
          className="input-group-text"
          style={{
            backgroundColor: props.darkMode ? 'grey' : 'white',
            color: props.darkMode ? 'white' : 'black',
          }}
        >
          {props.heading}
        </span>
        <textarea
          className="form-control"
          aria-label="With textarea"
          style={{
            backgroundColor: props.darkMode ? 'grey' : 'white',
            color: props.darkMode ? 'white' : 'black',
          }}
          id="myBox"
          rows={8}
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mt-3 ms-3" onClick={handleLowClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mt-3 ms-3" onClick={handleClearClick}>
        Clear Text
      </button>
      <button className="btn btn-primary mt-3 ms-3" onClick={handleCopyClick}>
        Copy Text
      </button>
      <button
        className="btn btn-primary mt-3 ms-3"
        onClick={handleExtraSpacesClick}
      >
        Remove Extra Spaces
      </button>

      <div
        className="container"
        style={{ color: props.darkMode ? 'white' : 'black' }}
      >
        <h2>Your text summary</h2>
        <span>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{' '}
          words and {text.length} characters
        </span>
        <div>
          <h2>Preview</h2>
          <p>{text.length === 0 ? 'No text to preview' : text}</p>
        </div>
      </div>
    </>
  );
}

export default TextForm;
