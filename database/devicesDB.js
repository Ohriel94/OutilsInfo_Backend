import postgres from 'postgres';
const connectionString =
	'postgresql://oivjs:oivjs_pass123!@localhost:8001/oivjs';

const psql = postgres(connectionString);

const getAll = async () => {
	const devices = await psql`select * from devices`;
	return devices;
};

export default { getAll };
