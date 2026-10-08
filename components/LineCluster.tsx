type LineClusterKind = "project" | "fabrication" | "inspection" | "writing";

const shapes: Record<LineClusterKind, { viewBox: string; paths: [string, string, string] }> = {
  project: {
    viewBox: "0 0 420 120",
    paths: [
      "M-20 96 C70 90 106 14 198 35 S310 125 440 31",
      "M-20 107 C75 101 113 28 202 48 S314 138 440 45",
      "M-20 118 C80 112 118 42 206 61 S318 151 440 59",
    ],
  },
  fabrication: {
    viewBox: "0 0 420 120",
    paths: [
      "M-20 95 C75 83 113 18 205 31 S313 111 440 25",
      "M-20 106 C80 94 120 32 210 45 S319 124 440 39",
      "M-20 117 C85 105 127 46 215 59 S325 137 440 53",
    ],
  },
  inspection: {
    viewBox: "0 0 420 120",
    paths: [
      "M-20 23 C87 24 123 102 213 83 S322 10 440 75",
      "M-20 36 C83 37 118 115 208 96 S317 24 440 89",
      "M-20 49 C79 50 113 128 203 109 S312 38 440 103",
    ],
  },
  writing: {
    viewBox: "0 0 900 190",
    paths: [
      "M-20 137 C168 157 260 21 443 58 S657 160 920 28",
      "M-20 152 C175 172 268 37 450 74 S665 176 920 44",
      "M-20 167 C182 187 276 53 457 90 S673 192 920 60",
    ],
  },
};

export default function LineCluster({ kind, className }: { kind: LineClusterKind; className: string }) {
  const shape = shapes[kind];

  return (
    <div className={`line-cluster-wrap ${className}`} aria-hidden="true">
      <svg className="line-cluster" viewBox={shape.viewBox} fill="none" preserveAspectRatio="none" focusable="false">
        {shape.paths.map((path) => <path key={path} d={path} />)}
      </svg>
    </div>
  );
}
