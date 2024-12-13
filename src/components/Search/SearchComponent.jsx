import { memo } from "react";

const SearchComponent = ({ placeholder, className, search, searchItem }) => {
    return (
        <>
            <div className="row">
                <input
                    className={className}
                    type="text"
                    value={search}
                    placeholder={placeholder}
                    onChange={searchItem}
                />
            </div>
        </>
    );
}

export default memo(SearchComponent);