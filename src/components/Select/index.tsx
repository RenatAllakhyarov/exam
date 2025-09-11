import { type ReactElement, type ChangeEvent } from "react";
import "./style.css";

interface ISelectOption {
    value: string | number;
    label: string;
}

interface ISelectProps {
    options: ISelectOption[];
    value: string | number;
    onChange: (selectedValue: string | number) => void;
    placeholder?: string;
}

const Select = ({
    options,
    value,
    onChange,
    placeholder = "Выберите...",
}: ISelectProps): ReactElement => {
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className="select-container">
            <select
                value={value}
                onChange={handleChange}
                className="custom-select primary-text"
                aria-label={placeholder}
            >
                {placeholder && (
                    <option value="" disabled hidden>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
