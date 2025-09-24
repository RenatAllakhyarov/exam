import Select from "@components/Select";
import SearchBar from "@components/SearchBar";
import type { ReactElement } from "react";
import "./style.css";

interface IFiltersProps {
    search: string;
    setSearch: (value: string) => void;
    selectedAuthorId: string | number;
    setSelectedAuthorId: (value: string | number) => void;
    authorOptions: { value: string | number; label: string }[];
};

const Filters = ({
    search,
    setSearch,
    selectedAuthorId,
    setSelectedAuthorId,
    authorOptions,
}: IFiltersProps): ReactElement => {
    return (
        <div className="filters-container">
            <SearchBar
                value={search}
                onChange={setSearch}
                placeholder="Search by title..."
            />
            <Select
                options={authorOptions}
                value={selectedAuthorId}
                onChange={setSelectedAuthorId}
                placeholder="Filter by author"
            />
        </div>
    );
};

export default Filters;
