import {PaginationContainer, PageButton, Number, PrevButton, NextButton} from './styles'
import PrevIcon from '../../assets/img/next-prev.svg';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    function handlePrev() {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    function handleNext() {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    }

    function renderPageNumbers() {
        const pages = [];

        const startPage = Math.max(currentPage - 2, 1);
        const endPage = Math.min(startPage + 4, totalPages);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <Number key={i} active={i === currentPage}  onClick={() => onPageChange(i)}>
                    {i}
                </Number>
            )
        }
        return pages;
    }

    return (
        <PaginationContainer>
            <PageButton onClick={handlePrev} disabled={currentPage === 1}>
                <PrevButton src={PrevIcon} />
            </PageButton>

            {renderPageNumbers()}

            <PageButton onClick={handleNext} disabled={currentPage === totalPages}>
                <NextButton src={PrevIcon} />
            </PageButton>
        </PaginationContainer>
    );
}