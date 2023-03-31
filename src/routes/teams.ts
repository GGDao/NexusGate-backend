import express, { Router } from "express";
import Teams, { ITeam } from "../models/team";

const router: Router = express.Router();

router.get("/ping", (req, res) => {
  res.send("pong");
});

router.get("/allTeams", async (req, res) => {
  try {
    const allTeams = await Teams.find();
    res.status(200).json({ succes: true, payload: allTeams });
  } catch (e) {
    res.status(500).json({ success: false });
  }
});

router.post("/acceptInvite/", async (req, res) => {
  const { name, email, id, address } = req.body;
  try {
    //const invites = await Teams.find({ pending_invites: { $in: [email] } });
    const updated = await Teams.findByIdAndUpdate(id, {
      $push: { team_members: { name, email, address, confirmed: true } },
    });
    res.status(200).json({ status: true, payload: updated });
  } catch (e) {
    res.status(500).json({ status: false });
  }
});

router.post("/create_team", async (req, res) => {
  const {
    team_name,
    team_token_name,
    team_token_symbol,
    network,
    creator_email,
    creator_address,
    pending_invites,
  } = req.body;

  const newTeam: ITeam = new Teams({
    team_name,
    team_token_name,
    team_token_symbol,
    creator_email,
    creator_address,
    create_date: Date.now(),
    pending_invites,
    network,
  });

  try {
    await newTeam.save();
    res.status(200).json({ success: true, message: "New team created!" });
  } catch (e) {
    res.status(500).json({ success: false, message: "There was an error!" });
  }
});

export default router;
