import { useMemo } from "react";
import { usePersonStore } from "../usePersonStore";

export default function GraphView() {
  const persons = usePersonStore((s) => s.persons);

  const nodes = useMemo(() => {
    const angleStep = (2 * Math.PI) / (persons.length || 1);
    return persons.map((p, i) => ({
      ...p,
      x: 300 + 180 * Math.cos(i * angleStep),
      y: 250 + 180 * Math.sin(i * angleStep),
    }));
  }, [persons]);

  const findNode = (id: number) => nodes.find((n) => n.id === id);

  if (persons.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-full text-gray-400">
        No valid person objects found.
      </div>
    );
  }

  return (
    <svg viewBox="0 0 600 500" className="w-full h-full">
      {nodes.map((p) =>
        p.relations.map((r, i) => {
          const target = findNode(r.id);
          if (!target) return null;

          const midX = (p.x + target.x) / 2;
          const midY = (p.y + target.y) / 2;

          const dx = target.x - p.x;
          const dy = target.y - p.y;
          const len = Math.sqrt(dx * dx + dy * dy);
          const offset = 12;
          const ox = (-dy / len) * offset;
          const oy = (dx / len) * offset;

          return (
            <g key={`${p.id}-${r.id}-${i}`}>
              <line
                x1={p.x}
                y1={p.y}
                x2={target.x}
                y2={target.y}
                stroke="#aaa"
                strokeWidth={1.5}
              />
              <text
                x={midX + ox}
                y={midY + oy}
                textAnchor="middle"
                fontSize="8"
                fill="#333"
                fontWeight="500"
              >
                {r.relation}
              </text>
            </g>
          );
        })
      )}

      {nodes.map((p) => {
        const radius = Math.max(10, (p.age / 2) * 2);
        return (
          <g key={p.id}>
            <circle
              cx={p.x}
              cy={p.y}
              r={radius}
              fill="#fff"
              stroke="#222"
              strokeWidth="1.5"
            />

            <text
              x={p.x}
              y={p.y}
              textAnchor="middle"
              fontSize="5"
              fontWeight="600"
              fill="#111"
            >
              {p.name}
            </text>

            <text
              x={p.x}
              y={p.y + 10}
              textAnchor="middle"
              fontSize="5"
              fill="#555"
            >
              Age {p.age}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
