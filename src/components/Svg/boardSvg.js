import * as React from "react"

function BoardSvg(props) {
    return (
        <svg
            width={90}
            height={90}
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M70.284 54.932l-7.345-14.609M22.679 38.796h16.778M42.72 36.997l5.11 2.764-.241-7.89M29.156 50.321h16.762M49.197 48.52l5.094 2.765-.225-7.891M35.616 61.844h16.778M55.657 60.042l5.11 2.765-.225-7.875M80.714 19.077l-20.33 24.316H54.1v-6.637l19.526-23.593c1.72-2.09 4.87-2.25 6.799-.354a4.61 4.61 0 01.305 6.252l-.016.016zM39.04 20.685h11.026a4.847 4.847 0 014.339 2.684l1.768 3.487"
                stroke="#7D7D82"
                strokeWidth={1.13}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M88.845 36.965L54.002 78.67a8.531 8.531 0 01-6.557 3.07H33.897a4.85 4.85 0 01-4.34-2.668L1.852 23.979c-.756-1.511.337-3.279 2.009-3.279h9.289"
                stroke="#7D7D82"
                strokeWidth={1.13}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M80.103 81.722H60.737L75.105 64.51l7.023 13.95c.756 1.494-.337 3.262-2.025 3.262z"
                fill="#000"
            />
            <path
                d="M78.865 36.964h9.98v9.964M26.36 12.39c-.9-1.526-2.894-2.747-4.453-2.747h-1.751c-1.56 0-2.09 1.237-1.19 2.748.9 1.527.37 2.748-1.189 2.748H15.64c-1.56 0-2.09 1.238-1.19 2.748l2.845 4.79c.9 1.526 2.893 2.748 4.452 2.748H39.04c1.559 0 2.089-1.238 1.189-2.748l-2.845-4.79c-.9-1.527-2.893-2.748-4.452-2.748h-2.137c-1.559 0-3.552-1.237-4.452-2.748h.016z"
                stroke="#7D7D82"
                strokeWidth={1.13}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

export default BoardSvg;
