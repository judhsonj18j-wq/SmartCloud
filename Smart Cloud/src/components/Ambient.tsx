import { useMousePosition } from "../hooks/useReveal";

/** Ambient animated background: drifting aurora blobs + parallax grid. */
export default function Ambient() {
  const { x, y } = useMousePosition();
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink-950" />
      <div
        className="absolute -left-40 top-[-10%] h-[42rem] w-[42rem] rounded-full opacity-40 blur-[120px] animate-drift"
        style={{
          background: "radial-gradient(circle at 30% 30%, #8b5cf6, transparent 65%)",
          transform: `translate(${x * 40}px, ${y * 30}px)`,
        }}
      />
      <div
        className="absolute right-[-15%] top-[20%] h-[38rem] w-[38rem] rounded-full opacity-35 blur-[130px] animate-drift"
        style={{
          background: "radial-gradient(circle at 60% 40%, #38bdf8, transparent 65%)",
          animationDelay: "-6s",
          transform: `translate(${-x * 40}px, ${-y * 30}px)`,
        }}
      />
      <div
        className="absolute bottom-[-20%] left-1/3 h-[34rem] w-[34rem] rounded-full opacity-25 blur-[130px] animate-drift"
        style={{
          background: "radial-gradient(circle at 50% 50%, #fb7bb0, transparent 65%)",
          animationDelay: "-12s",
        }}
      />
      <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
    </div>
  );
}
