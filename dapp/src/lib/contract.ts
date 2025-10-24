// IncidentManager Contract Configuration
// This file contains the contract address and ABI for the IncidentManager contract

// Contract deployed on Hedera Testnet (Chain ID: 296)
// Deployment: 2024-10-24
// Explorer: https://hashscan.io/testnet/address/0xf12ead27305b91a03afbb413a2ed2f028e4c9e6b
export const INCIDENT_MANAGER_ADDRESS = "0xf12ead27305b91a03afbb413a2ed2f028e4c9e6b";

export const INCIDENT_MANAGER_ABI = [
    {
        "type": "constructor",
        "inputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getIncident",
        "inputs": [
            {
                "name": "_id",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getLastIncidentId",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "incidentCounter",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "incidents",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "description",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "reportedBy",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "verified",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "reportIncident",
        "inputs": [
            {
                "name": "_description",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "verifyIncident",
        "inputs": [
            {
                "name": "_id",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "IncidentReported",
        "inputs": [
            {
                "name": "id",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "description",
                "type": "string",
                "indexed": false,
                "internalType": "string"
            },
            {
                "name": "reportedBy",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "timestamp",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "IncidentVerified",
        "inputs": [
            {
                "name": "id",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "verifiedBy",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    }
] as const;

// Export types for TypeScript support
export type IncidentManagerContract = {
    address: typeof INCIDENT_MANAGER_ADDRESS;
    abi: typeof INCIDENT_MANAGER_ABI;
};

// Helper function to get contract configuration
export const getIncidentManagerContract = (): IncidentManagerContract => ({
    address: INCIDENT_MANAGER_ADDRESS,
    abi: INCIDENT_MANAGER_ABI,
});

// Contract interface for better type safety
export interface Incident {
    id: bigint;
    description: string;
    reportedBy: string;
    timestamp: bigint;
    verified: boolean;
}

export interface IncidentData {
    id: string;
    description: string;
    reportedBy: string;
    timestamp: string;
    verified: boolean;
    ipfsUrl: string;
}