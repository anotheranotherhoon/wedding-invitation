import React from "react";
import styled from "styled-components";

interface PaginationProps{
    total : number;
    limit : number;
    page : number;
    setPage : (page : number) => void;
}

function Pagination({ total, limit, page, setPage } : PaginationProps) {
    const totalPage = Math.ceil(total / limit);
    return (
        <React.Fragment>
            <Nav>
                <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    &lt;
                </Button>
                {Array(totalPage)
                    .fill(undefined)
                    .map((_, i) => (
                        <Button
                            key={i + 1}
                            onClick={() => setPage(i + 1)}
                            className={page=== i+1 ? 'current' : "null"}
                        >
                            {i + 1}
                        </Button>
                    ))}
                <Button onClick={() => setPage(page + 1)} disabled={page === totalPage}>
                    &gt;
                </Button>
            </Nav>
        </React.Fragment>
    );
}

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    margin: 16px;
`;

const Button = styled.button`
    border: none;
    border-radius: 8px;
    padding: 6px;
    margin: 0;
    background: grey;
    color : var(--color-white);
    font-size: 1rem;
    &:hover {
        background: #524344;
        cursor: pointer;
        transform: translateY(-2px);
    }
    &[disabled] {
        background: ${(props) => props.theme.theme === 'light' ? 'darkslategrey' : 'grey'};
        cursor: revert;
        transform: revert;
    }
    &.current{
        background: #524344;
        font-weight: bold;
        cursor: revert;
        transform: revert;
    }
`;

export default Pagination;