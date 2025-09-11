import { type ReactElement, type ChangeEvent } from "react";
import "./style.css";

interface ISearchBarProps {
    value: string;
    onChange: (searchValue: string) => void;
    placeholder?: string;
}

const SearchBar = ({
    value,
    onChange,
    placeholder = "Поиск...",
}: ISearchBarProps): ReactElement => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className="search-input primary-text"
                aria-label={placeholder}
            />
        </div>
    );
};

export default SearchBar;
