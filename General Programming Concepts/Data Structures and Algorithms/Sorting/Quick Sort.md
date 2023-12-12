---

excalidraw-plugin: parsed
tags: [excalidraw]

---
==⚠  Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document. ⚠==


# Text Elements
12, 22, 3, 45, 67, 2, 20 ^xdGwAJhE

To implement, first choose a pivot point.

From there, loop up to, but not including
the pivot, and if a value is less than
the pivot value, throw it on the left
side of the array. If it is greater, throw
it on the right side of the array. ^Kv4Kvqn4

Example ^CSMIm1RM

pivot point: arr.Length ^vJfgycxD

pivot value: 20 ^xgEbqQty

Is 12 less than 20?
Yes!
12 goes to the left of 20. ^otSWNiXM

12, 22, 3, 45, 67, 2, 20 ^86xd4Zj1

Is 22 less than 20?
No!
22 goes to the right of 20. ^uOxAQ1XW

Continue Weak Sorting until you have ^INUGNdLu

12, 3, 2, 20, 22, 45, 67 ^xDVw9mm4

Repeat for each of these new sections,
choosing a new pivot for each. ^jtJNt7Br

12, 3, 2, 20, 22, 45, 67 ^0uCka910

12, 3, 2, 20, 22, 45, 67 ^bUSkcjVp

67, 22, 3, 45, 12, 2, 20 ^iSsyUZ7y

Example ^XxWNU8aH

pivot point: arr.Length ^Y1j7DKfh

pivot value: 20 ^oqIWCHLd

Low pointer looks for
a number greater than
or equal to the pivot.
In this case, we found
the value right away. ^4nmDTpon

High pointer looks
for a number lower
than pivot, starting
from one less than
the pivot. ^9O31xM4Q

67, 22, 3, 45, 12, 2, 20 ^gB8fvCmg

high pointer: pivot point - 1

low pointer: 0 ^blMDxrOo

Now that we found both
values, swap them. ^fb6eb4bf

2, 22, 3, 45, 12, 67, 20 ^seUmoeE2

Continue to swap values
in this way until both
pointers are equal. ^IO2UGa7S

2, 12, 3, 45, 22, 67, 20 ^Cf4M5H6g

Here the pointer found
a value lower than the
pivot, so continue ^cTusbzPn

The high pointer found a bigger
value, so stop here. ^3AOrrqD1

2, 12, 3, 45, 22, 67, 20 ^QWc8cJnZ

Both pointers are now equal! ^prE48nS1

2, 12, 3, 45, 22, 67, 20 ^gmAjYPrN

Now swap the value at the
pointer overlap, and the pivot. ^jpLTa37T

2, 12, 3, 20, 22, 67, 45 ^C7U39zMA

Choose the new pivot
at n-1. ^sYTTY93L

2, 12, 3, 20, 22, 67, 45 ^x4kKwT30

Search with left and right pointers again.
In this case, they both match right away. ^LWoPRcVw

2, 12, 3, 20, 67, 22, 45 ^DQN4xTAQ

2, 12, 3, 67, 20, 22, 45 ^ZEJl8xlC

2, 12, 67, 3, 20, 22, 45 ^NB2AVnUj

2, 67, 12, 3, 20, 22, 45 ^OGWhF3kn

67, 2, 12, 3, 20, 22, 45 ^xHjgyStC

Something Wrong Past This Point ^THvFEAng

%%
# Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/1.9.19",
	"elements": [
		{
			"type": "freedraw",
			"version": 1029,
			"versionNonce": 716733537,
			"isDeleted": false,
			"id": "jdfZ2ewC6USgUUbcpYLOS",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 377.69428507486964,
			"y": -103.43753051757807,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 222031171,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076251,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1177,
			"versionNonce": 1482995247,
			"isDeleted": false,
			"id": "0q5jhn_YohRJY48ohlPwK",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 719.0275980631509,
			"y": -106.77078247070307,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 309546211,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076251,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 854,
			"versionNonce": 1443645505,
			"isDeleted": false,
			"id": "xdGwAJhE",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 380.36081949869777,
			"y": -73.10418701171875,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.9839172363281,
			"height": 35,
			"seed": 618510467,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076251,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "12, 22, 3, 45, 67, 2, 20",
			"rawText": "12, 22, 3, 45, 67, 2, 20",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "12, 22, 3, 45, 67, 2, 20",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "diamond",
			"version": 600,
			"versionNonce": 367794255,
			"isDeleted": false,
			"id": "k7OB8stT8mFAeoLN4rOnL",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 672.4110888605828,
			"y": -85.4647202665812,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 52.626023403194154,
			"seed": 1111076899,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "eGW8RCeMSglqxQkUO9mY1",
					"type": "arrow"
				}
			],
			"updated": 1701871076251,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 502,
			"versionNonce": 549165089,
			"isDeleted": false,
			"id": "Kv4Kvqn4",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": -300.97224934895837,
			"y": -275.21534220377606,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 412.6796569824219,
			"height": 175,
			"seed": 113625475,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076251,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "To implement, first choose a pivot point.\n\nFrom there, loop up to, but not including\nthe pivot, and if a value is less than\nthe pivot value, throw it on the left\nside of the array. If it is greater, throw\nit on the right side of the array.",
			"rawText": "To implement, first choose a pivot point.\n\nFrom there, loop up to, but not including\nthe pivot, and if a value is less than\nthe pivot value, throw it on the left\nside of the array. If it is greater, throw\nit on the right side of the array.",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "To implement, first choose a pivot point.\n\nFrom there, loop up to, but not including\nthe pivot, and if a value is less than\nthe pivot value, throw it on the left\nside of the array. If it is greater, throw\nit on the right side of the array.",
			"lineHeight": 1.25,
			"baseline": 167
		},
		{
			"type": "rectangle",
			"version": 743,
			"versionNonce": 209860207,
			"isDeleted": false,
			"id": "yS7ODjRYALJYuWUC3OtJP",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 281.694376627604,
			"y": -268.1041259765625,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 546,
			"height": 1373.3333740234377,
			"seed": 2004365325,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1701871076251,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 242,
			"versionNonce": 481684481,
			"isDeleted": false,
			"id": "CSMIm1RM",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 477.694376627604,
			"y": -335.4374694824219,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 138.2039337158203,
			"height": 45,
			"seed": 841912739,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076251,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 1,
			"text": "Example",
			"rawText": "Example",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Example",
			"lineHeight": 1.25,
			"baseline": 31
		},
		{
			"type": "text",
			"version": 183,
			"versionNonce": 586125455,
			"isDeleted": false,
			"id": "vJfgycxD",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 464.3610026041665,
			"y": -221.1041259765625,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 217.35980224609375,
			"height": 25,
			"seed": 399402893,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076251,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "pivot point: arr.Length",
			"rawText": "pivot point: arr.Length",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "pivot point: arr.Length",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "text",
			"version": 170,
			"versionNonce": 1912259553,
			"isDeleted": false,
			"id": "xgEbqQty",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 463.3610026041665,
			"y": -180.1041259765625,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 151.27987670898438,
			"height": 25,
			"seed": 1489735587,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076251,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "pivot value: 20",
			"rawText": "pivot value: 20",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "pivot value: 20",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "diamond",
			"version": 664,
			"versionNonce": 1391240879,
			"isDeleted": false,
			"id": "PfWMjj1-CnZaJ7gdLQX8q",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 363.7717188182844,
			"y": -83.75038963128458,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 52.626023403194154,
			"seed": 21475587,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "pQE6kQF4Tw0dP83bhbx9R",
					"type": "arrow"
				}
			],
			"updated": 1701871076251,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 594,
			"versionNonce": 479829953,
			"isDeleted": false,
			"id": "pQE6kQF4Tw0dP83bhbx9R",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 547.0278116861978,
			"y": 21.22930908203125,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 142.666748046875,
			"height": 54.666748046875,
			"seed": 1480958403,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076251,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "otSWNiXM",
				"focus": 0.3658365828961416,
				"gap": 7.6666259765625
			},
			"endBinding": {
				"elementId": "PfWMjj1-CnZaJ7gdLQX8q",
				"focus": 0.7421992934101047,
				"gap": 6.140174757595975
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-142.666748046875,
					-54.666748046875
				]
			]
		},
		{
			"type": "arrow",
			"version": 652,
			"versionNonce": 1260517583,
			"isDeleted": false,
			"id": "eGW8RCeMSglqxQkUO9mY1",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 543.0278116861978,
			"y": 20.56268310546875,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 135.9998779296875,
			"height": 56,
			"seed": 488035779,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076251,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "otSWNiXM",
				"focus": -0.6578868744171907,
				"gap": 8.333251953125
			},
			"endBinding": {
				"elementId": "k7OB8stT8mFAeoLN4rOnL",
				"focus": -0.552181624096275,
				"gap": 13.088631872209422
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					135.9998779296875,
					-56
				]
			]
		},
		{
			"type": "text",
			"version": 463,
			"versionNonce": 1790050209,
			"isDeleted": false,
			"id": "otSWNiXM",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 445.69431559244777,
			"y": 28.89593505859375,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 268.5597839355469,
			"height": 75,
			"seed": 359717901,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "pQE6kQF4Tw0dP83bhbx9R",
					"type": "arrow"
				},
				{
					"id": "eGW8RCeMSglqxQkUO9mY1",
					"type": "arrow"
				}
			],
			"updated": 1701871076251,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Is 12 less than 20?\nYes!\n12 goes to the left of 20.",
			"rawText": "Is 12 less than 20?\nYes!\n12 goes to the left of 20.",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Is 12 less than 20?\nYes!\n12 goes to the left of 20.",
			"lineHeight": 1.25,
			"baseline": 67
		},
		{
			"type": "freedraw",
			"version": 1064,
			"versionNonce": 1361577711,
			"isDeleted": false,
			"id": "Tcs-YnYuba2tll2fOvC76",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 381.69428507486964,
			"y": 175.5625762939453,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 1309279299,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076251,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1212,
			"versionNonce": 980640641,
			"isDeleted": false,
			"id": "lmXR9WoZ3QGMpYn81jkyo",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 723.0275980631509,
			"y": 172.2293243408203,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 1600553955,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076251,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 890,
			"versionNonce": 1669812495,
			"isDeleted": false,
			"id": "86xd4Zj1",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 384.36081949869777,
			"y": 205.8959197998047,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.9839172363281,
			"height": 35,
			"seed": 2085752707,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "12, 22, 3, 45, 67, 2, 20",
			"rawText": "12, 22, 3, 45, 67, 2, 20",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "12, 22, 3, 45, 67, 2, 20",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "diamond",
			"version": 635,
			"versionNonce": 2015185761,
			"isDeleted": false,
			"id": "Lx8JoU_iXQul9MBeQ4KA7",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 676.4110888605828,
			"y": 193.53538654494218,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 52.626023403194154,
			"seed": 1997219619,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "fTjwBcinL3f43RqpHlW40",
					"type": "arrow"
				}
			],
			"updated": 1701871076252,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 738,
			"versionNonce": 465065775,
			"isDeleted": false,
			"id": "zMGwztq9hYytGIvNCiCYv",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 424.4384668651594,
			"y": 195.2497171802388,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 52.626023403194154,
			"seed": 1442859715,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "MZINqpO0f7CFlhvQPJkjr",
					"type": "arrow"
				}
			],
			"updated": 1701871076252,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 823,
			"versionNonce": 1543452481,
			"isDeleted": false,
			"id": "MZINqpO0f7CFlhvQPJkjr",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 577.5632418928869,
			"y": 300.2294158935547,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 113.31796596536219,
			"height": 53.954817761511606,
			"seed": 1305475683,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "uOxAQ1XW",
				"focus": 0.3646409952748423,
				"gap": 7.6666259765625
			},
			"endBinding": {
				"elementId": "zMGwztq9hYytGIvNCiCYv",
				"focus": 0.7421992934101057,
				"gap": 6.140174757595997
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-113.31796596536219,
					-53.954817761511606
				]
			]
		},
		{
			"type": "arrow",
			"version": 901,
			"versionNonce": 1344510287,
			"isDeleted": false,
			"id": "fTjwBcinL3f43RqpHlW40",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 573.8079779386181,
			"y": 299.5627899169922,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 110.05156787805208,
			"height": 58.51636493457707,
			"seed": 2068362755,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "uOxAQ1XW",
				"focus": -0.49015816833348025,
				"gap": 8.333251953125
			},
			"endBinding": {
				"elementId": "Lx8JoU_iXQul9MBeQ4KA7",
				"focus": -0.37167341120575476,
				"gap": 10.667508172620565
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					110.05156787805208,
					-58.51636493457707
				]
			]
		},
		{
			"type": "text",
			"version": 522,
			"versionNonce": 1752737569,
			"isDeleted": false,
			"id": "uOxAQ1XW",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 449.69431559244777,
			"y": 307.8960418701172,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 284.33978271484375,
			"height": 75,
			"seed": 1567161763,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "MZINqpO0f7CFlhvQPJkjr",
					"type": "arrow"
				},
				{
					"id": "fTjwBcinL3f43RqpHlW40",
					"type": "arrow"
				}
			],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Is 22 less than 20?\nNo!\n22 goes to the right of 20.",
			"rawText": "Is 22 less than 20?\nNo!\n22 goes to the right of 20.",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Is 22 less than 20?\nNo!\n22 goes to the right of 20.",
			"lineHeight": 1.25,
			"baseline": 67
		},
		{
			"type": "text",
			"version": 257,
			"versionNonce": 1981912943,
			"isDeleted": false,
			"id": "INUGNdLu",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 362.36118570963527,
			"y": 458.89599609375,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 364.5196838378906,
			"height": 25,
			"seed": 321545283,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Continue Weak Sorting until you have",
			"rawText": "Continue Weak Sorting until you have",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Continue Weak Sorting until you have",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "freedraw",
			"version": 1185,
			"versionNonce": 670636801,
			"isDeleted": false,
			"id": "Sdxx3vE6-TLZgUF7LutNf",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 381.02778116861964,
			"y": 722.5624542236328,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 949684131,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1333,
			"versionNonce": 1140511119,
			"isDeleted": false,
			"id": "kEgDr80iAx_P-KoO-PSuU",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 722.3610941569009,
			"y": 719.2292022705078,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 197139267,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 1042,
			"versionNonce": 721425121,
			"isDeleted": false,
			"id": "xDVw9mm4",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 383.69431559244777,
			"y": 752.8957977294922,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.98394775390625,
			"height": 35,
			"seed": 1279376099,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "12, 3, 2, 20, 22, 45, 67",
			"rawText": "12, 3, 2, 20, 22, 45, 67",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "12, 3, 2, 20, 22, 45, 67",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "diamond",
			"version": 841,
			"versionNonce": 317179823,
			"isDeleted": false,
			"id": "8AD7W8H6eko98lK_uKCxt",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 505.7447070246453,
			"y": 740.5352644746297,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 52.626023403194154,
			"seed": 917399171,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 264,
			"versionNonce": 1176309441,
			"isDeleted": false,
			"id": "jtJNt7Br",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 359.02781168619777,
			"y": 839.8960266113281,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 394.6596374511719,
			"height": 50,
			"seed": 1113430925,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Repeat for each of these new sections,\nchoosing a new pivot for each.",
			"rawText": "Repeat for each of these new sections,\nchoosing a new pivot for each.",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Repeat for each of these new sections,\nchoosing a new pivot for each.",
			"lineHeight": 1.25,
			"baseline": 42
		},
		{
			"type": "freedraw",
			"version": 1249,
			"versionNonce": 17889743,
			"isDeleted": false,
			"id": "k-HXfHNtPjT0zjCaoSc3I",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 380.69440714518214,
			"y": 927.5625686645508,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 1044398787,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1397,
			"versionNonce": 267357857,
			"isDeleted": false,
			"id": "eYG8nYzQkaY6nwSbn0peS",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 722.0277201334634,
			"y": 924.2293167114258,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 458289763,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 1106,
			"versionNonce": 1401874415,
			"isDeleted": false,
			"id": "0uCka910",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 383.36094156901027,
			"y": 957.8959121704102,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.98394775390625,
			"height": 35,
			"seed": 1575661059,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "12, 3, 2, 20, 22, 45, 67",
			"rawText": "12, 3, 2, 20, 22, 45, 67",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "12, 3, 2, 20, 22, 45, 67",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "diamond",
			"version": 951,
			"versionNonce": 522654337,
			"isDeleted": false,
			"id": "vL5ZBQUlFEXFacXo4S0TN",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 454.7445849543328,
			"y": 948.2020659272664,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 52.626023403194154,
			"seed": 151778723,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 170,
			"versionNonce": 409604623,
			"isDeleted": false,
			"id": "JVmg7WRKu7stLab3VTNXq",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 374.36106363932277,
			"y": 771.8959655761719,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 0,
			"height": 24,
			"seed": 1088922285,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
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
					0,
					24
				]
			]
		},
		{
			"type": "line",
			"version": 205,
			"versionNonce": 142809697,
			"isDeleted": false,
			"id": "rJw3_ObEfthS-81zR4Oi2",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 375.69443766276027,
			"y": 797.2292785644531,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 127.3333740234375,
			"height": 0.6666259765625,
			"seed": 1939819715,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
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
					127.3333740234375,
					-0.6666259765625
				]
			]
		},
		{
			"type": "line",
			"version": 205,
			"versionNonce": 144373807,
			"isDeleted": false,
			"id": "cp4rTK1HalP3hYCbl-wPB",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 442.36094156901027,
			"y": 797.8959655761719,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 1.3333740234375,
			"height": 30,
			"seed": 1825676781,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
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
					1.3333740234375,
					30
				]
			]
		},
		{
			"type": "line",
			"version": 200,
			"versionNonce": 483599937,
			"isDeleted": false,
			"id": "zNuP3SpFT-zwm1guwsYwC",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 502.01326131776074,
			"y": 772.3702241045052,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 0.666748046875,
			"height": 24,
			"seed": 1831809965,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
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
					0.666748046875,
					24
				]
			]
		},
		{
			"type": "line",
			"version": 211,
			"versionNonce": 705305167,
			"isDeleted": false,
			"id": "NO80y74YwOCVayqzulewn",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 569.8714058403459,
			"y": 769.7163057777099,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 0,
			"height": 24,
			"seed": 671304653,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
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
					0,
					24
				]
			]
		},
		{
			"type": "line",
			"version": 268,
			"versionNonce": 1727444513,
			"isDeleted": false,
			"id": "sRsrrnRs9c-I_D8SweSTF",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 571.2047798637834,
			"y": 795.0496187659911,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 157.99999999999994,
			"height": 1.99993896484375,
			"seed": 916605485,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
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
					157.99999999999994,
					-1.99993896484375
				]
			]
		},
		{
			"type": "line",
			"version": 245,
			"versionNonce": 831518831,
			"isDeleted": false,
			"id": "4zvit_aYdIvCuh5j28iRW",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 653.8712837700334,
			"y": 794.3829927894286,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 0.666748046875,
			"height": 36,
			"seed": 1771207821,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
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
					0.666748046875,
					36
				]
			]
		},
		{
			"type": "line",
			"version": 241,
			"versionNonce": 1776110081,
			"isDeleted": false,
			"id": "_5qr1cH-jsIi8A6iiNrwJ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 728.8568554719091,
			"y": 767.5238772943243,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 0,
			"height": 24,
			"seed": 143483629,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
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
					0,
					24
				]
			]
		},
		{
			"type": "freedraw",
			"version": 1217,
			"versionNonce": 620040847,
			"isDeleted": false,
			"id": "qdldebamnivrJCeOAtFCQ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 378.36091105143214,
			"y": 512.8959350585938,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 85742467,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1365,
			"versionNonce": 512123361,
			"isDeleted": false,
			"id": "el6j_ub6LaQN3MrKKuHNn",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 719.6942240397134,
			"y": 509.56268310546875,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 1978460963,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 1074,
			"versionNonce": 1022486703,
			"isDeleted": false,
			"id": "bUSkcjVp",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 381.02744547526027,
			"y": 543.2292785644531,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.98394775390625,
			"height": 35,
			"seed": 470388419,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "12, 3, 2, 20, 22, 45, 67",
			"rawText": "12, 3, 2, 20, 22, 45, 67",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "12, 3, 2, 20, 22, 45, 67",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "diamond",
			"version": 867,
			"versionNonce": 838958529,
			"isDeleted": false,
			"id": "gqLGqMf1mcR3yPnWXzb1U",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 501.7444628840203,
			"y": 530.8687453095906,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 52.626023403194154,
			"seed": 168869475,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false
		},
		{
			"type": "rectangle",
			"version": 124,
			"versionNonce": 120519375,
			"isDeleted": false,
			"id": "H_tDz7cOR3ydY1WhQ-HgO",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 305.02768961588527,
			"y": 431.8960876464844,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 493.3333740234375,
			"height": 226,
			"seed": 1481389603,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 973,
			"versionNonce": 57548193,
			"isDeleted": false,
			"id": "mK4GWzzl0hWS4rAsFL1n4",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 564.7715967479719,
			"y": 946.5830759448875,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 52.626023403194154,
			"seed": 1422318595,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false
		},
		{
			"type": "freedraw",
			"version": 1144,
			"versionNonce": 1212467439,
			"isDeleted": false,
			"id": "Z9_LLt4PFtV-Uiwb3T4Ff",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1334.0793785411906,
			"y": -26.97764247922646,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 1355445731,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1301,
			"versionNonce": 1643889025,
			"isDeleted": false,
			"id": "7NPuFOY9Cq13vsQuKyWua",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1684.3317919956426,
			"y": -29.716269588650448,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 1080541571,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 979,
			"versionNonce": 498848527,
			"isDeleted": false,
			"id": "iSsyUZ7y",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1336.7459129650188,
			"y": 3.3557010266329144,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.9839172363281,
			"height": 35,
			"seed": 1369086243,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "fhqx5eVDZnvejNkRZ0OeW",
					"type": "arrow"
				}
			],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "67, 22, 3, 45, 12, 2, 20",
			"rawText": "67, 22, 3, 45, 12, 2, 20",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "67, 22, 3, 45, 12, 2, 20",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "rectangle",
			"version": 1266,
			"versionNonce": 183101793,
			"isDeleted": false,
			"id": "mQZF9BZZMaDQ2EIx_DHAr",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 992.5785437133793,
			"y": -260.64851794594256,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 1020.6666666666664,
			"height": 3869.1072589574674,
			"seed": 1554705507,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 3
			},
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 301,
			"versionNonce": 1611438383,
			"isDeleted": false,
			"id": "XxWNU8aH",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1429.250181310317,
			"y": -328.2463402841607,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 138.2039337158203,
			"height": 45,
			"seed": 368404483,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"fontSize": 36,
			"fontFamily": 1,
			"text": "Example",
			"rawText": "Example",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Example",
			"lineHeight": 1.25,
			"baseline": 31
		},
		{
			"type": "text",
			"version": 233,
			"versionNonce": 1736971585,
			"isDeleted": false,
			"id": "Y1j7DKfh",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1392.20508345448,
			"y": -232.6461017882512,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 217.35980224609375,
			"height": 25,
			"seed": 598699939,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "pivot point: arr.Length",
			"rawText": "pivot point: arr.Length",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "pivot point: arr.Length",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "text",
			"version": 225,
			"versionNonce": 1151310671,
			"isDeleted": false,
			"id": "oqIWCHLd",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1391.20508345448,
			"y": -185.70004388378243,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 151.27987670898438,
			"height": 25,
			"seed": 1745322819,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "pivot value: 20",
			"rawText": "pivot value: 20",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "pivot value: 20",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "diamond",
			"version": 808,
			"versionNonce": 188073249,
			"isDeleted": false,
			"id": "Cmzj4Gkm64Kd8-gs_jZJG",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1326.1029518458777,
			"y": -8.479724061400532,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 52.626023403194154,
			"seed": 2069635811,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "Y6q3UGdjUv-ntPLfdShMQ",
					"type": "arrow"
				}
			],
			"updated": 1701871076252,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 1449,
			"versionNonce": 1070422383,
			"isDeleted": false,
			"id": "Y6q3UGdjUv-ntPLfdShMQ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1350.6377426147887,
			"y": 139.9062545142998,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 1.8558898036772007,
			"height": 90.63550279034774,
			"seed": 1715195523,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "4nmDTpon",
				"focus": -0.26221712436510664,
				"gap": 4.48696882422621
			},
			"endBinding": {
				"elementId": "Cmzj4Gkm64Kd8-gs_jZJG",
				"focus": 0.06528424061852882,
				"gap": 5.715821189366135
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					1.8558898036772007,
					-90.63550279034774
				]
			]
		},
		{
			"type": "arrow",
			"version": 1755,
			"versionNonce": 1902278913,
			"isDeleted": false,
			"id": "fhqx5eVDZnvejNkRZ0OeW",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1608.4117219788677,
			"y": 140.760119905658,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 0.9077877210497718,
			"height": 89.33678469344045,
			"seed": 459605539,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "9O31xM4Q",
				"focus": -0.09840347986965738,
				"gap": 5.416869088233113
			},
			"endBinding": {
				"elementId": "a05P5YBNUkC4yCLox-R8w",
				"focus": -0.013531182242103656,
				"gap": 5.925622566333718
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-0.9077877210497718,
					-89.33678469344045
				]
			]
		},
		{
			"type": "ellipse",
			"version": 187,
			"versionNonce": 652104591,
			"isDeleted": false,
			"id": "CrjjRl_iDnWH4xm2TWe7J",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1631.1643425152465,
			"y": -7.826109430072563,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 53.51460279702269,
			"height": 54.703798046555676,
			"seed": 840642349,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "fhqx5eVDZnvejNkRZ0OeW",
					"type": "arrow"
				}
			],
			"updated": 1701871076252,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 860,
			"versionNonce": 2072883425,
			"isDeleted": false,
			"id": "a05P5YBNUkC4yCLox-R8w",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1577.8628348416378,
			"y": -7.084588968111348,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 52.626023403194154,
			"seed": 714095139,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "fhqx5eVDZnvejNkRZ0OeW",
					"type": "arrow"
				}
			],
			"updated": 1701871076252,
			"link": null,
			"locked": false
		},
		{
			"type": "text",
			"version": 302,
			"versionNonce": 302713263,
			"isDeleted": false,
			"id": "4nmDTpon",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1266.9675949789696,
			"y": 144.393223338526,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 223.9998321533203,
			"height": 125,
			"seed": 523040163,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "Y6q3UGdjUv-ntPLfdShMQ",
					"type": "arrow"
				}
			],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Low pointer looks for\na number greater than\nor equal to the pivot.\nIn this case, we found\nthe value right away.",
			"rawText": "Low pointer looks for\na number greater than\nor equal to the pivot.\nIn this case, we found\nthe value right away.",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Low pointer looks for\na number greater than\nor equal to the pivot.\nIn this case, we found\nthe value right away.",
			"lineHeight": 1.25,
			"baseline": 117
		},
		{
			"type": "text",
			"version": 301,
			"versionNonce": 793177281,
			"isDeleted": false,
			"id": "9O31xM4Q",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1521.1621760163027,
			"y": 146.1769889938911,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 195.21983337402344,
			"height": 125,
			"seed": 2022272931,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "fhqx5eVDZnvejNkRZ0OeW",
					"type": "arrow"
				}
			],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "High pointer looks\nfor a number lower\nthan pivot, starting\nfrom one less than\nthe pivot.",
			"rawText": "High pointer looks\nfor a number lower\nthan pivot, starting\nfrom one less than\nthe pivot.",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "High pointer looks\nfor a number lower\nthan pivot, starting\nfrom one less than\nthe pivot.",
			"lineHeight": 1.25,
			"baseline": 117
		},
		{
			"type": "line",
			"version": 156,
			"versionNonce": 2122054607,
			"isDeleted": false,
			"id": "kUcOOEwYnP68er372kwA8",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1628.1913816103493,
			"y": -28.042864175086635,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 0.5945704058324282,
			"height": 89.78562950540547,
			"seed": 1811930445,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076252,
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
					-0.5945704058324282,
					89.78562950540547
				]
			]
		},
		{
			"type": "freedraw",
			"version": 1174,
			"versionNonce": 875408545,
			"isDeleted": false,
			"id": "E-fZGIU1414rkuuunNwjy",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1343.052875738523,
			"y": 371.58453540621247,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 1164004387,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076252,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1331,
			"versionNonce": 810133999,
			"isDeleted": false,
			"id": "oAbpMZPkE_wHPykSeWwg8",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1693.305289192975,
			"y": 368.8459082967885,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 541708227,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 1009,
			"versionNonce": 301035649,
			"isDeleted": false,
			"id": "gB8fvCmg",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1345.719410162351,
			"y": 401.91787891207184,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.9839172363281,
			"height": 35,
			"seed": 2124472163,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "67, 22, 3, 45, 12, 2, 20",
			"rawText": "67, 22, 3, 45, 12, 2, 20",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "67, 22, 3, 45, 12, 2, 20",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "diamond",
			"version": 840,
			"versionNonce": 1417450511,
			"isDeleted": false,
			"id": "F7DdRdA_sZ8Uw8UTS8W7_",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1335.0764490432105,
			"y": 390.0824538240384,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 52.626023403194154,
			"seed": 179632899,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "Hq3_SqpMkJINGBFgNM9PM",
					"type": "arrow"
				}
			],
			"updated": 1701871076253,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 217,
			"versionNonce": 777107553,
			"isDeleted": false,
			"id": "jZ2hnnAC1UohknhCd11ut",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1640.1378397125793,
			"y": 390.73606845536636,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 53.51460279702269,
			"height": 54.703798046555676,
			"seed": 1967166947,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 892,
			"versionNonce": 1661811247,
			"isDeleted": false,
			"id": "sYLD1MxKRivtFZjmaT_UR",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1586.83633203897,
			"y": 391.4775889173276,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 52.626023403194154,
			"seed": 823779715,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "Hq3_SqpMkJINGBFgNM9PM",
					"type": "arrow"
				}
			],
			"updated": 1701871076253,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 186,
			"versionNonce": 186516545,
			"isDeleted": false,
			"id": "GkYL93Eo7StIDU4YqWxpH",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1637.164878807682,
			"y": 370.5193137103523,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 0.5945704058324282,
			"height": 89.78562950540547,
			"seed": 85003363,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
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
					-0.5945704058324282,
					89.78562950540547
				]
			]
		},
		{
			"type": "text",
			"version": 91,
			"versionNonce": 1088691279,
			"isDeleted": false,
			"id": "blMDxrOo",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1391.240757726738,
			"y": -139.82893242406732,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 261.17974853515625,
			"height": 75,
			"seed": 1315083267,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "high pointer: pivot point - 1\n\nlow pointer: 0",
			"rawText": "high pointer: pivot point - 1\n\nlow pointer: 0",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "high pointer: pivot point - 1\n\nlow pointer: 0",
			"lineHeight": 1.25,
			"baseline": 67
		},
		{
			"type": "arrow",
			"version": 244,
			"versionNonce": 1144378401,
			"isDeleted": false,
			"id": "Hq3_SqpMkJINGBFgNM9PM",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1371.9160763419482,
			"y": 449.42632318688277,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 235.46425230689965,
			"height": 55.893047733957815,
			"seed": 2086288867,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "F7DdRdA_sZ8Uw8UTS8W7_",
				"focus": 1.1079998866838605,
				"gap": 10.2968740771483
			},
			"endBinding": {
				"elementId": "sYLD1MxKRivtFZjmaT_UR",
				"focus": -1.0555591152007044,
				"gap": 9.575481035047744
			},
			"lastCommittedPoint": null,
			"startArrowhead": "arrow",
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					114.16448596698137,
					55.892993296088775
				],
				[
					235.46425230689965,
					-0.000054437869039247744
				]
			]
		},
		{
			"type": "line",
			"version": 55,
			"versionNonce": 567917167,
			"isDeleted": false,
			"id": "pIIoFaqvXI3l2lBeZqkOH",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1486.6751327147617,
			"y": 504.72474607713957,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 0.5946792815700519,
			"height": 35.67640186468179,
			"seed": 905238243,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
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
					0.5946792815700519,
					35.67640186468179
				]
			]
		},
		{
			"type": "text",
			"version": 114,
			"versionNonce": 1300801537,
			"isDeleted": false,
			"id": "fb6eb4bf",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1381.1325164489035,
			"y": 552.2932093128898,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 240.3798065185547,
			"height": 50,
			"seed": 221741411,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Now that we found both\nvalues, swap them.",
			"rawText": "Now that we found both\nvalues, swap them.",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Now that we found both\nvalues, swap them.",
			"lineHeight": 1.25,
			"baseline": 42
		},
		{
			"type": "freedraw",
			"version": 1219,
			"versionNonce": 716608655,
			"isDeleted": false,
			"id": "kwfmjs_3-ez0CICN18Zfd",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1339.4143173394298,
			"y": 654.1505260713259,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 354249101,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1376,
			"versionNonce": 1897267169,
			"isDeleted": false,
			"id": "Xoqn3aKZ-BAhzlQ62FUk9",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1689.6667307938817,
			"y": 651.4118989619019,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 1043509229,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 1060,
			"versionNonce": 1395862191,
			"isDeleted": false,
			"id": "seUmoeE2",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1342.080851763258,
			"y": 684.4838695771854,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.9839172363281,
			"height": 35,
			"seed": 1972382285,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "2, 22, 3, 45, 12, 67, 20",
			"rawText": "2, 22, 3, 45, 12, 67, 20",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2, 22, 3, 45, 12, 67, 20",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "diamond",
			"version": 939,
			"versionNonce": 216882113,
			"isDeleted": false,
			"id": "JTQSgfv8WpR0EZJNqTPIZ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1374.8442521633053,
			"y": 673.837639738685,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 52.626023403194154,
			"seed": 739203245,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "VJBeFi1OIZVA9eryyNt3R",
					"type": "arrow"
				}
			],
			"updated": 1701871076253,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 262,
			"versionNonce": 133692623,
			"isDeleted": false,
			"id": "prKspB4kgHsvjL0yQrT-R",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1636.499281313486,
			"y": 673.3020591204798,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 53.51460279702269,
			"height": 54.703798046555676,
			"seed": 2069478157,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 980,
			"versionNonce": 288242593,
			"isDeleted": false,
			"id": "zNcxf88U3h14H-G6LpMcz",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1525.5209602505543,
			"y": 674.638204426142,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 52.626023403194154,
			"seed": 199807341,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "VJBeFi1OIZVA9eryyNt3R",
					"type": "arrow"
				}
			],
			"updated": 1701871076253,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 231,
			"versionNonce": 211651311,
			"isDeleted": false,
			"id": "9LrQ-_3m71eYCx2KdJ3tq",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1633.5263204085888,
			"y": 653.0853043754657,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 0.5945704058324282,
			"height": 89.78562950540547,
			"seed": 990256077,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
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
					-0.5945704058324282,
					89.78562950540547
				]
			]
		},
		{
			"type": "text",
			"version": 455,
			"versionNonce": 1040719745,
			"isDeleted": false,
			"id": "IO2UGa7S",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1371.9994864982507,
			"y": 817.7423078359182,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 241.4597930908203,
			"height": 75,
			"seed": 1240592099,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Continue to swap values\nin this way until both\npointers are equal.",
			"rawText": "Continue to swap values\nin this way until both\npointers are equal.",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Continue to swap values\nin this way until both\npointers are equal.",
			"lineHeight": 1.25,
			"baseline": 67
		},
		{
			"type": "arrow",
			"version": 444,
			"versionNonce": 497833231,
			"isDeleted": false,
			"id": "VJBeFi1OIZVA9eryyNt3R",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1411.4200144350161,
			"y": 732.9702160663109,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 138.5432879906889,
			"height": 48.16314251732058,
			"seed": 79279309,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "JTQSgfv8WpR0EZJNqTPIZ",
				"focus": 1.042415067423842,
				"gap": 9.963015248821026
			},
			"endBinding": {
				"elementId": "zNcxf88U3h14H-G6LpMcz",
				"focus": -1.124008282246678,
				"gap": 7.675395540248129
			},
			"lastCommittedPoint": null,
			"startArrowhead": "arrow",
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					68.37984282446564,
					48.16314251732058
				],
				[
					138.5432879906889,
					0.5945159679629342
				]
			]
		},
		{
			"type": "line",
			"version": 109,
			"versionNonce": 565872481,
			"isDeleted": false,
			"id": "wrQf5qJ8S44TkutwOAlpJ",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1477.8192347133343,
			"y": 783.5559082637519,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 0.5945704058319734,
			"height": 26.16273099267937,
			"seed": 1333324259,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
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
					-0.5945704058319734,
					26.16273099267937
				]
			]
		},
		{
			"type": "freedraw",
			"version": 1296,
			"versionNonce": 1386011439,
			"isDeleted": false,
			"id": "P4a0utDob-pKa0HE1cKdP",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1328.5591396523241,
			"y": 970.3296435562042,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 199873283,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1453,
			"versionNonce": 1452602177,
			"isDeleted": false,
			"id": "0c-E_ICiGouldRemr9h49",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1678.811553106776,
			"y": 967.5910164467805,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 1440643747,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 1145,
			"versionNonce": 1071095119,
			"isDeleted": false,
			"id": "Cf4M5H6g",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1331.2256740761522,
			"y": 1000.6629870620638,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.9839172363281,
			"height": 35,
			"seed": 907882051,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "2, 12, 3, 45, 22, 67, 20",
			"rawText": "2, 12, 3, 45, 22, 67, 20",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2, 12, 3, 45, 22, 67, 20",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "diamond",
			"version": 1050,
			"versionNonce": 16180001,
			"isDeleted": false,
			"id": "4SOTPby3_NVe0Fnbvwj7b",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1400.2600467467132,
			"y": 990.6113276293954,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 52.626023403194154,
			"seed": 1870949859,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "7jLNMU0uvgYTWu0bPLNiX",
					"type": "arrow"
				}
			],
			"updated": 1701871076253,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 339,
			"versionNonce": 1488264047,
			"isDeleted": false,
			"id": "6XR0I3deA7Yfd3tb9auJj",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1625.6441036263805,
			"y": 989.4811766053583,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 53.51460279702269,
			"height": 54.703798046555676,
			"seed": 1696774531,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 1124,
			"versionNonce": 223336193,
			"isDeleted": false,
			"id": "4MZMAGjPzYuAOXxof7v1r",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1450.4483680827595,
			"y": 991.4119467547218,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 52.626023403194154,
			"seed": 339120419,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "gJcWMW9lIrsBYyvI0WzuZ",
					"type": "arrow"
				}
			],
			"updated": 1701871076253,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 308,
			"versionNonce": 293459343,
			"isDeleted": false,
			"id": "HHD2_s1XksgKOLpJq3mru",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1622.6711427214832,
			"y": 969.2644218603441,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 0.5945704058324282,
			"height": 89.78562950540547,
			"seed": 1311667395,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
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
					-0.5945704058324282,
					89.78562950540547
				]
			]
		},
		{
			"type": "arrow",
			"version": 1757,
			"versionNonce": 773803745,
			"isDeleted": false,
			"id": "7jLNMU0uvgYTWu0bPLNiX",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1326.0959955589778,
			"y": 1137.5669678207314,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 83.66156750809114,
			"height": 98.38759456071648,
			"seed": 235899523,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "cTusbzPn",
				"focus": -0.2621954622412567,
				"gap": 4.486968824226096
			},
			"endBinding": {
				"elementId": "4SOTPby3_NVe0Fnbvwj7b",
				"focus": 0.017323407446044402,
				"gap": 10.070451642558488
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					83.66156750809114,
					-98.38759456071648
				]
			]
		},
		{
			"type": "text",
			"version": 456,
			"versionNonce": 1097485231,
			"isDeleted": false,
			"id": "cTusbzPn",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1214.3447141066906,
			"y": 1142.0539366449575,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 228.73983764648438,
			"height": 75,
			"seed": 157368867,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "7jLNMU0uvgYTWu0bPLNiX",
					"type": "arrow"
				}
			],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Here the pointer found\na value lower than the\npivot, so continue",
			"rawText": "Here the pointer found\na value lower than the\npivot, so continue",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Here the pointer found\na value lower than the\npivot, so continue",
			"lineHeight": 1.25,
			"baseline": 67
		},
		{
			"type": "arrow",
			"version": 70,
			"versionNonce": 435473089,
			"isDeleted": false,
			"id": "gJcWMW9lIrsBYyvI0WzuZ",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1569.2656736482816,
			"y": 1138.8819774147544,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 73.06372423584867,
			"height": 94.92016909859262,
			"seed": 2013766403,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": {
				"elementId": "4MZMAGjPzYuAOXxof7v1r",
				"focus": 0.11632887785147664,
				"gap": 11.270061244205763
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-73.06372423584867,
					-94.92016909859262
				]
			]
		},
		{
			"type": "text",
			"version": 94,
			"versionNonce": 1151532495,
			"isDeleted": false,
			"id": "3AOrrqD1",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1568.3288463561187,
			"y": 1154.1816603359382,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 306.89971923828125,
			"height": 50,
			"seed": 1891495779,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "The high pointer found a bigger\nvalue, so stop here.",
			"rawText": "The high pointer found a bigger\nvalue, so stop here.",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "The high pointer found a bigger\nvalue, so stop here.",
			"lineHeight": 1.25,
			"baseline": 42
		},
		{
			"type": "freedraw",
			"version": 1331,
			"versionNonce": 158321313,
			"isDeleted": false,
			"id": "oBpinu6FXkCtQKGc05Jed",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1338.0506519480887,
			"y": 1265.430351229102,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 1880097229,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1488,
			"versionNonce": 1581280239,
			"isDeleted": false,
			"id": "hiMggTN5VY1Ys6YfMAhHk",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1688.3030654025406,
			"y": 1262.6917241196782,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 128466989,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 1180,
			"versionNonce": 1967115905,
			"isDeleted": false,
			"id": "QWc8cJnZ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1340.7171863719168,
			"y": 1295.7636947349613,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.9839172363281,
			"height": 35,
			"seed": 1382658701,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "2, 12, 3, 45, 22, 67, 20",
			"rawText": "2, 12, 3, 45, 22, 67, 20",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2, 12, 3, 45, 22, 67, 20",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "diamond",
			"version": 1189,
			"versionNonce": 1514870287,
			"isDeleted": false,
			"id": "WUn1fxUUtA4faVL5oYfg_",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1459.7096210145241,
			"y": 1277.5938945404616,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 64.49101595430773,
			"seed": 2098059501,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 374,
			"versionNonce": 337925729,
			"isDeleted": false,
			"id": "83_mcTyJKtlUF8b8f0xO2",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1635.135615922145,
			"y": 1284.5818842782558,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 53.51460279702269,
			"height": 54.703798046555676,
			"seed": 1629369165,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 1167,
			"versionNonce": 1874557999,
			"isDeleted": false,
			"id": "13WTZNGuuefDrw1hHgHzc",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1459.9398803785243,
			"y": 1283.3902398216032,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 55.74843800920997,
			"seed": 1794392493,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "mj_e0ZgmOXgilM_VLIb3C",
					"type": "arrow"
				}
			],
			"updated": 1701871076253,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 343,
			"versionNonce": 418177601,
			"isDeleted": false,
			"id": "SVcWK3ZZzGBT1I8Z6uOQf",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1632.1626550172477,
			"y": 1264.3651295332418,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 0.5945704058324282,
			"height": 89.78562950540547,
			"seed": 1069122573,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
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
					-0.5945704058324282,
					89.78562950540547
				]
			]
		},
		{
			"type": "arrow",
			"version": 98,
			"versionNonce": 1652170319,
			"isDeleted": false,
			"id": "mj_e0ZgmOXgilM_VLIb3C",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1489.3327973619769,
			"y": 1436.1322574794376,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 2.2737367544323206e-13,
			"height": 83.67967090316642,
			"seed": 1623899619,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"startBinding": null,
			"endBinding": {
				"elementId": "13WTZNGuuefDrw1hHgHzc",
				"focus": -0.01626134101862468,
				"gap": 9.912868387596593
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-2.2737367544323206e-13,
					-83.67967090316642
				]
			]
		},
		{
			"type": "text",
			"version": 88,
			"versionNonce": 813232673,
			"isDeleted": false,
			"id": "prE48nS1",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1435.3156078365942,
			"y": 1465.170358846376,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 286.3797607421875,
			"height": 25,
			"seed": 651637251,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Both pointers are now equal!",
			"rawText": "Both pointers are now equal!",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Both pointers are now equal!",
			"lineHeight": 1.25,
			"baseline": 17
		},
		{
			"type": "freedraw",
			"version": 1376,
			"versionNonce": 1700756591,
			"isDeleted": false,
			"id": "wbxqDH-ReETam2T0-1idq",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1340.6525142708929,
			"y": 1578.9832019396633,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 2066714351,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1533,
			"versionNonce": 1069024769,
			"isDeleted": false,
			"id": "j2LkrVjCQZ6NXnuOd-WLC",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1690.9049277253448,
			"y": 1576.2445748302396,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 1935530255,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 1225,
			"versionNonce": 1010046607,
			"isDeleted": false,
			"id": "gmAjYPrN",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1343.319048694721,
			"y": 1609.3165454455227,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.9839172363281,
			"height": 35,
			"seed": 2138955567,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "2, 12, 3, 45, 22, 67, 20",
			"rawText": "2, 12, 3, 45, 22, 67, 20",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2, 12, 3, 45, 22, 67, 20",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "diamond",
			"version": 1234,
			"versionNonce": 1638505953,
			"isDeleted": false,
			"id": "m7OpqaNYOupmk-V31leaK",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1462.3114833373288,
			"y": 1591.146745251023,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 64.49101595430773,
			"seed": 838345039,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false
		},
		{
			"type": "ellipse",
			"version": 420,
			"versionNonce": 498101423,
			"isDeleted": false,
			"id": "bC9gVnYuvSYcljONWUVe3",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1637.7374782449492,
			"y": 1598.1347349888172,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 53.51460279702269,
			"height": 54.703798046555676,
			"seed": 1009065839,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "cu-Ovl-gpovLoFGkQwo9T",
					"type": "arrow"
				}
			],
			"updated": 1701871076253,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 1214,
			"versionNonce": 626866625,
			"isDeleted": false,
			"id": "kphXU7qgOK0WkCDjss0bG",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1462.5417427013285,
			"y": 1596.943090532165,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 55.74843800920997,
			"seed": 273504655,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "cu-Ovl-gpovLoFGkQwo9T",
					"type": "arrow"
				}
			],
			"updated": 1701871076253,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 388,
			"versionNonce": 1434255055,
			"isDeleted": false,
			"id": "YuwYN0b2J-XZIJ-9xGZjr",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1634.764517340052,
			"y": 1577.9179802438036,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 0.5945704058324282,
			"height": 89.78562950540547,
			"seed": 1135169455,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
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
					-0.5945704058324282,
					89.78562950540547
				]
			]
		},
		{
			"type": "arrow",
			"version": 409,
			"versionNonce": 200432033,
			"isDeleted": false,
			"id": "cu-Ovl-gpovLoFGkQwo9T",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1500.7978476092896,
			"y": 1664.030089254255,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 157.81719348337015,
			"height": 48.04995834976671,
			"seed": 55638113,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "kphXU7qgOK0WkCDjss0bG",
				"focus": 1.2100233953868271,
				"gap": 14.641036137389275
			},
			"endBinding": {
				"elementId": "bC9gVnYuvSYcljONWUVe3",
				"focus": -1.0657629247479914,
				"gap": 10.876498176456792
			},
			"lastCommittedPoint": null,
			"startArrowhead": "arrow",
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					80.43890002948115,
					47.26549444498596
				],
				[
					157.81719348337015,
					-0.7844639047807505
				]
			]
		},
		{
			"type": "line",
			"version": 130,
			"versionNonce": 640830703,
			"isDeleted": false,
			"id": "RdKfDztpYlPzUKKeTRj4O",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1581.0470521898237,
			"y": 1714.6226297915703,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 0.5946792815700519,
			"height": 35.67640186468179,
			"seed": 2117420097,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871076253,
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
					0.5946792815700519,
					35.67640186468179
				]
			]
		},
		{
			"type": "text",
			"version": 270,
			"versionNonce": 1184398721,
			"isDeleted": false,
			"id": "jpLTa37T",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1475.5044359239655,
			"y": 1762.191093027321,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 298.91973876953125,
			"height": 50,
			"seed": 1382356001,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871076253,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Now swap the value at the\npointer overlap, and the pivot.",
			"rawText": "Now swap the value at the\npointer overlap, and the pivot.",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Now swap the value at the\npointer overlap, and the pivot.",
			"lineHeight": 1.25,
			"baseline": 42
		},
		{
			"type": "freedraw",
			"version": 1470,
			"versionNonce": 1032774753,
			"isDeleted": false,
			"id": "NJJDUrS1_iPFj7wEQukxd",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1350.6819666051767,
			"y": 1940.9846189475784,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 558964737,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1627,
			"versionNonce": 299216961,
			"isDeleted": false,
			"id": "vdXoIyiLYcr-V4vkP6nKE",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1700.9343800596287,
			"y": 1938.2459918381546,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 621770721,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 1327,
			"versionNonce": 1863843873,
			"isDeleted": false,
			"id": "C7U39zMA",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1353.3485010290049,
			"y": 1971.3179624534378,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.9839172363281,
			"height": 35,
			"seed": 1928844225,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "2, 12, 3, 20, 22, 67, 45",
			"rawText": "2, 12, 3, 20, 22, 67, 45",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2, 12, 3, 20, 22, 67, 45",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "diamond",
			"version": 1534,
			"versionNonce": 860181505,
			"isDeleted": false,
			"id": "4A9avuksRUfBj5F6kG1dv",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1334.340935671613,
			"y": 1955.148162258938,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 64.49101595430773,
			"seed": 1059697569,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 1385,
			"versionNonce": 1381837793,
			"isDeleted": false,
			"id": "TAoKlfi-iNRWBGZqM4cme",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1535.237821012175,
			"y": 1958.94450754008,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 55.74843800920997,
			"seed": 825753441,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 585,
			"versionNonce": 342820801,
			"isDeleted": false,
			"id": "hEPqD3SVeSNLbey4zxSk-",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1594.401894191799,
			"y": 1936.429188008842,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 0.5945704058324282,
			"height": 89.78562950540547,
			"seed": 128150337,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
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
					-0.5945704058324282,
					89.78562950540547
				]
			]
		},
		{
			"type": "ellipse",
			"version": 553,
			"versionNonce": 328886177,
			"isDeleted": false,
			"id": "cMCLYCl2LWvPYLRaHhiSF",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1598.835004623505,
			"y": 1959.926175442829,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 53.51460279702269,
			"height": 54.703798046555676,
			"seed": 416784943,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "L1jXarCli-8ebaskJvoUX",
					"type": "arrow"
				}
			],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"id": "L1jXarCli-8ebaskJvoUX",
			"type": "arrow",
			"x": 1630.9258021157661,
			"y": 2105.2781965364193,
			"width": 2,
			"height": 80.00012207031227,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"seed": 185365889,
			"version": 147,
			"versionNonce": 1274539791,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1701871145153,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-2,
					-80.00012207031227
				]
			],
			"lastCommittedPoint": null,
			"startBinding": null,
			"endBinding": {
				"elementId": "cMCLYCl2LWvPYLRaHhiSF",
				"focus": -0.08904932440003518,
				"gap": 10.798667412347445
			},
			"startArrowhead": null,
			"endArrowhead": "arrow"
		},
		{
			"id": "sYTTY93L",
			"type": "text",
			"x": 1537.5924280923289,
			"y": 2125.278074466107,
			"width": 208.3798065185547,
			"height": 50,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1736349025,
			"version": 85,
			"versionNonce": 702586689,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"text": "Choose the new pivot\nat n-1.",
			"rawText": "Choose the new pivot\nat n-1.",
			"fontSize": 20,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 42,
			"containerId": null,
			"originalText": "Choose the new pivot\nat n-1.",
			"lineHeight": 1.25
		},
		{
			"type": "freedraw",
			"version": 1499,
			"versionNonce": 1173163809,
			"isDeleted": false,
			"id": "ugqV3624zmGU5BSPRdvRF",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1348.947263571897,
			"y": 2273.392105703004,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 1978259535,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1656,
			"versionNonce": 715162369,
			"isDeleted": false,
			"id": "vlQXFhhF1LSlpxA8VF5yv",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1699.199677026349,
			"y": 2270.65347859358,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 650638959,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 1356,
			"versionNonce": 880442081,
			"isDeleted": false,
			"id": "x4kKwT30",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1351.6137979957252,
			"y": 2303.725449208863,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.9839172363281,
			"height": 35,
			"seed": 1853706383,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "2, 12, 3, 20, 22, 67, 45",
			"rawText": "2, 12, 3, 20, 22, 67, 45",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2, 12, 3, 20, 22, 67, 45",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "diamond",
			"version": 1677,
			"versionNonce": 67794625,
			"isDeleted": false,
			"id": "CsyVtCR0Nxh-_x1qvi9hn",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1533.2729196500522,
			"y": 2288.8889620026457,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 64.49101595430773,
			"seed": 1724016303,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 1490,
			"versionNonce": 2079323809,
			"isDeleted": false,
			"id": "VPOpDCa9S_eHDqN1W4xr6",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1533.5031179788953,
			"y": 2291.3519942955063,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 55.74843800920997,
			"seed": 1581234383,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "g-elzmVIyDgJrFi5ldkJQ",
					"type": "arrow"
				}
			],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "line",
			"version": 614,
			"versionNonce": 1837728353,
			"isDeleted": false,
			"id": "cHC29m5R_KnUoLSyDEJf8",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1592.6671911585195,
			"y": 2268.8366747642676,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 0.5945704058324282,
			"height": 89.78562950540547,
			"seed": 982370031,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
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
					-0.5945704058324282,
					89.78562950540547
				]
			]
		},
		{
			"type": "ellipse",
			"version": 582,
			"versionNonce": 1691127361,
			"isDeleted": false,
			"id": "vDBhPxvrQCvm7Fyk1s5Qx",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1597.1003015902252,
			"y": 2292.3336621982544,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 53.51460279702269,
			"height": 54.703798046555676,
			"seed": 439685391,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [
				{
					"id": "g-elzmVIyDgJrFi5ldkJQ",
					"type": "arrow"
				}
			],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "arrow",
			"version": 556,
			"versionNonce": 797226831,
			"isDeleted": false,
			"id": "g-elzmVIyDgJrFi5ldkJQ",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1563.7187085450091,
			"y": 2435.0189352449706,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 1.2964259747268443,
			"height": 74.01780976223108,
			"seed": 917378863,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871145153,
			"link": null,
			"locked": false,
			"startBinding": {
				"elementId": "LWoPRcVw",
				"focus": -0.01056593259637701,
				"gap": 9.9998779296875
			},
			"endBinding": {
				"elementId": "VPOpDCa9S_eHDqN1W4xr6",
				"focus": 0.025416875728401355,
				"gap": 10.011383756509218
			},
			"lastCommittedPoint": null,
			"startArrowhead": null,
			"endArrowhead": "arrow",
			"points": [
				[
					0,
					0
				],
				[
					-1.2964259747268443,
					-74.01780976223108
				]
			]
		},
		{
			"type": "text",
			"version": 363,
			"versionNonce": 1084011009,
			"isDeleted": false,
			"id": "LWoPRcVw",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1358.5243510356117,
			"y": 2445.018813174658,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"width": 416.0196533203125,
			"height": 50,
			"seed": 107043151,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [
				{
					"id": "g-elzmVIyDgJrFi5ldkJQ",
					"type": "arrow"
				}
			],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"fontSize": 20,
			"fontFamily": 1,
			"text": "Search with left and right pointers again.\nIn this case, they both match right away.",
			"rawText": "Search with left and right pointers again.\nIn this case, they both match right away.",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "Search with left and right pointers again.\nIn this case, they both match right away.",
			"lineHeight": 1.25,
			"baseline": 42
		},
		{
			"type": "freedraw",
			"version": 1549,
			"versionNonce": 503768513,
			"isDeleted": false,
			"id": "MzUrGlDb4fWP_wWiNJRnk",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1358.132969411978,
			"y": 2636.878433652332,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 609501711,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1706,
			"versionNonce": 445023649,
			"isDeleted": false,
			"id": "meEo2v4B1mc80HDsMDwI-",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1708.3853828664298,
			"y": 2634.1398065429084,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 2009016367,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 1422,
			"versionNonce": 1237789057,
			"isDeleted": false,
			"id": "DQN4xTAQ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1360.799503835806,
			"y": 2667.2117771581916,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.9839172363281,
			"height": 35,
			"seed": 86526543,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "2, 12, 3, 20, 67, 22, 45",
			"rawText": "2, 12, 3, 20, 67, 22, 45",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2, 12, 3, 20, 67, 22, 45",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "line",
			"version": 723,
			"versionNonce": 889737569,
			"isDeleted": false,
			"id": "LPOlJ2hh37OwUwpasnIhf",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1543.8528969986003,
			"y": 2635.6563767370344,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 0.5945704058324282,
			"height": 89.78562950540547,
			"seed": 545134767,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
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
					-0.5945704058324282,
					89.78562950540547
				]
			]
		},
		{
			"type": "ellipse",
			"version": 823,
			"versionNonce": 295271745,
			"isDeleted": false,
			"id": "0pvbCnS-loEWdby0AgcU4",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1546.2860074303055,
			"y": 2655.153303135864,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 53.51460279702269,
			"height": 54.703798046555676,
			"seed": 162867919,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 1720,
			"versionNonce": 1054485793,
			"isDeleted": false,
			"id": "KW5CLgNpZWM5KaFmglfyu",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1482.2214802006188,
			"y": 2651.699192465516,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 64.49101595430773,
			"seed": 250044577,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 1533,
			"versionNonce": 70902017,
			"isDeleted": false,
			"id": "-M6ztDI4Em8pi2ztIVL9f",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1482.4516785294618,
			"y": 2654.1622247583764,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 55.74843800920997,
			"seed": 1398056065,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "freedraw",
			"version": 1585,
			"versionNonce": 255334625,
			"isDeleted": false,
			"id": "-5HKJYZZse51NOj1nEGLw",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1360.4662213651025,
			"y": 2816.314105550116,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 1922122209,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1742,
			"versionNonce": 828658881,
			"isDeleted": false,
			"id": "kx06UbSFXgcIHOymBfGZ6",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1710.7186348195544,
			"y": 2813.575478440692,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 28335553,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 1468,
			"versionNonce": 1583223969,
			"isDeleted": false,
			"id": "ZEJl8xlC",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1363.1327557889306,
			"y": 2846.6474490559754,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.9839172363281,
			"height": 35,
			"seed": 977337761,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "2, 12, 3, 67, 20, 22, 45",
			"rawText": "2, 12, 3, 67, 20, 22, 45",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2, 12, 3, 67, 20, 22, 45",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "line",
			"version": 793,
			"versionNonce": 1775556737,
			"isDeleted": false,
			"id": "QFNTKLRaDZ1sXhranmpmx",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1492.8528969985998,
			"y": 2812.4253616230994,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 0.5945704058324282,
			"height": 89.78562950540547,
			"seed": 2071110017,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
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
					-0.5945704058324282,
					89.78562950540547
				]
			]
		},
		{
			"type": "ellipse",
			"version": 883,
			"versionNonce": 92807265,
			"isDeleted": false,
			"id": "sDTkeaYcs08aObxrmwfWz",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1488.61925938343,
			"y": 2834.588975033648,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 53.51460279702269,
			"height": 54.703798046555676,
			"seed": 310692193,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 1789,
			"versionNonce": 2135387201,
			"isDeleted": false,
			"id": "h8NOoA-oi3iFtmJaN_PiK",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1433.8879841068688,
			"y": 2835.1348643633005,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 64.49101595430773,
			"seed": 2026304833,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 1634,
			"versionNonce": 1056062497,
			"isDeleted": false,
			"id": "Gx8u1i_Y53IX80AG6fanP",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1434.1181824357118,
			"y": 2837.597896656161,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 55.74843800920997,
			"seed": 1368958241,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "freedraw",
			"version": 1617,
			"versionNonce": 74977281,
			"isDeleted": false,
			"id": "qCscXdYqA9cZsQuYHvEkR",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1363.7995953885404,
			"y": 2989.2667946308557,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 2018140879,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1774,
			"versionNonce": 1708681185,
			"isDeleted": false,
			"id": "eBS6ai98cJpYkGynqzy8d",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1714.0520088429923,
			"y": 2986.528167521432,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 1370697967,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 1506,
			"versionNonce": 220382145,
			"isDeleted": false,
			"id": "NB2AVnUj",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1366.4661298123685,
			"y": 3019.600138136715,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.9839172363281,
			"height": 35,
			"seed": 1025325839,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "2, 12, 67, 3, 20, 22, 45",
			"rawText": "2, 12, 67, 3, 20, 22, 45",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2, 12, 67, 3, 20, 22, 45",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "line",
			"version": 851,
			"versionNonce": 913744801,
			"isDeleted": false,
			"id": "jDix06MEsPQlPygJ2qMFa",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1448.853019068913,
			"y": 2982.7113636921204,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 0.5945704058324282,
			"height": 89.78562950540547,
			"seed": 1593901359,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
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
					-0.5945704058324282,
					89.78562950540547
				]
			]
		},
		{
			"type": "ellipse",
			"version": 959,
			"versionNonce": 1845725057,
			"isDeleted": false,
			"id": "WFvB4FIzmRVzrKHrhbbfJ",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1447.952633406868,
			"y": 3010.8749771026687,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 53.51460279702269,
			"height": 54.703798046555676,
			"seed": 952566607,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 1862,
			"versionNonce": 235466593,
			"isDeleted": false,
			"id": "VAEcnqjWjmajFTKD-vr86",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1389.8881061771817,
			"y": 3005.4208664323214,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 64.49101595430773,
			"seed": 180863343,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 1692,
			"versionNonce": 2094422849,
			"isDeleted": false,
			"id": "Jp9nGBbhinrDtNYR3SnH-",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1390.1183045060247,
			"y": 3007.883898725182,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 55.74843800920997,
			"seed": 1984674703,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "freedraw",
			"version": 1619,
			"versionNonce": 717966113,
			"isDeleted": false,
			"id": "rAl7x1NH2zjlxs1bUQpx0",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1369.79959538854,
			"y": 3150.054694149343,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 1760337615,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1776,
			"versionNonce": 1347895041,
			"isDeleted": false,
			"id": "FvtfrWeVYNFbDtucvJ-Qs",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1720.0520088429919,
			"y": 3147.3160670399193,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 1789783279,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 1516,
			"versionNonce": 1811527393,
			"isDeleted": false,
			"id": "OGWhF3kn",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1372.466129812368,
			"y": 3180.3880376552024,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.9839172363281,
			"height": 35,
			"seed": 1600157455,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "2, 67, 12, 3, 20, 22, 45",
			"rawText": "2, 67, 12, 3, 20, 22, 45",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "2, 67, 12, 3, 20, 22, 45",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "line",
			"version": 895,
			"versionNonce": 4338369,
			"isDeleted": false,
			"id": "J_24_D2sSHgFa37VHAovR",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1408.8531411392253,
			"y": 3146.8326372340453,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 0.5945704058324282,
			"height": 89.78562950540547,
			"seed": 1300020527,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
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
					-0.5945704058324282,
					89.78562950540547
				]
			]
		},
		{
			"type": "ellipse",
			"version": 995,
			"versionNonce": 298857121,
			"isDeleted": false,
			"id": "CHqmqqtah2ybEbGkYS2Aw",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1407.9526334068678,
			"y": 3168.3295025977186,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 53.51460279702269,
			"height": 54.703798046555676,
			"seed": 1483423567,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 1880,
			"versionNonce": 1699952257,
			"isDeleted": false,
			"id": "1CR6a2JYGGD2XqCeOPVkB",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1353.2213581303065,
			"y": 3166.208765950809,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 64.49101595430773,
			"seed": 579108207,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 1719,
			"versionNonce": 2106244705,
			"isDeleted": false,
			"id": "-35fzKs_rrotHvGngSj0l",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1353.4515564591495,
			"y": 3168.6717982436694,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 55.74843800920997,
			"seed": 1863382927,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "freedraw",
			"version": 1662,
			"versionNonce": 1497778753,
			"isDeleted": false,
			"id": "HRTxqO0HV3MyOCevHAn4Z",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1371.132969411978,
			"y": 3324.1654704783837,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 20.66668701171875,
			"height": 92.66668701171875,
			"seed": 1708239105,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					-0.66668701171875,
					0
				],
				[
					-2,
					0
				],
				[
					-3.3333740234375,
					0
				],
				[
					-4.66668701171875,
					0
				],
				[
					-6,
					0
				],
				[
					-7.3333740234375,
					0
				],
				[
					-8.66668701171875,
					0
				],
				[
					-10.66668701171875,
					0
				],
				[
					-13.3333740234375,
					0
				],
				[
					-14.66668701171875,
					0
				],
				[
					-16,
					0
				],
				[
					-17.3333740234375,
					0
				],
				[
					-18.66668701171875,
					0
				],
				[
					-19.3333740234375,
					0
				],
				[
					-19.3333740234375,
					1.33331298828125
				],
				[
					-19.3333740234375,
					8.66668701171875
				],
				[
					-19.3333740234375,
					14.66668701171875
				],
				[
					-19.3333740234375,
					22.66668701171875
				],
				[
					-19.3333740234375,
					28.66668701171875
				],
				[
					-19.3333740234375,
					35.33331298828125
				],
				[
					-19.3333740234375,
					40.66668701171875
				],
				[
					-19.3333740234375,
					46.66668701171875
				],
				[
					-19.3333740234375,
					52.66668701171875
				],
				[
					-19.3333740234375,
					58.66668701171875
				],
				[
					-19.3333740234375,
					62
				],
				[
					-19.3333740234375,
					66.66668701171875
				],
				[
					-19.3333740234375,
					68
				],
				[
					-19.3333740234375,
					70.66668701171875
				],
				[
					-19.3333740234375,
					74.66668701171875
				],
				[
					-19.3333740234375,
					77.33331298828125
				],
				[
					-19.3333740234375,
					81.33331298828125
				],
				[
					-19.3333740234375,
					84
				],
				[
					-19.3333740234375,
					86.66668701171875
				],
				[
					-19.3333740234375,
					88
				],
				[
					-19.3333740234375,
					89.33331298828125
				],
				[
					-19.3333740234375,
					90.66668701171875
				],
				[
					-20.66668701171875,
					92
				],
				[
					-20.66668701171875,
					92.66668701171875
				],
				[
					-18,
					92.66668701171875
				],
				[
					-16.66668701171875,
					92.66668701171875
				],
				[
					-15.3333740234375,
					92.66668701171875
				],
				[
					-14.66668701171875,
					92.66668701171875
				],
				[
					-13.3333740234375,
					92.66668701171875
				],
				[
					-12,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				],
				[
					-10.66668701171875,
					92.66668701171875
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "freedraw",
			"version": 1819,
			"versionNonce": 1902467617,
			"isDeleted": false,
			"id": "ztln6k-CtQb_kpxrxaMQo",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1721.3853828664298,
			"y": 3321.42684336896,
			"strokeColor": "#1971c2",
			"backgroundColor": "#a5d8ff",
			"width": 16.66668701171875,
			"height": 94,
			"seed": 2056708321,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"points": [
				[
					0,
					0
				],
				[
					0,
					0.6666259765625
				],
				[
					1.3333740234375,
					0.6666259765625
				],
				[
					2.66668701171875,
					0.6666259765625
				],
				[
					4,
					0.6666259765625
				],
				[
					5.3333740234375,
					0.6666259765625
				],
				[
					6.66668701171875,
					0.6666259765625
				],
				[
					7.3333740234375,
					0.6666259765625
				],
				[
					7.3333740234375,
					0
				],
				[
					8.66668701171875,
					0
				],
				[
					10,
					0
				],
				[
					12.66668701171875,
					0
				],
				[
					13.3333740234375,
					0
				],
				[
					13.3333740234375,
					4
				],
				[
					13.3333740234375,
					6.6666259765625
				],
				[
					13.3333740234375,
					12.6666259765625
				],
				[
					15.3333740234375,
					22.6666259765625
				],
				[
					16.66668701171875,
					28.6666259765625
				],
				[
					16.66668701171875,
					34.6666259765625
				],
				[
					16.66668701171875,
					37.33331298828125
				],
				[
					16.66668701171875,
					41.33331298828125
				],
				[
					16.66668701171875,
					44
				],
				[
					16.66668701171875,
					46.6666259765625
				],
				[
					16.66668701171875,
					50.6666259765625
				],
				[
					16.66668701171875,
					52
				],
				[
					16.66668701171875,
					53.33331298828125
				],
				[
					16.66668701171875,
					55.33331298828125
				],
				[
					16.66668701171875,
					56.6666259765625
				],
				[
					16.66668701171875,
					58
				],
				[
					16.66668701171875,
					62
				],
				[
					16.66668701171875,
					63.33331298828125
				],
				[
					16.66668701171875,
					64.6666259765625
				],
				[
					16.66668701171875,
					66
				],
				[
					16.66668701171875,
					68
				],
				[
					16.66668701171875,
					69.33331298828125
				],
				[
					16.66668701171875,
					70.6666259765625
				],
				[
					16.66668701171875,
					72
				],
				[
					16.66668701171875,
					73.33331298828125
				],
				[
					16.66668701171875,
					74.6666259765625
				],
				[
					16.66668701171875,
					76.6666259765625
				],
				[
					16.66668701171875,
					78
				],
				[
					16.66668701171875,
					82
				],
				[
					16.66668701171875,
					83.33331298828125
				],
				[
					16.66668701171875,
					86
				],
				[
					16,
					87.33331298828125
				],
				[
					16,
					90
				],
				[
					16,
					91.33331298828125
				],
				[
					16,
					92.6666259765625
				],
				[
					16,
					94
				],
				[
					15.3333740234375,
					94
				],
				[
					14,
					94
				],
				[
					12.66668701171875,
					94
				],
				[
					11.3333740234375,
					94
				],
				[
					10,
					94
				],
				[
					9.3333740234375,
					94
				],
				[
					8,
					94
				],
				[
					6.66668701171875,
					94
				],
				[
					4.66668701171875,
					94
				],
				[
					3.3333740234375,
					94
				],
				[
					3.3333740234375,
					94
				]
			],
			"lastCommittedPoint": null,
			"simulatePressure": true,
			"pressures": []
		},
		{
			"type": "text",
			"version": 1565,
			"versionNonce": 1993829889,
			"isDeleted": false,
			"id": "xHjgyStC",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1373.799503835806,
			"y": 3354.498813984243,
			"strokeColor": "#1971c2",
			"backgroundColor": "transparent",
			"width": 340.9839172363281,
			"height": 35,
			"seed": 1437211841,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"fontSize": 28,
			"fontFamily": 1,
			"text": "67, 2, 12, 3, 20, 22, 45",
			"rawText": "67, 2, 12, 3, 20, 22, 45",
			"textAlign": "left",
			"verticalAlign": "top",
			"containerId": null,
			"originalText": "67, 2, 12, 3, 20, 22, 45",
			"lineHeight": 1.25,
			"baseline": 24
		},
		{
			"type": "diamond",
			"version": 1967,
			"versionNonce": 1352402401,
			"isDeleted": false,
			"id": "sPKPAnAlJlqzc5azz3iCK",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1199.8880451420257,
			"y": 3338.9862903267244,
			"strokeColor": "#2f9e44",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 64.49101595430773,
			"seed": 121825377,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"type": "diamond",
			"version": 1787,
			"versionNonce": 1505927617,
			"isDeleted": false,
			"id": "7_VTAJfZwwp0wEs1pRcyY",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1200.1182434708683,
			"y": 3341.449322619585,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"width": 57.84519354832679,
			"height": 70,
			"seed": 241775681,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871144597,
			"link": null,
			"locked": false
		},
		{
			"id": "THvFEAng",
			"type": "text",
			"x": 1355.5925501626416,
			"y": 1862.2780744661072,
			"width": 324.959716796875,
			"height": 25,
			"angle": 0,
			"strokeColor": "#1e1e1e",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 1139409537,
			"version": 149,
			"versionNonce": 1600831905,
			"isDeleted": false,
			"boundElements": null,
			"updated": 1701871144597,
			"link": null,
			"locked": false,
			"text": "Something Wrong Past This Point",
			"rawText": "Something Wrong Past This Point",
			"fontSize": 20,
			"fontFamily": 1,
			"textAlign": "left",
			"verticalAlign": "top",
			"baseline": 17,
			"containerId": null,
			"originalText": "Something Wrong Past This Point",
			"lineHeight": 1.25
		},
		{
			"type": "line",
			"version": 904,
			"versionNonce": 2044460737,
			"isDeleted": true,
			"id": "-ic9vf4bFbtM8DAxRWQVa",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1406.8531411392253,
			"y": 3290.276726551367,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 0.5945704058324282,
			"height": 89.78562950540547,
			"seed": 111860897,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871089136,
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
					-0.5945704058324282,
					89.78562950540547
				]
			]
		},
		{
			"type": "ellipse",
			"version": 1005,
			"versionNonce": 1940316559,
			"isDeleted": true,
			"id": "XNpF6zDMOgo49c_TzH9-i",
			"fillStyle": "hachure",
			"strokeWidth": 1,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"angle": 0,
			"x": 1404.6192593834305,
			"y": 3311.7735919150405,
			"strokeColor": "#e03131",
			"backgroundColor": "transparent",
			"width": 53.51460279702269,
			"height": 54.703798046555676,
			"seed": 2101911681,
			"groupIds": [],
			"frameId": null,
			"roundness": {
				"type": 2
			},
			"boundElements": [],
			"updated": 1701871088434,
			"link": null,
			"locked": false
		},
		{
			"id": "ElhETpOu",
			"type": "text",
			"x": 1375.4128548462313,
			"y": 3334.6158875609913,
			"width": 10,
			"height": 25,
			"angle": 0,
			"strokeColor": "#f08c00",
			"backgroundColor": "transparent",
			"fillStyle": "hachure",
			"strokeWidth": 2,
			"strokeStyle": "solid",
			"roughness": 1,
			"opacity": 100,
			"groupIds": [],
			"frameId": null,
			"roundness": null,
			"seed": 505554881,
			"version": 5,
			"versionNonce": 369831457,
			"isDeleted": true,
			"boundElements": null,
			"updated": 1701871076254,
			"link": null,
			"locked": false,
			"text": "",
			"rawText": "",
			"fontSize": 20,
			"fontFamily": 1,
			"textAlign": "center",
			"verticalAlign": "middle",
			"baseline": 17,
			"containerId": "7_VTAJfZwwp0wEs1pRcyY",
			"originalText": "",
			"lineHeight": 1.25
		}
	],
	"appState": {
		"theme": "dark",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#1e1e1e",
		"currentItemBackgroundColor": "transparent",
		"currentItemFillStyle": "hachure",
		"currentItemStrokeWidth": 2,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 1,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 1,
		"currentItemFontSize": 20,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"scrollX": -826.0924280923291,
		"scrollY": -2190.81970044267,
		"zoom": {
			"value": 1.0000000000000004
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