import devicesDB from '../database/devicesDB.js';

const retrieveDevices = async () => {
	const devices = await devicesDB.getAll();
	return devices;
};

export default { retrieveDevices };
