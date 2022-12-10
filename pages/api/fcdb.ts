import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from "mongodb";

const client = new  MongoClient(process.env.fcdb_uri as string);

async function validateUser(request: userRequest) {
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
