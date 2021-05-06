/* CODE BLOCK - for markdown */
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={dracula}
      wrapLines={true}
      showLineNumbers={true}
    >
      {value}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
