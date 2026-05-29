import { Save, SquareX } from "lucide-react";
import React from "react";

type Props = {
  onCancel?: () => void;
  loading?: boolean;
};

const ActionBtn = ({ onCancel }: Props) => {
  return (
    <div className="flex gap-2 mt-4">
      {/* Cancel */}
      <button
        type="button"
        onClick={onCancel}
        className="flex items-center gap-2 px-4 py-2 border rounded bg-black text-white hover:bg-gray-100 hover:text-black transition"
      >
        <SquareX size={18} />
        Cancel
      </button>

      {/* Submit */}
      <button
        type="submit"
        className="flex items-center gap-2 px-5 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-500 transition"
      >
        <Save size={18} />
        Save
      </button>
    </div>
  );
};

export default ActionBtn;
