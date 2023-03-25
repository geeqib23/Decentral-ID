import { config } from "dotenv";
import { User } from "../models/user.js";
import { Verifier } from "../models/verifiers.js";
config({ path: ".env" });

export const login = async (req, res) => {
  try {
    // let hashes = process.env.hashes.split(",");
    // console.log(req.body);

    const { hash_id } = req.body;

    if (JSON.stringify(req.body) == "{}" || hash_id === undefined) {
      return res.status(400).send({ err: "Send a valid Hash Id" }).end();
    }

    const isVerifier = await Verifier.findOne({ hash_id });

    if (isVerifier) return res.send({ isVerifier: true });
    else {
      const user = await User.findOne({ hash_id: hash_id });
      if (!user) {
        const newUser = new User({ hash_id });
        await newUser.save();
        res.send({ isVerifier: false, user: newUser });
      } else return res.send({ isVerifier: false });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err });
  }
};
