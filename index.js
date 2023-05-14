#!/usr/bin/node

import inquirer from "inquirer";

const config = {};

const { prompt } = inquirer;

const gitLinks = [""];

const questions = [
	{
		type: "input",
		name: "projectName",
		message: "Please enter your new project's name.🌟",
		default: "nrs-project",
	},
	{
		type: "list",
		name: "projectType",
		message: "What type of the project you will be building.💖",
		choices: [ "Web Application", "Desktop Application"],
		default: "Web Application",
	},
	{
		type: "confirm",
		name: "typescript",
		message: "Will you be using Typescript? 🥳",
		default: "Yes",
	},
	{
		type: "list",
		name: "framework",
		message: "What Library/Framework are you planning to use? 🤔",
		choices: ["ReactJS", "AngularJS", "VueJS", "Svelte", "SolidJS"],
		default: "ReactJS",
	},
	{
		type: "checkbox",
		name: "packages",
		message: "What packages are you planning to use?",
		choices: ["NextAuth", "Tailwind", "Prisma"],
	},
	{
		type: "checkbox",
		name: "providers",
		message: "What providers are you using for this?",
		choices: [ "Discord", "Gmail", "Github"],
		default: ["Discord"],
	},
	{
		type: "list",
		name: "uiLibrary",
		message: "What UI Library are you using?",
		choices: ["None", "DaisyUI"],
		default: "None",
	},
	{
		type: "list",
		name: "database",
		message: "What database will you be using?📦",
		choices: ["MySQL", "SQL Lite", "PostgreSQL", "MongoDB"],
		default: "PostgreSQL",
	},
];

inquirer.prompt(questions).then((answers) => {
	//Do something
	console.log(answers);
	// config.projectName = projectName;
});