import { useId } from 'react'

function RobotIllustration({ animated = false, compact = false }) {
  const id = useId()
  return (
    <svg
      className={`robot-illustration ${animated ? 'is-animated' : ''}`}
      viewBox="0 0 540 450"
      fill="none"
      role="img"
      aria-label="Technical illustration of an articulated robot arm and its motion path"
    >
      <defs>
        <pattern
          id={`${id}-grid`}
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 30 0 L 0 0 0 30"
            stroke="currentColor"
            strokeWidth=".5"
            opacity=".1"
          />
        </pattern>
        <linearGradient
          id={`${id}-arm`}
          x1="180"
          y1="130"
          x2="340"
          y2="350"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#f28358" />
          <stop offset="1" stopColor="#c64c28" />
        </linearGradient>
      </defs>
      <rect width="540" height="450" fill={`url(#${id}-grid)`} />
      <ellipse
        cx="279"
        cy="363"
        rx="170"
        ry="48"
        fill="#e5e2d8"
        opacity=".55"
      />
      <path d="M64 363H488M280 405V77" stroke="#bebeb2" strokeDasharray="3 5" />
      <circle
        cx="280"
        cy="234"
        r="155"
        stroke="#a3aa9e"
        strokeDasharray="3 7"
        opacity=".65"
      />
      <path
        d="M125 234a155 155 0 0 1 255-118m-9-1 10 1-1-10"
        stroke="#ba4d2e"
        strokeWidth="1.3"
      />
      <path
        d="m239 326 72-11 47 28-73 15-46-32Z"
        fill="#384744"
        stroke="#243532"
        strokeWidth="2"
      />
      <path d="m239 326 46 32v23l-46-33v-22Z" fill="#243532" />
      <path d="m285 358 73-15v22l-73 16v-23Z" fill="#56625b" />
      <path
        d="M265 300v31c0 15 58 15 58 0v-31"
        fill="#c9cbbb"
        stroke="#243532"
        strokeWidth="2"
      />
      <ellipse
        cx="294"
        cy="300"
        rx="29"
        ry="13"
        fill="#e9e8df"
        stroke="#243532"
        strokeWidth="2"
      />
      <g className="arm-moving">
        <path
          d="m282 308-76-104 29-29 77 120"
          fill={`url(#${id}-arm)`}
          stroke="#763e2b"
          strokeWidth="2"
        />
        <path d="m294 303-70-112" stroke="#f7ac84" strokeWidth="3" />
        <path
          d="m206 177 95-89 26 32-91 89"
          fill={`url(#${id}-arm)`}
          stroke="#763e2b"
          strokeWidth="2"
        />
        <path d="m224 182 86-81" stroke="#f7ac84" strokeWidth="3" />
        <circle
          cx="222"
          cy="192"
          r="29"
          fill="#d4d6c9"
          stroke="#243532"
          strokeWidth="2"
        />
        <circle cx="222" cy="192" r="18" fill="#384744" />
        <circle cx="222" cy="192" r="10" fill="#8a9387" />
        <circle cx="222" cy="192" r="4" fill="#d9ddcf" />
        <path
          d="m314 91 68 48-19 26-70-46"
          fill="#d8663e"
          stroke="#763e2b"
          strokeWidth="2"
        />
        <path d="m320 103 49 36" stroke="#f7ac84" strokeWidth="3" />
        <circle
          cx="309"
          cy="105"
          r="23"
          fill="#d4d6c9"
          stroke="#243532"
          strokeWidth="2"
        />
        <circle cx="309" cy="105" r="13" fill="#384744" />
        <circle cx="309" cy="105" r="5" fill="#b5bcae" />
        <path
          d="m370 143 19 14-10 15-20-14"
          fill="#344441"
          stroke="#243532"
          strokeWidth="2"
        />
        <path
          d="m385 158 19 2 12 18-8 6-11-15-12-1M379 169l5 20 20 13 6-7-16-12-4-17"
          fill="#aab2a4"
          stroke="#243532"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M291 283c-43-49-73-67-75-89-1-23 48-71 78-86"
          stroke="#243532"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle
          cx="294"
          cy="299"
          r="20"
          fill="#d4d6c9"
          stroke="#243532"
          strokeWidth="2"
        />
        <circle cx="294" cy="299" r="11" fill="#384744" />
        <path
          d="m401 184 30-17h44M216 192l-61-34H96"
          stroke="#7f887b"
          strokeWidth=".8"
        />
        <circle cx="401" cy="184" r="3" fill="#ba4d2e" />
        <circle cx="216" cy="192" r="3" fill="#ba4d2e" />
      </g>
      {!compact && (
        <g fill="#616c60" fontFamily="monospace" fontSize="9">
          <text x="408" y="158">
            END EFFECTOR
          </text>
          <text x="66" y="150">
            JOINT CONTROL
          </text>
          <text x="315" y="408">
            BASE FRAME
          </text>
          <text x="70" y="382">
            X
          </text>
          <text x="287" y="75">
            Z
          </text>
          <text x="80" y="60" fill="#ac4c30">
            θ · MOTION STUDY
          </text>
        </g>
      )}
      <path
        d="m73 346 35-11m-35 11 1-36m-1 36 25 15"
        stroke="#596e59"
        strokeWidth="1.5"
      />
      <circle cx="73" cy="346" r="3" fill="#596e59" />
    </svg>
  )
}

export default function ProjectArtwork({ type, image, alt = 'Project image' }) {
  const mapId = useId()
  if (image) {
    return (
      <img
        className="project-image"
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    )
  }
  if (type === 'arm') return <RobotIllustration compact />
  if (type === 'map')
    return (
      <svg
        viewBox="0 0 500 300"
        fill="none"
        role="img"
        aria-label="Illustrated autonomous robot navigation map"
      >
        <defs>
          <pattern
            id={mapId}
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <path d="M22 0H0V22" stroke="#61775e" opacity=".13" />
          </pattern>
        </defs>
        <rect width="500" height="300" fill={`url(#${mapId})`} />
        <path
          d="M80 40H280V92H420V250H270V196H80V40Z"
          stroke="#66765f"
          strokeWidth="10"
        />
        <path
          d="M170 40V112M340 250V177M80 150H170"
          stroke="#66765f"
          strokeWidth="8"
        />
        <path
          d="M121 93v69c0 10 9 15 20 15h77c13 0 17-10 17-20v-23c0-12 9-16 20-16h103v88"
          stroke="#d7663e"
          strokeWidth="3"
          strokeDasharray="6 5"
        />
        <circle cx="358" cy="206" r="15" stroke="#d7663e" />
        <circle cx="358" cy="206" r="5" fill="#d7663e" />
        <circle
          cx="121"
          cy="93"
          r="43"
          fill="#d6decc"
          stroke="#8b9e7d"
          strokeDasharray="3 5"
        />
        <rect
          x="101"
          y="72"
          width="40"
          height="42"
          rx="10"
          fill="#faf8ef"
          stroke="#334b38"
          strokeWidth="2"
        />
        <path d="m114 96 7-13 7 13" stroke="#d7663e" strokeWidth="2" />
        <path d="M97 80v23M145 80v23" stroke="#334b38" strokeWidth="5" />
        <circle cx="121" cy="93" r="62" stroke="#8b9e7d" opacity=".4" />
        <text
          x="80"
          y="283"
          fontFamily="monospace"
          fontSize="10"
          fill="#52694b"
        >
          SLAM / MAPPING / NAVIGATION
        </text>
      </svg>
    )
  if (type === 'vision')
    return (
      <svg
        viewBox="0 0 500 300"
        fill="none"
        role="img"
        aria-label="Illustration of neural network connections"
      >
        <g stroke="#6e759a" strokeWidth="1" opacity=".35">
          {[70, 150, 230].flatMap((y, i) =>
            [70, 130, 190, 250].map((z, j) => (
              <path key={`${i}-${j}`} d={`M130 ${y} 250 ${z} 370 ${y}`} />
            )),
          )}
        </g>
        {[130, 250, 370].map((x, j) =>
          (j === 1 ? [70, 130, 190, 250] : [70, 150, 230]).map((y, i) => (
            <g key={`${j}-${i}`}>
              <circle cx={x} cy={y} r="15" fill="#f1f0f7" stroke="#7778a3" />
              <circle
                cx={x}
                cy={y}
                r="5"
                fill={j === 1 ? '#c16446' : '#6e759a'}
              />
            </g>
          )),
        )}
        <text
          x="37"
          y="283"
          fontFamily="monospace"
          fontSize="10"
          fill="#626581"
        >
          INPUT → FEATURES → PREDICTION
        </text>
      </svg>
    )
  return (
    <svg
      viewBox="0 0 500 300"
      fill="none"
      role="img"
      aria-label="Illustrated embedded circuit board"
    >
      <path
        d="M90 64h317v174H90z"
        fill="#537362"
        stroke="#334d3e"
        strokeWidth="2"
      />
      <g stroke="#a5b69a" opacity=".7" strokeWidth="2">
        <path d="M100 96h55v43h48M104 112h33v48h66M103 204h52v-24h48M300 138h45V80M300 159h76V96M300 182h45v36M250 102V79h44M250 214v12h-68" />
      </g>
      <rect
        x="199"
        y="103"
        width="105"
        height="108"
        rx="4"
        fill="#293e32"
        stroke="#a9b39d"
      />
      <rect x="213" y="117" width="77" height="80" rx="2" fill="#344a3b" />
      {Array.from({ length: 7 }, (_, i) => (
        <g key={i} stroke="#d5d2bc" strokeWidth="3">
          <path
            d={`M${213 + i * 12} 94v10M${213 + i * 12} 211v10M190 ${118 + i * 12}h10M304 ${118 + i * 12}h10`}
          />
        </g>
      ))}
      <text x="225" y="152" fontFamily="monospace" fontSize="13" fill="#e3e5d6">
        {type === 'switch' ? 'CTRL' : 'MCU'}
      </text>
      <text x="226" y="174" fontFamily="monospace" fontSize="9" fill="#9db39b">
        {type === 'switch' ? 'PRESENCE' : 'MEDIBOX'}
      </text>
      <rect x="105" y="78" width="30" height="43" rx="2" fill="#d8d8c7" />
      <rect x="364" y="179" width="25" height="42" fill="#243b2c" />
      <circle cx="376" cy="91" r="6" fill="#d78a60" />
      <circle cx="376" cy="112" r="5" fill="#b5cb84" />
      <g fill="#d6d6bc">
        {[104, 393].flatMap((x) =>
          [76, 226].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="4" />
          )),
        )}
      </g>
      <text x="90" y="275" fontFamily="monospace" fontSize="10" fill="#52694b">
        {type === 'switch'
          ? 'SENSE → CONTROL → ACTUATE'
          : 'FIRMWARE / SENSORS / REMINDERS'}
      </text>
    </svg>
  )
}
