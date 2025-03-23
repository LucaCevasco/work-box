import{d as y,e as h,f as A,g as u,h as b,i as I}from"./chunk-HIF74G4E.mjs";import{a as c}from"./chunk-MBLBBOL4.mjs";import{a as p}from"./chunk-YSXGDEY5.mjs";import{Tool as l}from"@goat-sdk/core";import{EVMWalletClient as i}from"@goat-sdk/wallet-evm";function d(m,e,o,t){var n=arguments.length,s=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,o):t,g;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(m,e,o,t);else for(var f=m.length-1;f>=0;f--)(g=m[f])&&(s=(n<3?g(s):n>3?g(e,o,s):g(e,o))||s);return n>3&&s&&Object.defineProperty(e,o,s),s}p(d,"_ts_decorate");function r(m,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(m,e)}p(r,"_ts_metadata");var a=class{static{p(this,"ServiceAgreementService")}constructor(){}async createAgreement(e,o){try{return{transactionHash:(await o.sendTransaction({to:e.contractAddress,abi:c,functionName:"createAgreement",args:[e.serviceProvider,e.termsHash,e.milestoneDescriptions,e.milestoneAmounts.map(n=>BigInt(n)),e.milestoneDealines.map(n=>BigInt(n))],value:BigInt(e.value)})).hash,message:"Agreement creation transaction sent successfully"}}catch(t){throw console.error(t),Error(`Failed to create Agreement: ${t}`)}}async completeBatchMilestones(e,o){try{return{transactionHash:(await o.sendTransaction({to:e.contractAddress,abi:c,functionName:"completeBatchMilestones",args:[BigInt(e.agreementId),e.milestoneIndices]})).hash,message:"Batch milestone completion transaction sent successfully"}}catch(t){throw Error(`Failed to complete batch milestones: ${t}`)}}async initiateDispute(e,o){try{return{transactionHash:(await o.sendTransaction({to:e.contractAddress,abi:c,functionName:"initiateDispute",args:[BigInt(e.agreementId)]})).hash,message:"Dispute initiation transaction sent successfully"}}catch(t){throw Error(`Failed to initiate dispute: ${t}`)}}async getAgreement(e,o){try{let n=(await o.read({address:e.contractAddress,abi:c,functionName:"getAgreement",args:[BigInt(e.agreementId)]})).value;return{client:n[0],serviceProvider:n[1],totalAmount:n[2].toString(),status:["Created","Ongoing","Completed","Disputed","Cancelled"][Number(n[3])],termsHash:n[4],completedMilestones:n[5].toString(),createdAt:n[6].toString()}}catch(t){throw Error(`Failed to get agreement: ${t}`)}}async getMilestone(e,o){try{let n=(await o.read({address:e.contractAddress,abi:c,functionName:"getMilestone",args:[BigInt(e.agreementId),BigInt(e.milestoneIndex)]})).value;return{description:n[0],amount:n[1].toString(),completed:n[2],deadline:n[3].toString()}}catch(t){throw Error(`Failed to get milestone: ${t}`)}}async getNextAgreementId(e,o){try{return{nextAgreementId:(await o.read({address:e.contractAddress,abi:c,functionName:"nextAgreementId"})).value.toString()}}catch(t){throw Error(`Failed to get next agreement ID: ${t}`)}}async getAgreementStatus(e,o){try{let n=(await o.read({address:e.contractAddress,abi:c,functionName:"getAgreement",args:[BigInt(e.agreementId)]})).value,s={0:"Created",1:"Ongoing",2:"Completed",3:"Disputed",4:"Cancelled"};return{agreementId:e.agreementId,status:s[n[3]],statusCode:n[3]}}catch(t){throw Error(`Failed to get agreement status: ${t}`)}}};d([l({description:"Create a new service agreement with milestones"}),r("design:type",Function),r("design:paramtypes",[typeof y>"u"?Object:y,typeof i>"u"?Object:i]),r("design:returntype",Promise)],a.prototype,"createAgreement",null);d([l({description:"Complete multiple milestones at once for a service agreement"}),r("design:type",Function),r("design:paramtypes",[typeof h>"u"?Object:h,typeof i>"u"?Object:i]),r("design:returntype",Promise)],a.prototype,"completeBatchMilestones",null);d([l({description:"Initiate a dispute for an agreement"}),r("design:type",Function),r("design:paramtypes",[typeof A>"u"?Object:A,typeof i>"u"?Object:i]),r("design:returntype",Promise)],a.prototype,"initiateDispute",null);d([l({description:"Get detailed information about an agreement"}),r("design:type",Function),r("design:paramtypes",[typeof u>"u"?Object:u,typeof i>"u"?Object:i]),r("design:returntype",Promise)],a.prototype,"getAgreement",null);d([l({description:"Get detailed information about a specific milestone"}),r("design:type",Function),r("design:paramtypes",[typeof b>"u"?Object:b,typeof i>"u"?Object:i]),r("design:returntype",Promise)],a.prototype,"getMilestone",null);d([l({description:"Get the next agreement ID that will be used for the next created agreement"}),r("design:type",Function),r("design:paramtypes",[typeof I>"u"?Object:I,typeof i>"u"?Object:i]),r("design:returntype",Promise)],a.prototype,"getNextAgreementId",null);d([l({description:"Get the status of an agreement"}),r("design:type",Function),r("design:paramtypes",[typeof u>"u"?Object:u,typeof i>"u"?Object:i]),r("design:returntype",Promise)],a.prototype,"getAgreementStatus",null);export{a};
