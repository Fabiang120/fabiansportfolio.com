export default function ProjectTag({ className = "" }) {
    return (
        <svg
            viewBox="0 0 500 80"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <text
                x="50%"
                y="60"
                textAnchor="middle"
                fill="white"
                fontSize="60"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontWeight="bold"
                letterSpacing="2"
            >
                &lt;/project&gt;
            </text>
        </svg>
    );
}
