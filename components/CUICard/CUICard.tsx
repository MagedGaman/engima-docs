import React, { HTMLAttributes } from 'react'

type CardComponent = React.FunctionComponent<HTMLAttributes<HTMLDivElement>> & {
    Header: React.FunctionComponent<HTMLAttributes<HTMLDivElement>>
    Body: React.FunctionComponent<HTMLAttributes<HTMLDivElement>>
    Footer: React.FunctionComponent<HTMLAttributes<HTMLDivElement>>
}

const CUICard: CardComponent = ({
                                    children,
                                    className,
                                    ...props
                                }): JSX.Element => (
        <div
            className={`cui-card ${className || ''}`}
            {...props}>
            {children}
        </div>
)

const Header = ({
                    children,
                    className,
                    ...props
                }: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`cui-card-header ${className || ''}`}
        {...props}>
        {children}
    </div>
)

CUICard.Header = Header

const Body = ({
                  children,
                  className,
                  ...props
              }: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`cui-card-body ${className || ''}`}
        {...props}>
        {children}
    </div>
)
CUICard.Body = Body

const Footer = ({
                    children,
                    className,
                    ...props
                }: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`cui-card-footer ${className || ''}`}
        {...props}>
        {children}
    </div>
)
CUICard.Footer = Footer

export default CUICard