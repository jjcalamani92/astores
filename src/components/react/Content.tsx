import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import style from 'react-syntax-highlighter/dist/cjs/styles/prism/synthwave84';

interface Props {
  content: string
}

export  function Content({content}: Props) {
  return (
    <ReactMarkdown children={content} components={{
      code({ node, inline, className, children, ...props }) {
        const match = /language-(\w+)/.exec(className || '');
        return !inline && match ? (
          
          <SyntaxHighlighter
            wrapLongLines={true}
            children={String(children).replace(/\n$/, '')}
            style={style as any}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      },
    }} />

  )
}
