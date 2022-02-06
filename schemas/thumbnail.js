export default {
	name: "thumbnail",
	title: "Thumbnail",
	type: "image",
	options: {
		hotspot: true,
	},
	fields: [
		{
			name: "caption",
			type: "string",
			title: "Caption",
			options: {
				isHighlighted: true,
			},
		},
		{
			name: "alt",
			type: "string",
			title: "Alternative Text",
			description: "Good for accessibility and SEO",
			options: {
				isHighlighted: true,
			},
		},
	],
	preview: {
		select: {
			imageUrl: "asset.url",
			title: "caption",
		},
	},
};
