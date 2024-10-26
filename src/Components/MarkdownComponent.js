import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';



const MarkdownComponent = ({markdownContent}) => {

    function copyText(toCopy){
        navigator.clipboard.writeText(toCopy)
        .then(() => {
            alert("Text copied to clipboard: ");
        })
      }


    return (

        <div className="prose lg:prose-xl mx-auto">
            <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        const codeString = String(children).replace(/\n$/, '');
                        return !inline && match ? (
                            <div className='relative'>
                                <button   className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition" onClick={()=>copyText(codeString)}>
                                    Copy
                                </button>
                            <SyntaxHighlighter style={solarizedlight} language={match[1]} PreTag="div" {...props}>
                                {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                            </div>
                        ) : (
                            <code className={className} {...props}>
                                {children}
                            </code>
                        );
                    }
                }}
            >
                {markdownContent}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownComponent;