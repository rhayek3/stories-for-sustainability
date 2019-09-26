// Access-Control-Allow-Origin: *
import React from 'react';
import logo from '../../logo2.png';
import { compose } from 'recompose';
import cover from '../../images/cover.jpg';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import {Document, Page, pdfjs} from 'react-pdf';

// import thing from "http://www.pdf995.com/samples/pdf.pdf";
import { withAuthorization, withEmailVerification } from '../Session';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
var PDFImage = require("pdf-image").PDFImage;
 
var pdfImage = new PDFImage("/pdf.pdf", {combinedImage: true});
pdfImage.convertFile().then(function (imagePaths) {
    "/tmp/slide-1.png"
});
function onErr(error) {
    console.log(error);
}
function onSucc() {
    console.log("SUCCESSSSSSSSSSSSSSSSSS");
}
const Book = () => (
  <div className="Landing-header">
    <h2>Welcome!</h2>
    <div width = "1000px">
        {/* <img src={'/pdf.pdf'}></img> */}
        <Document file = {{data: JSON.parse('/pdf.pdf').data}}onLoadError={onErr} onLoadSuccess={onSucc}>
            <Page pageNumber={1}/>
        </Document>


    </div>
  </div>
);
export default Book;
