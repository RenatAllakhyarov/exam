import Filters from "@components/Filters";
import SearchBar from "@components/SearchBar";
import type { ReactElement } from "react";
import { DEFAULT_SEARCHER_PLACEHOLDER } from "@utils/constants";
import "./style.css";

interface IToolBarProps {
    search: string;
    setSearch: (value: string) => void;
    selectedAuthorId: string | number;
    setSelectedAuthorId: (value: string | number) => void;
    authorOptions: { value: string | number; label: string }[];
}

const ToolBar = ({
    search,
    setSearch,
    selectedAuthorId,
    setSelectedAuthorId,
    authorOptions,
}: IToolBarProps): ReactElement => {
    return (
        <div className="tool-bar-container">
            <SearchBar
                value={search}
                onChange={setSearch}
                placeholder={DEFAULT_SEARCHER_PLACEHOLDER}
            />
            <Filters
                selectedAuthorId={selectedAuthorId}
                setSelectedAuthorId={setSelectedAuthorId}
                authorOptions={authorOptions}
            />
        </div>
    );
};

export default ToolBar;
