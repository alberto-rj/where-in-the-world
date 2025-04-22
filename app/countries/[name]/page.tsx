import { Suspense } from 'react';

import {
	CountryDetail,
	CountryDetailSkeleton,
} from '@/components/country-detail';

type Props = {
	params: { name: string };
};

const CountryPage = ({ params: { name } }: Props) => {
	return (
		<div>
			<Suspense fallback={<CountryDetailSkeleton />}>
				<CountryDetail name={name} />
			</Suspense>
		</div>
	);
};

export default CountryPage;
