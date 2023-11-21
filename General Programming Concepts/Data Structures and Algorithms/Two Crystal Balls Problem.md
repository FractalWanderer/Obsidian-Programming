---

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==


# Text Elements
Goal: Given two crystal balls that will break if dropped from high enough
distance, determine the exact spot in which it will break in the most
optimized way. (i.e.. the lowest floor where it breaks.) ^p9Dk8sz4

breaks ^xXSc8VWZ

breaks ^Y3DYOblP

breaks ^O7QA4n5f

survives ^6Kxi2Lpc

survives ^v8xKHINQ

survives ^qHuEV2nD

Things to Keep In Mind:

1. We have two crystal balls to
work with.

2. The array (building) is ordered
if you assume that breaks is 0
and survives is 1.
 ^iHjx6rzc

To solve in a generic way, you have
to:

1. Do the equivalent of a jump in binary
search, except instead of making the
jumps 1/2, make the jumps sqrt(n), until
one of the crystal balls breaks.

2. Once the first ball breaks, walk 
backwards 1 sqrt(n), and then linearly
walk from there until you hit a 1. ^1T6Dt3Oe

To solve in an easier way:

Linearly walk until you hit a 1.
The index with a 1 is the most
optimized path. ^Hi6CDrxx

Time Complexity: O(N) ^DXVhDibU

Time Complexity:

 ^JcOuvNdw

O(C sqrt(n) + sqrt(n)) = O(sqrt(N)) ^97XcAg4U

where C is a constant. ^jnBhQisT

You are given an input such as: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
with a 0 representing a break, and a 1 representing a survives. ^sBTaIwEw

%%
# Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/1.9.19",
	"elements": [
		{
			"id": "7uBYHYzuxbadj8r8MD6z0",
			"type": "rectangle",
			"x": 216.58349609375,
			"y": -596.1042175292969,
			"width": 260.666748046875,
			"height": 862.0000305175781,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"seed": 1453180431,
			"version": 162,
			"versionNonce": 1307233519,
			"isDeleted": false,
			"boundElements": [],
			"updated": 1700587480771,
			"link": null,
			"locked": false
		},
		{
			"id": "TFycsEZcIqmwHCr8G1obh",
			"type": "line",
			"x": 216.58349609375,
			"y": -444.104248046875,
			"width": 259.3333740234375,
			"height": 0,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 1585023041,
			"version": 105,
			"versionNonce": 1957166465,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1700587480772,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					259.3333740234375,
					0
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": null,
			"startArrowhead": null,
			"endArrowhead": null
		},
		{
			"type": "line",
			"version": 145,
			"versionNonce": 134305551,
			"isDeleted": false,
			"id": "rvbLBK-Y-_03lFxiq67zA",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 215.96468718591143,
			"y": -299.75960025715636,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 259.3333740234375,
			"height": 0,
			"seed": 1168800193,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700587480772,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					259.3333740234375,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 174,
			"versionNonce": 1957602657,
			"isDeleted": false,
			"id": "zY6Bw28YEIQx2KdZtHBo9",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 218.63143523278646,
			"y": -161.0928522102814,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 259.3333740234375,
			"height": 0,
			"seed": 1974690977,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700587480772,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					259.3333740234375,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 192,
			"versionNonce": 1862376751,
			"isDeleted": false,
			"id": "DX0Uxo67nP8Jp3kIJqI_c",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 220.63131316247393,
			"y": -10.426226233718868,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 259.3333740234375,
			"height": 0,
			"seed": 408341711,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700587480772,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					259.3333740234375,
					0
				]
			]
		},
		{
			"type": "line",
			"version": 131,
			"versionNonce": 827674945,
			"isDeleted": false,
			"id": "p0fnr-an-E0b8vMcLeQww",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 217.29793913903646,
			"y": 124.90702571940614,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#ffec99",
			"width": 259.3333740234375,
			"height": 0,
			"seed": 1872531617,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700587480772,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": null,
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": null,
			"points": [
				[
					0,
					0
				],
				[
					259.3333740234375,
					0
				]
			]
		},
		{
			"id": "sejYtNyWIpsj-Uq4mLQEE",
			"type": "ellipse",
			"x": -158.08319091796875,
			"y": -560.1041870117188,
			"width": 65.3333740234375,
			"height": 68,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#d0bfff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 44903663,
			"version": 174,
			"versionNonce": 208966863,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1700587774493,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 217,
			"versionNonce": 96936687,
			"isDeleted": false,
			"id": "8aW8x-kjc_U6b4J3HUYMA",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -9.08319091796875,
			"y": -562.7709045410156,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#d0bfff",
			"width": 65.3333740234375,
			"height": 68,
			"seed": 166788289,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1700587774493,
			"link": null,
			"locked": false
		},
		{
			"id": "p9Dk8sz4",
			"type": "text",
			"x": 376.25006103515625,
			"y": -1008.4375610351562,
			"width": 1009.5956420898438,
			"height": 105,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "#d0bfff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1673282479,
			"version": 459,
			"versionNonce": 1043135727,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1700587894860,
			"link": null,
			"locked": false,
			"text": "Goal: Given two crystal balls that will break if dropped from high enough\ndistance, determine the exact spot in which it will break in the most\noptimized way. (i.e.. the lowest floor where it breaks.)",
			"rawText": "Goal: Given two crystal balls that will break if dropped from high enough\ndistance, determine the exact spot in which it will break in the most\noptimized way. (i.e.. the lowest floor where it breaks.)",
			"fontSize": 28,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 94,
			"containerId": null,
			"originalText": "Goal: Given two crystal balls that will break if dropped from high enough\ndistance, determine the exact spot in which it will break in the most\noptimized way. (i.e.. the lowest floor where it breaks.)",
			"lineHeight": 1.25
		},
		{
			"id": "xXSc8VWZ",
			"type": "text",
			"x": 298.583251953125,
			"y": -539.1041259765625,
			"width": 89.09596252441406,
			"height": 35,
			"angle": 0,
			"strokeColor": "#e03131",
			"backgroundColor": "#d0bfff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1453168239,
			"version": 70,
			"versionNonce": 1578153217,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1700587480772,
			"link": null,
			"locked": false,
			"text": "breaks",
			"rawText": "breaks",
			"fontSize": 28,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 24,
			"containerId": null,
			"originalText": "breaks",
			"lineHeight": 1.25
		},
		{
			"type": "text",
			"version": 61,
			"versionNonce": 1346492303,
			"isDeleted": false,
			"id": "Y3DYOblP",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 295.70201873779297,
			"y": -391.9375,
			"strokeColor": "#e03131",
			"backgroundColor": "#d0bfff",
			"width": 89.09596252441406,
			"height": 35,
			"seed": 1193258689,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700587480772,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "breaks",
			"rawText": "breaks",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "breaks",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "text",
			"version": 90,
			"versionNonce": 789867745,
			"isDeleted": false,
			"id": "O7QA4n5f",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 295.36864471435547,
			"y": -249.2708740234375,
			"strokeColor": "#e03131",
			"backgroundColor": "#d0bfff",
			"width": 89.09596252441406,
			"height": 35,
			"seed": 755612257,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700587480773,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "breaks",
			"rawText": "breaks",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "breaks",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"id": "6Kxi2Lpc",
			"type": "text",
			"x": 289.5833740234375,
			"y": -108.43753051757812,
			"width": 109.08795166015625,
			"height": 35,
			"angle": 0,
			"strokeColor": "#2f9e44",
			"backgroundColor": "#d0bfff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 725425473,
			"version": 60,
			"versionNonce": 1281232303,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1700587480773,
			"link": null,
			"locked": false,
			"text": "survives",
			"rawText": "survives",
			"fontSize": 28,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 24,
			"containerId": null,
			"originalText": "survives",
			"lineHeight": 1.25
		},
		{
			"type": "text",
			"version": 60,
			"versionNonce": 982919361,
			"isDeleted": false,
			"id": "v8xKHINQ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 291.3726501464844,
			"y": 39.062469482421875,
			"strokeColor": "#2f9e44",
			"backgroundColor": "#d0bfff",
			"width": 109.08795166015625,
			"height": 35,
			"seed": 698270959,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700587480773,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "survives",
			"rawText": "survives",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "survives",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "text",
			"version": 89,
			"versionNonce": 2144239567,
			"isDeleted": false,
			"id": "qHuEV2nD",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 295.7060241699219,
			"y": 176.39584350585938,
			"strokeColor": "#2f9e44",
			"backgroundColor": "#d0bfff",
			"width": 109.08795166015625,
			"height": 35,
			"seed": 434837327,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1700587480773,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "survives",
			"rawText": "survives",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "survives",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"id": "iHjx6rzc",
			"type": "text",
			"x": 652.916748046875,
			"y": -594.7709045410156,
			"width": 461.13177490234375,
			"height": 315,
			"angle": 0,
			"strokeColor": "#1971c2",
			"backgroundColor": "#d0bfff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1759603471,
			"version": 453,
			"versionNonce": 171272353,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1700587480773,
			"link": null,
			"locked": false,
			"text": "Things to Keep In Mind:\n\n1. We have two crystal balls to\nwork with.\n\n2. The array (building) is ordered\nif you assume that breaks is 0\nand survives is 1.\n",
			"rawText": "Things to Keep In Mind:\n\n1. We have two crystal balls to\nwork with.\n\n2. The array (building) is ordered\nif you assume that breaks is 0\nand survives is 1.\n",
			"fontSize": 28,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 304,
			"containerId": null,
			"originalText": "Things to Keep In Mind:\n\n1. We have two crystal balls to\nwork with.\n\n2. The array (building) is ordered\nif you assume that breaks is 0\nand survives is 1.\n",
			"lineHeight": 1.25
		},
		{
			"id": "1T6Dt3Oe",
			"type": "text",
			"x": 651.2499389648438,
			"y": -208.10421752929688,
			"width": 548.0158081054688,
			"height": 385,
			"angle": 0,
			"strokeColor": "#2f9e44",
			"backgroundColor": "#d0bfff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1065387695,
			"version": 495,
			"versionNonce": 554498081,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1700587790559,
			"link": null,
			"locked": false,
			"text": "To solve in a generic way, you have\nto:\n\n1. Do the equivalent of a jump in binary\nsearch, except instead of making the\njumps 1/2, make the jumps sqrt(n), until\none of the crystal balls breaks.\n\n2. Once the first ball breaks, walk \nbackwards 1 sqrt(n), and then linearly\nwalk from there until you hit a 1.",
			"rawText": "To solve in a generic way, you have\nto:\n\n1. Do the equivalent of a jump in binary\nsearch, except instead of making the\njumps 1/2, make the jumps sqrt(n), until\none of the crystal balls breaks.\n\n2. Once the first ball breaks, walk \nbackwards 1 sqrt(n), and then linearly\nwalk from there until you hit a 1.",
			"fontSize": 28,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 374,
			"containerId": null,
			"originalText": "To solve in a generic way, you have\nto:\n\n1. Do the equivalent of a jump in binary\nsearch, except instead of making the\njumps 1/2, make the jumps sqrt(n), until\none of the crystal balls breaks.\n\n2. Once the first ball breaks, walk \nbackwards 1 sqrt(n), and then linearly\nwalk from there until you hit a 1.",
			"lineHeight": 1.25
		},
		{
			"id": "Hi6CDrxx",
			"type": "text",
			"x": 1315.25,
			"y": -203.77096557617188,
			"width": 425.5157775878906,
			"height": 175,
			"angle": 0,
			"strokeColor": "#2f9e44",
			"backgroundColor": "#d0bfff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1271054095,
			"version": 409,
			"versionNonce": 767390735,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1700588007626,
			"link": null,
			"locked": false,
			"text": "To solve in an easier way:\n\nLinearly walk until you hit a 1.\nThe index with a 1 is the most\noptimized path.",
			"rawText": "To solve in an easier way:\n\nLinearly walk until you hit a 1.\nThe index with a 1 is the most\noptimized path.",
			"fontSize": 28,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 164,
			"containerId": null,
			"originalText": "To solve in an easier way:\n\nLinearly walk until you hit a 1.\nThe index with a 1 is the most\noptimized path.",
			"lineHeight": 1.25
		},
		{
			"id": "DXVhDibU",
			"type": "text",
			"x": 1365.9166259765625,
			"y": 24.5623779296875,
			"width": 294.4758605957031,
			"height": 35,
			"angle": 0,
			"strokeColor": "#e03131",
			"backgroundColor": "#d0bfff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1172394593,
			"version": 133,
			"versionNonce": 556931631,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1700588007626,
			"link": null,
			"locked": false,
			"text": "Time Complexity: O(N)",
			"rawText": "Time Complexity: O(N)",
			"fontSize": 28,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 24,
			"containerId": null,
			"originalText": "Time Complexity: O(N)",
			"lineHeight": 1.25
		},
		{
			"id": "JcOuvNdw",
			"type": "text",
			"x": 789.583251953125,
			"y": 284.229248046875,
			"width": 224.36526489257812,
			"height": 106.58350123633586,
			"angle": 0,
			"strokeColor": "#e03131",
			"backgroundColor": "#d0bfff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 846427105,
			"version": 108,
			"versionNonce": 983200865,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1700587480773,
			"link": null,
			"locked": false,
			"text": "Time Complexity:\n\n",
			"rawText": "Time Complexity:\n\n",
			"fontSize": 28.422266996356225,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 96.00000000000003,
			"containerId": null,
			"originalText": "Time Complexity:\n\n",
			"lineHeight": 1.25
		},
		{
			"id": "97XcAg4U",
			"type": "text",
			"x": 679.9166259765625,
			"y": 349.8958740234375,
			"width": 488.123779296875,
			"height": 35,
			"angle": 0,
			"strokeColor": "#e03131",
			"backgroundColor": "#d0bfff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 728151553,
			"version": 93,
			"versionNonce": 700333615,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1700587480773,
			"link": null,
			"locked": false,
			"text": "O(C sqrt(n) + sqrt(n)) = O(sqrt(N))",
			"rawText": "O(C sqrt(n) + sqrt(n)) = O(sqrt(N))",
			"fontSize": 28,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 24,
			"containerId": null,
			"originalText": "O(C sqrt(n) + sqrt(n)) = O(sqrt(N))",
			"lineHeight": 1.25
		},
		{
			"id": "apDcTgR3CzpWTZzr1twxx",
			"type": "ellipse",
			"x": 1017.9168701171875,
			"y": 324.56243896484375,
			"width": 161.333251953125,
			"height": 80.66668701171876,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 648803311,
			"version": 52,
			"versionNonce": 83766529,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1700587512545,
			"link": null,
			"locked": false
		},
		{
			"id": "jnBhQisT",
			"type": "text",
			"x": 685.9166259765625,
			"y": 428.22918701171875,
			"width": 316.5118713378906,
			"height": 35,
			"angle": 0,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1098244257,
			"version": 31,
			"versionNonce": 600324591,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1700587533380,
			"link": null,
			"locked": false,
			"text": "where C is a constant.",
			"rawText": "where C is a constant.",
			"fontSize": 28,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 24,
			"containerId": null,
			"originalText": "where C is a constant.",
			"lineHeight": 1.25
		},
		{
			"id": "sBTaIwEw",
			"type": "text",
			"x": 381.9169921875,
			"y": -850.1040725708008,
			"width": 882.923583984375,
			"height": 70,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 2,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1931890977,
			"version": 196,
			"versionNonce": 468963265,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1700587987560,
			"link": null,
			"locked": false,
			"text": "You are given an input such as: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]\nwith a 0 representing a break, and a 1 representing a survives.",
			"rawText": "You are given an input such as: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]\nwith a 0 representing a break, and a 1 representing a survives.",
			"fontSize": 28,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 59,
			"containerId": null,
			"originalText": "You are given an input such as: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1]\nwith a 0 representing a break, and a 1 representing a survives.",
			"lineHeight": 1.25
		},
		{
			"id": "le7Bdjw6ypE7jZRoEmKMy",
			"type": "freedraw",
			"x": 1060.5833740234375,
			"y": 337.89581298828125,
			"width": 166,
			"height": 76,
			"angle": 0,
			"strokeColor": "#e03131",
			"backgroundColor": "#d0bfff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1596951855,
			"version": 127,
			"versionNonce": 116342849,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1700587480773,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.6666259765625,
					0
				],
				[
					-2,
					0
				],
				[
					-3.333251953125,
					2.220446049250313e-16
				],
				[
					-4.6666259765625,
					0
				],
				[
					-6.6666259765625,
					4.440892098500626e-16
				],
				[
					-9.333251953125,
					0
				],
				[
					-13.333251953125,
					0
				],
				[
					-20,
					0
				],
				[
					-25.333251953125,
					0
				],
				[
					-26.6666259765625,
					0
				],
				[
					-29.333251953125,
					0
				],
				[
					-31.333251953125,
					2
				],
				[
					-32.6666259765625,
					3.3333740234375
				],
				[
					-35.333251953125,
					4
				],
				[
					-35.333251953125,
					5.3333740234375
				],
				[
					-36,
					7.3333740234375
				],
				[
					-36.6666259765625,
					9.3333740234375
				],
				[
					-36.6666259765625,
					11.3333740234375
				],
				[
					-38,
					13.3333740234375
				],
				[
					-38.6666259765625,
					15.3333740234375
				],
				[
					-38.6666259765625,
					18
				],
				[
					-40,
					22
				],
				[
					-40.6666259765625,
					24.66668701171875
				],
				[
					-41.333251953125,
					26
				],
				[
					-42.6666259765625,
					28.66668701171875
				],
				[
					-42.6666259765625,
					30
				],
				[
					-42.6666259765625,
					32.66668701171875
				],
				[
					-42.6666259765625,
					34
				],
				[
					-42.6666259765625,
					36.66668701171875
				],
				[
					-42.6666259765625,
					38
				],
				[
					-44,
					40.66668701171875
				],
				[
					-44,
					42
				],
				[
					-44,
					43.3333740234375
				],
				[
					-44,
					46
				],
				[
					-44,
					47.3333740234375
				],
				[
					-44,
					48.66668701171875
				],
				[
					-44,
					50
				],
				[
					-44,
					50.66668701171875
				],
				[
					-43.333251953125,
					51.3333740234375
				],
				[
					-42.6666259765625,
					52
				],
				[
					-42,
					52.66668701171875
				],
				[
					-40.6666259765625,
					53.3333740234375
				],
				[
					-38,
					54
				],
				[
					-32.6666259765625,
					56.66668701171875
				],
				[
					-28.6666259765625,
					59.3333740234375
				],
				[
					-24,
					59.3333740234375
				],
				[
					-18,
					61.3333740234375
				],
				[
					-11.333251953125,
					64
				],
				[
					-5.333251953125,
					64
				],
				[
					0,
					66
				],
				[
					6.666748046875,
					66
				],
				[
					12.666748046875,
					67.3333740234375
				],
				[
					17.3333740234375,
					67.3333740234375
				],
				[
					23.3333740234375,
					67.3333740234375
				],
				[
					27.3333740234375,
					67.3333740234375
				],
				[
					36.666748046875,
					67.3333740234375
				],
				[
					42.666748046875,
					67.3333740234375
				],
				[
					50.666748046875,
					67.3333740234375
				],
				[
					61.3333740234375,
					67.3333740234375
				],
				[
					66.666748046875,
					67.3333740234375
				],
				[
					75.3333740234375,
					67.3333740234375
				],
				[
					81.3333740234375,
					67.3333740234375
				],
				[
					85.3333740234375,
					67.3333740234375
				],
				[
					90,
					66.66668701171875
				],
				[
					92,
					66.66668701171875
				],
				[
					96.666748046875,
					65.3333740234375
				],
				[
					99.3333740234375,
					64
				],
				[
					101.3333740234375,
					63.3333740234375
				],
				[
					103.3333740234375,
					61.3333740234375
				],
				[
					106,
					60
				],
				[
					108,
					58.66668701171875
				],
				[
					108.666748046875,
					57.3333740234375
				],
				[
					110.666748046875,
					55.3333740234375
				],
				[
					112,
					54
				],
				[
					113.3333740234375,
					50.66668701171875
				],
				[
					116.666748046875,
					46.66668701171875
				],
				[
					118,
					44
				],
				[
					119.3333740234375,
					41.3333740234375
				],
				[
					119.3333740234375,
					38.66668701171875
				],
				[
					119.3333740234375,
					37.3333740234375
				],
				[
					120.666748046875,
					34
				],
				[
					120.666748046875,
					32.66668701171875
				],
				[
					121.3333740234375,
					30.66668701171875
				],
				[
					122,
					30
				],
				[
					122,
					28.66668701171875
				],
				[
					122,
					27.3333740234375
				],
				[
					122,
					24.66668701171875
				],
				[
					122,
					22
				],
				[
					122,
					19.3333740234375
				],
				[
					122,
					17.3333740234375
				],
				[
					122,
					16
				],
				[
					122,
					13.3333740234375
				],
				[
					120.666748046875,
					13.3333740234375
				],
				[
					119.3333740234375,
					13.3333740234375
				],
				[
					116,
					12
				],
				[
					112,
					12
				],
				[
					106,
					10.66668701171875
				],
				[
					99.3333740234375,
					8.66668701171875
				],
				[
					89.3333740234375,
					6
				],
				[
					83.3333740234375,
					4
				],
				[
					77.3333740234375,
					2.66668701171875
				],
				[
					70.666748046875,
					-0.6666259765625
				],
				[
					62,
					-2
				],
				[
					53.3333740234375,
					-2
				],
				[
					47.3333740234375,
					-4
				],
				[
					41.3333740234375,
					-5.33331298828125
				],
				[
					35.3333740234375,
					-5.33331298828125
				],
				[
					28.666748046875,
					-7.33331298828125
				],
				[
					22.666748046875,
					-7.33331298828125
				],
				[
					18.666748046875,
					-8.6666259765625
				],
				[
					11.3333740234375,
					-8.6666259765625
				],
				[
					8.666748046875,
					-8.6666259765625
				],
				[
					4,
					-8.6666259765625
				],
				[
					2,
					-8.6666259765625
				],
				[
					0.666748046875,
					-8.6666259765625
				],
				[
					-2,
					-8.6666259765625
				],
				[
					-3.333251953125,
					-8.6666259765625
				],
				[
					-5.333251953125,
					-8.6666259765625
				],
				[
					-6,
					-8
				],
				[
					-8,
					-7.33331298828125
				],
				[
					-8,
					-6.6666259765625
				],
				[
					-8.6666259765625,
					-6.6666259765625
				],
				[
					-10,
					-4.6666259765625
				],
				[
					-10,
					-4.6666259765625
				]
			],
			"pressures": [],
			"simulatePressure": true,
			"lastCommittedPoint": [
				-10,
				-4.6666259765625
			]
		}
	],
	"appState": {
		"theme": "dark",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#1e1e1e",
		"currentItemBackgroundColor": "transparent",
		"currentItemFillStyle": "hachure",
		"currentItemStrokeWidth": 1,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 2,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 1,
		"currentItemFontSize": 28,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"scrollX": 129.5830078125,
		"scrollY": 891.8957595825195,
		"zoom": {
			"value": 1
		},
		"currentItemRoundness": "round",
		"gridSize": null,
		"gridColor": {
			"Bold": "#C9C9C9FF",
			"Regular": "#EDEDEDFF"
		},
		"currentStrokeOptions": null,
		"previousGridSize": null,
		"frameRendering": {
			"enabled": true,
			"clip": true,
			"name": true,
			"outline": true
		}
	},
	"files": {}
}
```
%%