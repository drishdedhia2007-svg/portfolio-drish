export default function TechnicalSpline({ className = "", variant = "wide" }: { className?: string; variant?: "wide" | "short" }) {
  return <svg className={`technical-spline ${className}`} viewBox="0 0 960 360" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
    <path className="spline-guide" d="M0 259H165M802 64H960M709 270H960M170 0V360M802 0V360" />
    <path className="spline-curve spline-curve-one" d={variant === "wide" ? "M-20 286 C136 278 189 90 365 96 S572 310 747 225 S859 43 984 73" : "M-30 210 C173 163 218 318 390 257 S560 58 744 96 S860 247 990 161"} />
    <path className="spline-curve spline-curve-two" d={variant === "wide" ? "M-20 307 C146 296 198 113 374 119 S580 332 757 249 S872 67 984 97" : "M-30 235 C171 188 226 343 402 280 S574 79 758 122 S870 269 990 187"} />
    <path className="spline-curve spline-curve-three" d={variant === "wide" ? "M-20 328 C155 314 209 137 385 143 S590 352 767 273 S880 91 984 121" : "M-30 260 C171 212 238 366 414 303 S588 101 772 148 S879 291 990 213"} />
    <path className="spline-ticks" d="M159 249v20m-10-10h20M359 82v28m-14-14h28M798 52v24m-12-12h24M702 260v20m-10-10h20" />
    <path className="spline-nodes" d="M161 257h5v5h-5zM362 93h6v6h-6zM799 61h6v6h-6z" />
  </svg>;
}
