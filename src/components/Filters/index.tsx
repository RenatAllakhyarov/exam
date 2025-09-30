import Select from "@components/Select";
import { DEFAULT_SELECT_PLACEHOLDER } from "@utils/constants";
import type { ReactElement } from "react";
import "./style.css";

interface IFiltersProps {
    selectedAuthorId: string | number;
    setSelectedAuthorId: (value: string | number) => void;
    authorOptions: { value: string | number; label: string }[];
}

const Filters = ({
    selectedAuthorId,
    setSelectedAuthorId,
    authorOptions,
}: IFiltersProps): ReactElement => {
    return (
        <div className="filters-container">
            <Select
                options={authorOptions}
                value={selectedAuthorId}
                onChange={setSelectedAuthorId}
                placeholder={DEFAULT_SELECT_PLACEHOLDER}
            />
        </div>
    );
};

export default Filters;
