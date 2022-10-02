import React, { FC, HTMLAttributes, ReactNode } from 'react'

type Props = {
  className?: string
  type?: 'submit' | 'reset' | 'button'
  children: ReactNode
}

type ComponentHTML = FC<Props> & HTMLAttributes<HTMLButtonElement>

const CButton: ComponentHTML = ({ children, type, className }: Props) => {
  return (
    <button
      type={type}
      className={`text-sm text-white font-normal bg-bwport-200 px-[2rem] py-3 ${className}`}
    >
      {children}
    </button>
  )
}

CButton.defaultProps = {
  type: 'button',
}

export default CButton
