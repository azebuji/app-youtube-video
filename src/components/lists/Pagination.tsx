import React, { useState, useEffect } from "react";

import { Pagination } from "react-bootstrap";

interface PaginationProps {
    pagination: number;
    filter: any;
    verifyFilters: Function;
}

const PaginationCustom = ({
    pagination,
    filter,
    verifyFilters,
}: PaginationProps) => {
    const [paginationNumbers, setPaginationNumbers] = useState<any>();

    function updatePagination(qtd: number) {
        let paginationArrayPag: Array<number> = [];
        for (let i = 0; i < qtd; i++) {
            paginationArrayPag.push(i + 1);
        }
        setPaginationNumbers(() => (
            <React.Fragment>
                {paginationArrayPag.map((item, key) => (
                    <Pagination.Item
                        active={item === Number(filter)}
                        key={key}
                        onClick={() => verifyFilters("pagination", item.toString())}
                    >
                        {item}
                    </Pagination.Item>
                ))}
            </React.Fragment>
        ));
    }

    useEffect(() => {
        updatePagination(pagination);
    }, [filter, pagination]);

    return (
        <React.Fragment>
            {pagination > 1 && (
                <Pagination className="mt-5 justify-content-end">
                    {filter > 1 && (
                        <Pagination.Prev
                            onClick={() =>
                                verifyFilters("pagination", (Number(filter) - 1).toString())
                            }
                        />
                    )}
                    {paginationNumbers}
                    {filter < pagination && (
                        <Pagination.Next
                            onClick={() =>
                                verifyFilters("pagination", (Number(filter) + 1).toString())
                            }
                        />
                    )}
                </Pagination>
            )}
        </React.Fragment>
    );
};

export default PaginationCustom;
