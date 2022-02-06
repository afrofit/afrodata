export default {
	title: "Story",
	name: "story",
	type: "document",
	fields: [
		{
			title: "Title",
			name: "title",
			type: "string",
			description: "What's the story title?",
		},
		{
			title: "Description",
			name: "description",
			type: "text",
			description: "What's the synopsis of the story",
		},
		{
			title: "Intro Video",
			type: "cloudinary.asset",
			name: "introVideo",
			description: "Video to introduce story to users.",
		},
		{
			title: "Story Finish Video",
			type: "cloudinary.asset",
			name: "storyFinishVideo",
			description: "Video to celebrate completion of story.",
		},
		{
			title: "Thumbnail",
			type: "thumbnail",
			name: "thumbnail",
			description: "Sort of a story poster",
		},
		{
			title: "Story Order Number",
			name: "storyOrderNumber",
			type: "number",
			description: "The order in which this story appears",
			validation: (Rule) => Rule.required().min(1).max(5),
		},
		{
			title: "Story Chapters",
			name: "storyChapters",
			type: "array",
			description: "The chapters of this story",
			of: [{ type: "chapter" }],
		},
	],
};
