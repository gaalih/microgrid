import { classNames } from '../lib/utils'

type CellProps = {
  lines?: ('top' | 'right' | 'bottom' | 'left')[]
  className?: string
}

function Cell({
  lines,
  className,
  children,
}: React.PropsWithChildren<CellProps>) {
  return (
    <div
      className={classNames([
        'relative flex h-48 w-40 shrink-0 items-center justify-center',
        className ?? '',
      ])}
    >
      {lines?.map((line, index) => {
        switch (line) {
          case 'top':
            return (
              <div
                className="absolute right-1/2 top-0 h-1/2 w-[2px] bg-gray-400"
                key={index}
              />
            )
          case 'right':
            return (
              <div
                className="absolute top-1/2 right-0 h-[2px] w-1/2 bg-gray-400"
                key={index}
              />
            )
          case 'bottom':
            return (
              <div
                className="absolute right-1/2 bottom-0 h-1/2 w-[2px] bg-gray-400"
                key={index}
              />
            )
          case 'left':
            return (
              <div
                className="absolute top-1/2 left-0 h-[2px] w-1/2 bg-gray-400"
                key={index}
              />
            )
        }
      })}
      {children}
    </div>
  )
}

export default Cell
