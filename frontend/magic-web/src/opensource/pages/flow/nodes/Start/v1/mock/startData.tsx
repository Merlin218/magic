export const startData = {
	node_id: "MAGIC-FLOW-NODE-662ef85bbf58a1-16520272",
	name: "开始节点",
	description: "当以下事件被触发时，流程将会从这个模块开始执行",
	node_type: 1,
	meta: [],
	params: {
		branches: [
			{
				trigger_type: 1,
				next_nodes: [],
				config: null,
				input: {
					widget: null,
					form: {
						id: "component-662ef85bc0259",
						version: "1",
						type: "form",
						structure: {
							type: "object",
							key: "root",
							sort: 0,
							title: "root节点",
							description: "",
							required: ["nickname", "chat_time", "message_type", "content"],
							value: null,
							items: null,
							properties: {
								nickname: {
									type: "string",
									key: "nickname",
									sort: 0,
									title: " 用户昵称",
									description: "",
									required: null,
									value: null,
									items: null,
									properties: null,
								},
								chat_time: {
									type: "string",
									key: "chat_time",
									sort: 1,
									title: "发送时间",
									description: "",
									required: null,
									value: null,
									items: null,
									properties: null,
								},
								message_type: {
									type: "string",
									key: "message_type",
									sort: 2,
									title: "消息类型",
									description: "",
									required: null,
									value: null,
									items: null,
									properties: null,
								},
								content: {
									type: "string",
									key: "content",
									sort: 3,
									title: "消息内容",
									description: "",
									required: null,
									value: null,
									items: null,
									properties: null,
								},
							},
						},
					},
				},
			},
			{
				trigger_type: 2,
				next_nodes: [],
				config: {
					interval: 0,
					unit: "minutes",
				},
				input: {
					widget: null,
					form: {
						id: "component-662ef85bc0504",
						version: "1",
						type: "form",
						structure: {
							type: "object",
							key: "root",
							sort: 0,
							title: "root节点",
							description: "",
							required: ["nickname", "open_time"],
							value: null,
							items: null,
							properties: {
								nickname: {
									type: "string",
									key: "nickname",
									sort: 0,
									title: " 用户昵称",
									description: "",
									required: null,
									value: null,
									items: null,
									properties: null,
								},
								open_time: {
									type: "string",
									key: "open_time",
									sort: 1,
									title: "打开时间",
									description: "",
									required: null,
									value: null,
									items: null,
									properties: null,
								},
							},
						},
					},
				},
			},
			{
				trigger_type: 4,
				next_nodes: [],
				config: null,
				input: {
					widget: null,
					form: {
						id: "component-662ef85bc052a",
						version: "1",
						type: "form",
						structure: {
							type: "object",
							key: "root",
							sort: 0,
							title: null,
							description: null,
							required: [],
							value: null,
							items: null,
							properties: null,
						},
					},
				},
			},
		],
	},
	next_nodes: [],
	input: null,
	output: null,
}

export default {}
