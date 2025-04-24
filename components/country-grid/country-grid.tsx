import { getAllCountries } from '@/lib/api';
import { CountryCard } from '@/components/country-card';

export const CountryGrid = async () => {
  const data = await getAllCountries();
  const countries = data.filter((country, index) => index < 24);
  return (
    <ul
      role='list'
      className='container flex flex-wrap space-between items-start gap-[32px] py-8 sm:py-12'
    >
      {countries.length == 0 ? (
        <p>No country was found.</p>
      ) : (
        countries.map((country) => (
          <li key={country.name.common}>
            <CountryCard {...country} />
          </li>
        ))
      )}
    </ul>
  );
};
