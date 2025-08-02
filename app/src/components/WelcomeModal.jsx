import { useEffect, useState } from "react";

export default function WelcomeModal() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cyan-900">
      <div
        className="bg-white rounded-2xl shadow-lg p-6 text-center cursor-pointer select-none"
        onClick={() => setOpen(false)}
      >
        <p className="text-lg text-black font-medium">clique em mim 💚</p>
      </div>
    </div>
  );
}
