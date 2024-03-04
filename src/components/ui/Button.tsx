interface ButtonProps {
  text: string;
  onClick: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className='px-4 py-2 text-white rounded-md bg-brand hover:brightness-110'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
