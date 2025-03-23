import{a as s}from"./chunk-YSXGDEY5.mjs";import{createToolParameters as t}from"@goat-sdk/core";import{z as e}from"zod";var n=class extends t(e.object({minGasToComplete:e.string().describe("The minimum gas required for transactions in the paymaster").default("10000")})){static{s(this,"DeployAgreementPairParameters")}},i=class extends t(e.object({contractAddress:e.string().describe("The address of the contract to check deployment status")})){static{s(this,"IsContractDeployedParameters")}},o=class extends t(e.object({index:e.number().describe("The index of the deployed contract to retrieve")})){static{s(this,"GetDeployedContractByIndexParameters")}},c=class extends t(e.object({contractAddress:e.string().describe("Address of the service agreement contract"),serviceProvider:e.string().describe("Address of the service provider"),termsHash:e.string().describe("IPFS hash of agreement terms"),milestoneDescriptions:e.array(e.string()).describe("Array of milestone descriptions"),milestoneAmounts:e.array(e.string()).describe("Array of milestone amounts in wei"),milestoneDealines:e.array(e.string()).describe("Array of milestone deadlines as unix timestamps"),value:e.string().describe("Total value to send with the transaction in wei, must equal sum of milestoneAmounts")})){static{s(this,"CreateAgreementParameters")}},d=class extends t(e.object({contractAddress:e.string().describe("Address of the service agreement contract"),agreementId:e.string().describe("ID of the agreement"),milestoneIndices:e.array(e.number()).describe("Array of milestone indices to mark as completed")})){static{s(this,"CompleteBatchMilestonesParameters")}},a=class extends t(e.object({contractAddress:e.string().describe("Address of the service agreement contract"),agreementId:e.string().describe("ID of the agreement to dispute")})){static{s(this,"InitiateDisputeParameters")}},m=class extends t(e.object({contractAddress:e.string().describe("Address of the service agreement contract"),agreementId:e.string().describe("ID of the agreement to retrieve")})){static{s(this,"GetAgreementParameters")}},b=class extends t(e.object({contractAddress:e.string().describe("Address of the service agreement contract"),agreementId:e.string().describe("ID of the agreement"),milestoneIndex:e.number().describe("Index of the milestone to retrieve")})){static{s(this,"GetMilestoneParameters")}},g=class extends t(e.object({contractAddress:e.string().describe("Address of the service agreement contract")})){static{s(this,"GetNextAgreementIdParameters")}};export{n as a,i as b,o as c,c as d,d as e,a as f,m as g,b as h,g as i};
