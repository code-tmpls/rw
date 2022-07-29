import React, { useEffect } from 'react';
import HtmlToReactParser from 'html-to-react';
import hljs from 'highlight.js';
import './dracula.css';

export const Highlight = (props) => {
 //  lines={['1','3', '5T8']}
 useEffect(()=>{
    hljs.configure({ 'languages': ['html','javascript'], 'ignoreUnescapedHTML': true });
    hljs.highlightAll();
    
 },[]);
 const SplitConfiguration = ( content, lines ) =>{
   let returnData = [];
   const range = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min);
   let contents = content.split('\n');
   lines.forEach((line)=>{
     if(line.includes('T')){
         let lineSplitter =  line.split('T');
         range( parseInt( lineSplitter[0] ),  parseInt( lineSplitter[1] ) ).forEach((l)=>{
             returnData.push(contents[l]);
         });
     } else {
         returnData.push(contents[line]);
     }
   });
   return returnData;
  };
 const htmlToReactParser = new HtmlToReactParser.Parser();
  let code = props.content;
  if(props.lines!==undefined){
   code = SplitConfiguration( code, props.lines ).join('');
  }
  const html = hljs.highlight(code, {language: props.lang }).value;
  const reactElement = htmlToReactParser.parse(html);
  return <pre><code className={"lang-"+props.lang} {...props}>{reactElement}</code></pre>
};
