import mongoose, { Document, Schema } from "mongoose";
import { ITeamMember, TeamMemberSchema } from "./team_member";
import { Networks } from "../types/networks";

export interface ITeam extends Document {
  team_name: string;
  team_token_name: string;
  team_token_symbol: string;
  create_date: Date;
  creator_email: string;
  creator_address: string;
  team_members: ITeamMember[];
  pending_invites: string[];
  network: Networks;
}

const TeamSchema = new Schema<ITeam>({
  team_name: { type: String,  required: true},
  team_token_name: { type: String, required: true },
  team_token_symbol: { type: String,  required: true },
  create_date: { type: Date, required: true },
  creator_email: { type: String, required: true },
  creator_address: { type: String, required: true },
  team_members: { type: [TeamMemberSchema], required: true },
  pending_invites: { type: [String], default: [] },
  network: { type: String, required: true },
});

const Teams = mongoose.model<ITeam>("Team", TeamSchema);

export default Teams;
