import React, { useState } from 'react';
import * as FeatherIcons from 'react-feather';

const IconPicker = ({
    rowsInOnePage,
    columnsInOnePage,
    iconHeight,
    iconWidth,
    pickerHeight = 500,
    pickerWidth = 500,
    onSelect,
}) => {
    const iconsPerPage = rowsInOnePage * columnsInOnePage;
    const icons = Object.entries(FeatherIcons);
    const [currentPage, setCurrentPage] = useState(0);

    const paginatedIcons = icons.slice(
        currentPage * iconsPerPage,
        (currentPage + 1) * iconsPerPage
    );

    const totalPages = Math.ceil(icons.length / iconsPerPage);

    return (
        <div
            style={{
                width: pickerWidth,
                height: pickerHeight,
                border: '1px solid #ccc',
                borderRadius: 8,
                padding: 10,
                background: '#fff',
                display: 'flex',
                flexDirection: 'column',
                position: 'absolute',
                zIndex: 1000,
            }}
        >
            {/* Icon Grid */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)`,
                    gridGap: 10,
                    flex: 1,
                    overflow: 'hidden',
                }}
            >
                {paginatedIcons.map(([name, Icon]) => (
                    <div
                        key={name}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                            width: iconWidth,
                            height: iconHeight,
                            border: '2px solid #ddd',
                            borderRadius: 5,
                        }}
                        onClick={() => onSelect(<Icon />)}
                    >
                        <Icon />
                    </div>
                ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
                <button
                    className='button-pg'
                    onClick={() => setCurrentPage((prev) => Math.max(0, prev - 1))}
                    disabled={currentPage === 0}
                >
                    Prev
                </button>
                <span>
                    Page {currentPage + 1} of {totalPages}
                </span>
                <button
                    className='button-pg'
                    onClick={() => setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1))}
                    disabled={currentPage === totalPages - 1}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default IconPicker;
