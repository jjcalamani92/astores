import React from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
interface Props {
  text: string
}

export  function MarkdownPreview({text}: Props) {
  return (
    <ReactMarkdown children={text}  remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}/>
  )
}
