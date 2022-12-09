
import { MongoClient, ServerApiVersion } from 'mongodb';

const client = new MongoClient(process.env.fcdb_uri as string);

async function getUsers() {
	let output: string = '';
	try {
		await client.connect();
		
		let result = await client.db("fcdb").collection("users").find().toArray();	
		output = JSON.stringify(result);
	}
	finally {
		client.close();
	}
	return output;	
}

const fcdb = {
	getUsers: getUsers
};
export default fcdb;





