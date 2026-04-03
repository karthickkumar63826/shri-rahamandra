export function Rupee({ className = "" }: { className?: string }) {
  return (
    <span
      className={className}
      style={{ fontFamily: "'Arial', 'Helvetica Neue', sans-serif", fontStyle: "normal" }}
    >
      ₹
    </span>
  );
}
