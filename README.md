# React-Ocr
Reconnaissance de Charactères Optiques utilisant React et Tesseract.js

## Introdution
Selon **Wikipédia** La reconnaissance optique de caractères (ROC), en anglais optical character recognition (OCR), ou océrisation, désigne les procédés informatiques pour la traduction d'images de textes imprimés ou dactylographiés en fichiers de texte.

Ajourd'hui nous allons l'implémenter en utilisant [React](https://reactjs.org) et[Tesseract.js](https://tesseract.projectnaptha.com).

### `Prérequis`

- [Nodejs](https://nodejs.org/) version **8.10** or Supérieure.

### `Installation`

A l'aide de [create-react-app](https://create-react-app.dev/docs/getting-started) nous allons créer un nouveau Projet React.

````
npx create-react-app react-ocr
cd react-ocr
npm start
````

Pour l'interface Utilisateur, nous allons utiliser [Bootstrap](https://getbootstrap.com) et pour l'upload le packet npm [**React Dropzone Uploader**](https://react-dropzone-uploader.js.org/).

```
npm install --save bootstrap react-dropzone-uploader
```
et importer les fichier de style dans le fichier `src/index.js` 

```
import 'bootstrap/dist/css/bootstrap.css';
import 'react-dropzone-uploader/dist/styles.css';
```
ensuite dans le fichier src/App.js nous allons importer 
```
import Dropzone from 'react-dropzone-uploader';
``` 

et remplacer notre component app pour etre comme celui ci-dessous
``````
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
``````

L'application dans le navigateur ressemblera à ceci.
![basic-ui](https://dev-to-uploads.s3.amazonaws.com/i/behr31s6ct43ljzd06xo.png)
