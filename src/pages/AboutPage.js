import React, { useState } from 'react'
import Content from '../components/Content'
import { Document, Page, pdfjs } from 'react-pdf'
import Hero from '../components/Hero'
import cv from '../CV-2020.pdf'
import { Spring } from 'react-spring/renderprops';

function AboutPage(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    return (
       
            <div style={{ fontSize: '21px' }}>
                <Hero title={props.title} />


                <Content >

                    <p>Hello, my name is Conor I am a recently graduated software engineer with work experience of delivering high quality code being used by millions of people.</p>
                    <p>I am self motivated and constantly striving to be better in the field of technology. I specialise in Object Orientated Software Development and Mobile Appplication Development</p>
                    <p>I am most profecient with Java and Python. I have also recently been learing React, as you can see here!</p>
                    <p>Currently I am seeking work in the Software Development field, so feel free to contact me!</p>

                    <center><Document file={cv} onLoadSuccess={onDocumentLoadSuccess} >
                        <Page pageNumber={pageNumber} />
                    </Document></center>



                </Content>

            </div>
        
    )
}

export default AboutPage;
