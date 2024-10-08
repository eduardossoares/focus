interface CheckboxLabelProps {
    id: string;
    label: string;
    isChecked: boolean;
    onChange: (id: string) => void;
}

export default function CheckboxLabel({ id, label, isChecked, onChange }: CheckboxLabelProps) {
    return (
        <div className="flex items-center gap-x-3">
            <input
                type="checkbox"
                className="appearance-none h-4 w-4 bg-zinc-800 checked:bg-[#19AEEE] 
                cursor-pointer rounded-sm checked:border-none border-zinc-700 border"
                id={id}
                checked={isChecked}
                onChange={() => onChange(id)}
            />
            <label className="text-zinc-300 font-light
            cursor-pointer" htmlFor={id}>{label}</label>
        </div>
    );
}
