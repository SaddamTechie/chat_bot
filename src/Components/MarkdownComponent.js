import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedDarkAtom } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import { SiPerplexity } from "react-icons/si";
import { FaCopy, FaShare } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";




const MarkdownComponent = ({markdownContent}) => {

    const [copy,setCopy] = useState('Copy');

    function copyText(toCopy){
        navigator.clipboard.writeText(toCopy)
        .then(() => {
            setCopy('Copied !')
        })
        setTimeout(() => {
            setCopy('Copy');
        }, 1000);
      }


    return (

        <div className="prose-xl lg:prose-xl mx-auto dark:bg-main-dark dark:text-dark-theme-text p-5 shadow-lg">
            <div className='inline-flex'><SiPerplexity/><h3>Answers</h3></div>
            <ReactMarkdown 
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ children }) => <h1 className="dark:text-dark-theme-text text-sm  mb-2">{children}</h1>,
                    h2: ({ children }) => <h2 className="dark:text-dark-theme-text text-sm  mb-2">{children}</h2>,
                    h3: ({ children }) => <h3 className="dark:text-dark-theme-text text-sm  mb-2">{children}</h3>,
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        const codeString = String(children).replace(/\n$/, '');
                        return !inline && match ? (
                            <div className='relative'>
                                <button   className="absolute top-2 right-2  bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition" onClick={()=>copyText(codeString)}>
                                    {copy}
                                </button>
                            <SyntaxHighlighter style={solarizedDarkAtom} language={match[1]} PreTag="div" {...props}>
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
            <div className='flex justify-between text-sm'>
            <span className='items-start flex gap-4'>
            <p className='flex align-middle'><FaShare />Share</p>
            <p className='flex align-middle'><FaRepeat/>Rewrite</p>
            </span>
            <span className='items-end flex gap-4'>
            <FaCopy/>
            <FaEdit/>
            <BsThreeDotsVertical/>
            </span>
            </div>   
        </div>
    );
};

export default MarkdownComponent;