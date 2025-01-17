import type { MDXComponents } from 'mdx/types'
import slugify from 'slugify'
import { HashIcon } from 'lucide-react'
import Link from 'next/link'
import { Codeblock } from './components/Codeblock'

const getHeadlineId = (children: React.ReactNode) => {
  return children ? `${slugify(children.toString(), { strict: true, lower: true })}` : ''
}

const hashClass =
  'text-grayAlpha-600 transition-all opacity-0 group-hover:opacity-100 absolute -left-5 pr-1 top-0 bottom-0 m-auto w-5 h-4'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: (props) => (
      <Codeblock>
        <pre className="hljs">{props.children}</pre>
      </Codeblock>
    ),
    code: (props) => <code {...props} />,
    h1: ({ children, ...props }) => {
      const id = getHeadlineId(children?.toString())
      return (
        <h1 className="group relative" {...props} id={id}>
          <a className={hashClass} href={`#${id}`}>
            <HashIcon className="w-full h-full" />
          </a>
          {children}{' '}
        </h1>
      )
    },
    h2: ({ children, ...props }) => {
      const id = getHeadlineId(children?.toString())
      return (
        <h2 className="group relative" {...props} id={id}>
          <a className={hashClass} href={`#${id}`}>
            <HashIcon className="w-full h-full" />
          </a>
          {children}{' '}
        </h2>
      )
    },
    h3: ({ children, ...props }) => {
      const id = getHeadlineId(children?.toString())
      return (
        <h3 className="group relative" {...props} id={id}>
          <a className={hashClass} href={`#${id}`}>
            <HashIcon className="w-full h-full" />
          </a>
          {children}{' '}
        </h3>
      )
    },
    h4: ({ children, ...props }) => {
      const id = getHeadlineId(children?.toString())
      return (
        <h4 className="group relative" {...props} id={id}>
          <a className={hashClass} href={`#${id}`}>
            <HashIcon className="w-full h-full" />
          </a>
          {children}{' '}
        </h4>
      )
    },
    h5: ({ children, ...props }) => {
      const id = getHeadlineId(children?.toString())
      return (
        <h5 className="group relative" {...props} id={id}>
          <a className={hashClass} href={`#${id}`}>
            <HashIcon className="w-full h-full" />
          </a>
          {children}{' '}
        </h5>
      )
    },
    h6: ({ children, ...props }) => {
      const id = getHeadlineId(children?.toString())
      return (
        <h6 className="group relative" {...props} id={id}>
          <a className={hashClass} href={`#${id}`}>
            <HashIcon className="w-full h-full" />
          </a>
          {children}{' '}
        </h6>
      )
    },
    table: (props) => (
      <div className="w-full overflow-auto my-12 first:mt-0 last:mb-0">
        <table {...props} className="w-full" />
      </div>
    ),
    a: (props) => {
      const isExternal = props.href?.startsWith('http')

      // @ts-ignore
      return <Link {...props} target={isExternal ? '_blank' : props.target} />
    },
  }
}
