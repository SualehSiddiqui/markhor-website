import * as React from "react"

function LineSvg(props) {
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
        d="M25.039 16.795h-.016a4.87 4.87 0 00-4.87 4.87v51.621a4.87 4.87 0 004.87 4.87h.016a4.87 4.87 0 004.87-4.87V21.665a4.87 4.87 0 00-4.87-4.87zM43.007 16.795h-.016a4.87 4.87 0 00-4.87 4.87v51.621a4.87 4.87 0 004.87 4.87h.016a4.87 4.87 0 004.87-4.87V21.665a4.87 4.87 0 00-4.87-4.87zM60.958 16.795h-.016a4.87 4.87 0 00-4.87 4.87v51.621a4.87 4.87 0 004.87 4.87h.016a4.87 4.87 0 004.87-4.87V21.665a4.87 4.87 0 00-4.87-4.87z"
        stroke="#7D7D82"
        strokeWidth={1.13}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.039 35.438a3.263 3.263 0 100-6.525 3.263 3.263 0 000 6.525z"
        stroke="#7D7D82"
        strokeWidth={1.13}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M60.96 44.599a3.262 3.262 0 100-6.525 3.262 3.262 0 000 6.525zM42.991 66.198a3.262 3.262 0 100-6.525 3.262 3.262 0 000 6.525z"
        fill="#000"
      />
      <path
        d="M41.786 80.165a25.977 25.977 0 0018.45 7.634c14.4 0 26.084-11.684 26.084-26.084 0-11.33-7.216-20.973-17.309-24.573M16.955 49.452H9.739a6.53 6.53 0 01-6.525-6.525V8.132a6.53 6.53 0 016.525-6.525h34.794a6.53 6.53 0 016.526 6.525v5.898"
        stroke="#7D7D82"
        strokeWidth={1.13}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default LineSvg;
