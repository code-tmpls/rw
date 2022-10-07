import React, { useEffect } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import HtmlToReactParser from 'html-to-react';
import htmlToFormattedText from "html-to-formatted-text";
import hljs from 'highlight.js';
import './dracula.css';

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

export const HtmlStringToReactJSXConverter = ( code, lang, lines )=>{
  const htmlToReactParser = new HtmlToReactParser.Parser();
  if(lines!==undefined){
   code = SplitConfiguration( code, lines ).join('');
  }
  if(lang==undefined){ lang='html'; }
  const html = hljs.highlight(code, {language: lang }).value;
  return htmlToReactParser.parse(html);
};

export const ReactJSXToHtmlStringConverter = ( component )=>{
  return (renderToStaticMarkup( component ));
};

export const ReactJSXToOutputViewer = ( component )=>{
  return (htmlToFormattedText(renderToStaticMarkup( component )));
};


export const Highlight = (props) => {
 //  lines={['1','3', '5T8']}
 
 useEffect(()=>{
    hljs.configure({ 'languages': ['html','javascript'], 'ignoreUnescapedHTML': true });
    hljs.highlightAll();    
 },[]);


  return (<pre><code className={"lang-"+props.lang} {...props}>
    {HtmlStringToReactJSXConverter(props.content, props.lang, props.lines)}
    </code></pre>);
};
