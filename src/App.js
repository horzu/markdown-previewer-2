import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

  const [text, setText] = useState(placeholder)

  const handleChange = e =>{
    setText(e.target.value)
  }

  const marked= require('marked');

  const markdown = {__html: marked(text, {breaks: true})}

  return (
    <div className="App">
      <h2 className="text-center">Convert Your Markdown</h2>
        <div className="row">
          <div className="col-6">
            <h3 className="text-center">Enter Your Markdown Here</h3>
            <textarea name="editor" id="editor" value={text} onChange={handleChange}></textarea>
          </div>
          <div className="col-6">
            <h3 className="text-center">Preview</h3>
            <div className="preview rounded" id="preview" dangerouslySetInnerHTML={markdown}>
              
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
