type Props = {
	params: { name: string };
};

const CountryPage = ({ params: { name } }: Props) => {
	return <div>CountryPage: {name}</div>;
};

export default CountryPage;
