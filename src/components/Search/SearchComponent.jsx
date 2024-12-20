import { memo } from "react";

const SearchComponent = ({ placeholder, className, search, searchItem }) => {
    return (
        <>
            <input
                className={className}
                type="text"
                value={search}
                placeholder={placeholder}
                onChange={searchItem}
            />
        </>
    );
}

export default memo(SearchComponent);