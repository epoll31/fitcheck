import { MongoClient } from "mongodb";

const client = new  MongoClient(process.env.fcdb_uri as string);

export async function userExists(username: string) {
	let output = false;
	try {
		await client.connect();

		let result = await client.db("fcdb").collection("users").findOne({
			username: username
		});
		if (result) {
			output = true;	
		}
	} finally {
		client.close();
	}

	return output;
}


export async function validateUser(request: userRequest) {
	let response: userResponse = {
		//request: request,
		id: null,
		username: null,
		email: null,
		phone: null
	}; 

	try {
		await client.connect();

		let result = await client.db("fcdb").collection("users").findOne(request);

		if (result) {
			response.id = 			result.id;
			response.username = result.username;
			response.email = 		result.email;
			response.phone = 		result.phoneNumber;
		}
	} finally {
		client.close();
	}

	
	return response;
}

export async function getUser(id: number) {
	let response: userResponse = {
		//request: request,
		id: null,
		username: null,
		email: null,
		phone: null
	};

	try {
		await client.connect();

		let result = await client.db("fcdb").collection("users").findOne({
			id: id
		});

		response.username = JSON.stringify(result);

		if (result) {
			response.id = 			result.id;
			response.username = result.username;
			response.email = 		result.email;
			response.phone = 		result.phoneNumber;
		}
	} finally {
		client.close();
	}

	return response;
}


export interface userRequest {
	username: string | null,
	password: string | null
}

export interface userResponse {
	//request: userRequest,
	id: number | null,
	username: string | null,
	email: string | null,
	phone: string | null
}
