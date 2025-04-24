import Image from 'next/image';
import { Fragment } from 'react';

import { Country } from '@/lib/country-schema';

export const CountryCard = ({
  flags: { svg, alt },
  name: { official },
  population,
  region,
  capital,
}: Country) => {
  return (
    <article
      className='
				max-w-[264px]
				rounded-md
				shadow-xl
				overflow-hidden
				bg-neutral-100 dark:bg-neutral-1
				text-sm text-neutral-600 dark:text-neutral-100
			'
    >
      <div className='max-w-[264px] max-h-[160px] overflow-hidden'>
      <Image
        alt={alt || `Flag of ${official}`}
        src={svg}
        width={264}
        height={160}
        className='size-full object-cover'
      />
      </div>
      <div className='p-6 pb-12 space-y-4'>
        <h2 className='text-lg font-extrabold'>{official}</h2>
        <dl className='grid grid-cols-[auto_auto] gap-y-2'>
          {[
            {
              key: 'Population',
              value: population,
            },
            {
              key: 'Region',
              value: region,
            },
            {
              key: 'Capital',
              value: capital,
            },
          ].map(({ key, value }) => (
            <Fragment key={key}>
              <dt className='font-semibold'>{key}: </dt>
              <dd>{value}</dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </article>
  );
};
