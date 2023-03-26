import { Verifier } from "../models/verifiers.js";

export const addVerifier = async (req,res) => {
    const { hash_id, name } = req.body;

    try {
        const exisitingVerifier = await Verifier.findOne({ hash_id });
        
        if(exisitingVerifier) return res.status(400).send("Verifier already exists!");

        const result = await Verifier.create({ hash_id, name });

        res.status(200).json({ result });
    } catch(error) {
        res.status(500).send('Something went wrong!');
    }
}

export const getVerifierHash = async (req,res) => {
    const { name } = req.body;

    try {
        const verifier = await Verifier.findOne({ name });
        
        if(!verifier) return res.status(400).send("Verifier doesn't exist!");
    
        const result = verifier.hash_id;

        res.status(200).send({ result });
    } catch(error) {
        res.status(500).send('Something went wrong!');
    }
}

export const getVerifierName = async (req,res) => {
    const { hash_id } = req.body;

    try {
        const verifier = await Verifier.findOne({ hash_id });
        
        if(!verifier) return res.status(400).send("Verifier doesn't exist!");
    
        const result = verifier.name;

        res.status(200).send({ result });
    } catch(error) {
        res.status(500).send('Something went wrong!');
    }
}