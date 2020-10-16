import React, {Component} from 'react';
import './App.css';
import Dropzone from 'react-dropzone-uploader';


class App extends Component {
  render() {
    return (
      <React.Fragment >

        <nav class = "navbar navbar-light bg-light justify-content-center mt-3">
            <a class = "navbar-brand" href = "/" > React OCR </a><br/>
            <p> Optical Character Recognition with React and Tesseract.js </p> 
        </nav>


        <Dropzone 
        inputContent = "Drop A File"
        styles = {
            {
                dropzoneActive: {
                    borderColor: 'green'
                },
            }
        }
        /> 

</React.Fragment>
    )
  }
};

export default App;
