export default {
	title: "Chapter",
	name: "chapter",
	type: "document",
	fields: [
		{
			title: "Name",
			name: "name",
			type: "string",
		},

		{
			type: "cloudinary.asset",
			name: "audioInstruction",
			title: "Audio Instruction",
			description: "The character's instruction to the player in audio format",
		},
		{
			title: "Instruction",
			name: "instruction",
			type: "text",
			description: "Instructions for the player",
		},
		{
			type: "cloudinary.asset",
			name: "video",
			title: "Video",
			description: "The character's instruction to the player in audio format",
		},
		{
			title: "Target Body Movements",
			name: "targetBodyMoves",
			type: "number",
			description: "The target body movements for player",
			validation: (Rule) => Rule.required().min(100).max(10000),
		},
		{
			title: "Target Time to Finish",
			name: "targetTimeToFinish",
			type: "number",
			description: "The time target to record body movements for player",
			validation: (Rule) =>
				Rule.required()
					.min(100)
					.max(1000 * 60 * 60 * 2),
		},
	],
};
