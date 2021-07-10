export default function Slide({ children, active }) {
  return (
    <div
      className={`flex items-center justify-center flex-col transform transition-all ease-in-out duration-500 ${
        active ? "opacity-1" : "opacity-0 absolute"
      }`}
    >
      {children}
    </div>
  );
}
