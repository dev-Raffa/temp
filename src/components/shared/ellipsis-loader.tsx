export function EllipsisLoader() {
  return (
    <>
      <div className="w-full flex justify-center items-center text-white">
        <svg className="w-6 h-6" viewBox="0 0 120 30" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <circle cx="15" cy="15" r="15" className="animate-ellipsis-1">
            <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" />
            <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
          </circle>
          <circle cx="60" cy="15" r="9" fillOpacity="0.3" className="animate-ellipsis-2">
            <animate attributeName="r" from="9" to="9" begin="0s" dur="0.8s" values="9;15;9" calcMode="linear" repeatCount="indefinite" />
            <animate attributeName="fill-opacity" from="0.5" to="0.5" begin="0s" dur="0.8s" values=".5;1;.5" calcMode="linear" repeatCount="indefinite" />
          </circle>
          <circle cx="105" cy="15" r="15" className="animate-ellipsis-3">
            <animate attributeName="r" from="15" to="15" begin="0s" dur="0.8s" values="15;9;15" calcMode="linear" repeatCount="indefinite" />
            <animate attributeName="fill-opacity" from="1" to="1" begin="0s" dur="0.8s" values="1;.5;1" calcMode="linear" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <style jsx>
        {`
        @keyframes ellipsis1 {
          0% { transform: scale(0); }
          25% { transform: scale(1); }
          100% { transform: scale(1); }
        }
        @keyframes ellipsis2 {
          0% { transform: scale(0); }
          25% { transform: scale(0); }
          50% { transform: scale(1); }
          100% { transform: scale(1); }
        }
        @keyframes ellipsis3 {
          0% { transform: scale(0); }
          50% { transform: scale(0); }
          75% { transform: scale(1); }
          100% { transform: scale(1); }
        }
        .animate-ellipsis-1 {
          animation: ellipsis1 1.5s infinite;
        }
        .animate-ellipsis-2 {
          animation: ellipsis2 1.5s infinite;
        }
        .animate-ellipsis-3 {
          animation: ellipsis3 1.5s infinite;
        }
      `}
      </style>
    </>
  )
}
