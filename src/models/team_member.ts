import { Schema } from 'mongoose';

export interface ITeamMember {
  name: string;
  email: string;
  address: string;
  confirmed: boolean;
}

export const TeamMemberSchema = new Schema<ITeamMember>({
  name: { type: String, required: false },
  email: { type: String, required: true },
  address: { type: String, required: false },
  confirmed: { type: Boolean, default: false },
});

