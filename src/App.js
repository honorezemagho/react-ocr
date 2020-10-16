import React from 'react';
import './App.css';
import Dropzone from 'react-dropzone-uploader';


function App () {

 const getUploadParams = () => {
    return {
        url: 'https://httpbin.org/post'
    }
}

 const handleChangeStatus = ({
    meta
}, status) => {
    if (status === 'headers_received') {
      alert("Uploaded")
    } else if (status === 'aborted') {
      alert("Something went wrong")
    }
}


    return (
      <React.Fragment >

        <nav className = "navbar navbar-light bg-light justify-content-center mt-3">
            <a className = "navbar-brand" href = "/" > React OCR </a><br/>
            <p> Optical Character Recognition with React and Tesseract.js </p> 
        </nav>


        <Dropzone 
        getUploadParams = {
         getUploadParams
      }
      onChangeStatus = {
          handleChangeStatus
      }
      maxFiles = {
          1
      }
      multiple = {
          false
      }
      canCancel = {
          false
      }
        inputContent = "Drop A File"
        styles = {
            {
                dropzoneActive: {
                    borderColor: 'green'
                },
            }
        }
        /> 
      <div className = "container text-center pt-5" >
        <div id="toast" ></div>  
        </div> 

</React.Fragment>
    )
};

export default App;
