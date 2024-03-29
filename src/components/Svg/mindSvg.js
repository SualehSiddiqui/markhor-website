import * as React from "react"

function MindSvg(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={90}
            height={90}
            viewBox="0 0 90 90"
            fill="none"
            {...props}
        >
            <path
                d="M62.293 53.775h-1.4c-.9 0-1.633.733-1.633 1.633v7.734c0 3.15-2.55 5.717-5.717 5.717H41.576c-2.766 0-5 2.233-5 5v6.65h-24.6V66.941c0-4.733-1.3-9.4-3.933-13.333-3.367-5.034-5.15-11.217-4.617-17.834 1.1-14.016 12.7-25.166 26.75-25.75C44.943 9.408 57.31 20.21 59.193 34.31l4.533 17.633a1.452 1.452 0 01-1.4 1.816l-.033.017z"
                stroke="#7D7D82"
                strokeWidth={1.13}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M28.426 53.775h1.4c.9 0 1.633.733 1.633 1.633v7.734c0 3.15 2.55 5.717 5.717 5.717h11.966c2.767 0 5 2.233 5 5v6.65h24.6V66.941c0-4.733 1.3-9.4 3.934-13.333 3.366-5.034 5.15-11.217 4.616-17.834-1.1-14.016-12.7-25.166-26.75-25.75C45.776 9.408 33.41 20.21 31.526 34.31l-4.534 17.633a1.452 1.452 0 001.4 1.816l.034.017z"
                stroke="#7D7D82"
                strokeWidth={1.13}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M53.893 40.142c0 1.35-1.4 2.55-3.517 3.217-1.2.4-2.65.616-4.183.616s-2.983-.233-4.183-.616c-2.117-.684-3.517-1.867-3.517-3.233h15.4v.016z"
                fill="#000"
                stroke="#000"
                strokeWidth={1.13}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default MindSvg;
