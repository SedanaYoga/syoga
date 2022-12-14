import React, { forwardRef, HTMLProps } from 'react'
import { selectButtonColor } from '../utils/components.utils'

type Props = HTMLProps<HTMLAnchorElement> & {
  color: 'light' | 'mid' | 'dark'
}

const CButton = forwardRef<HTMLAnchorElement, Props>(
  ({ children, color, className, onClick, href }, ref) => {
    const selectedColor = selectButtonColor(color)
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className={`${className} bg-bwport-${selectedColor} text-sm text-center text-white font-normal px-[2rem] py-3`}
      >
        {children}
      </a>
    )
  },
)

CButton.displayName = 'CButton'
CButton.defaultProps = {
  color: 'light',
}

export default CButton
