'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition } from 'react';

type PaginationProps = {
	totalItems: number;
	itemsPerPage: number;
	currentPage: number;
};

export function Pagination({
	totalItems,
	itemsPerPage,
	currentPage,
}: PaginationProps) {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const searchParams = useSearchParams();

	const totalPages = Math.ceil(totalItems / itemsPerPage);

	// Não renderiza paginação se houver apenas uma página
	if (totalPages <= 1) return null;

	const handlePageChange = (page: number) => {
		startTransition(() => {
			const params = new URLSearchParams(searchParams.toString());
			params.set('page', page.toString());
			router.push(`/?${params.toString()}`);
		});
	};

	// Cria um array com os números das páginas a serem exibidas
	const getPageNumbers = () => {
		const pages = [];

		// Sempre mostrar a primeira página
		pages.push(1);

		// Calculando o intervalo de páginas a mostrar
		let startPage = Math.max(2, currentPage - 1);
		let endPage = Math.min(totalPages - 1, currentPage + 1);

		// Adicionando "..." antes do intervalo, se necessário
		if (startPage > 2) {
			pages.push('...');
		}

		// Adicionando as páginas do intervalo
		for (let i = startPage; i <= endPage; i++) {
			pages.push(i);
		}

		// Adicionando "..." depois do intervalo, se necessário
		if (endPage < totalPages - 1) {
			pages.push('...');
		}

		// Sempre mostrar a última página, se houver mais de uma
		if (totalPages > 1) {
			pages.push(totalPages);
		}

		return pages;
	};

	const pageNumbers = getPageNumbers();

	return (
		<div className='flex justify-center items-center my-8'>
			<button
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1 || isPending}
				className={`px-4 py-2 mx-1 rounded ${
					currentPage === 1
						? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
						: 'bg-white dark:bg-gray-700 dark:text-white shadow hover:bg-gray-50 dark:hover:bg-gray-600'
				}`}
				aria-label='Previous page'
			>
				&laquo;
			</button>

			{pageNumbers.map((page, index) =>
				page === '...' ? (
					<span
						key={`ellipsis-${index}`}
						className='px-4 py-2 mx-1 text-gray-700 dark:text-gray-300'
					>
						...
					</span>
				) : (
					<button
						key={`page-${page}`}
						onClick={() => handlePageChange(page as number)}
						disabled={isPending}
						className={`px-4 py-2 mx-1 rounded ${
							currentPage === page
								? 'bg-blue-500 text-white'
								: 'bg-white dark:bg-gray-700 dark:text-white shadow hover:bg-gray-50 dark:hover:bg-gray-600'
						}`}
						aria-label={`Page ${page}`}
						aria-current={currentPage === page ? 'page' : undefined}
					>
						{page}
					</button>
				)
			)}

			<button
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages || isPending}
				className={`px-4 py-2 mx-1 rounded ${
					currentPage === totalPages
						? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
						: 'bg-white dark:bg-gray-700 dark:text-white shadow hover:bg-gray-50 dark:hover:bg-gray-600'
				}`}
				aria-label='Next page'
			>
				&raquo;
			</button>

			{isPending && (
				<div className='ml-4'>
					<div className='animate-spin h-5 w-5 border-2 border-gray-500 rounded-full border-t-transparent'></div>
				</div>
			)}
		</div>
	);
}
