
import { MongoClient } from 'mongodb';

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

		let result = await client.db("fcdb").collection("users").findOne({
			username: request.username,
			password: request.password
		});

		if (result) {
			response.id = 			result.id;
			response.username = result.username;
			response.email = 		result.email;
			response.phone = 		result.phoneNumber;
		}
	} finally {
		client.close();
	}

	
	return JSON.stringify(response);
}



export interface userRequest {
	username?: string ,
	password?: string 
}

export interface userResponse {
	//request: userRequest,
	id: number | null,
	username: string | null,
	email: string | null,
	phone: string | null
}


export interface userRequest {
	username?: string ,
	password?: string 
}

export interface userResponse {
	//request: userRequest,
	id: number | null,
	username: string | null,
	email: string | null,
	phone: string | null
}


