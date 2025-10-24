# Incident Management System

A decentralized incident reporting platform with blockchain-based record keeping and IPFS storage.

## Features

- **Direct Wallet Connection** - Connect MetaMask and start reporting immediately
- **Blockchain Timestamping** - Immutable incident records on Hedera
- **IPFS Storage** - Decentralized document storage via Storacha
- **PDF Report Generation** - Professional incident documentation
- **Smart Contract Integration** - Automated record keeping

## Project Structure

```
├── contracts/          # Smart contracts (Foundry)
│   ├── src/
│   │   └── IncidentContract.sol    # Incident storage contract
│   └── script/         # Deployment scripts
└── dapp/              # React frontend (Vite + TypeScript)
    └── src/
        ├── components/ # UI components
        └── lib/       # PDF generation utilities
```

## Setup

### Prerequisites
- Node.js 18+
- Foundry
- MetaMask wallet
- Storacha account

### 1. Clone Repository
```bash
git clone <repository-url>
cd road-incident-dapp-hedera
```

### 2. Deploy Contracts
```bash
cd contracts
npm install
forge build
./script/deploy-incident-manager.sh
```

### 3. Setup Frontend
```bash
cd dapp
npm install
cp .env.example .env
# Configure .env with your values (if needed)
npm run dev
```

## User Flow

### Step 1: Connect Services
- Connect MetaMask wallet
- Connect Storacha storage account

### Step 2: Report Incident
- Fill incident details (location, description, photos)
- Generate professional PDF report

### Step 3: Decentralized Storage
- Upload PDF to IPFS via Storacha
- Receive permanent content identifier (CID)

### Step 4: Blockchain Record
- Submit incident hash to smart contract
- Receive immutable transaction receipt

### Step 5: Completion
- Download PDF report
- Access permanent IPFS links
- View blockchain verification

## Smart Contracts

### IncidentContract.sol
- Stores incident metadata on-chain
- Links to IPFS-stored documents
- Provides incident search by ID

## Technology Stack

- **Frontend**: React + TypeScript + Vite + Tailwind CSS
- **Blockchain**: Hedera (Testnet)
- **Storage**: IPFS via Storacha (Web3.Storage)
- **Contracts**: Solidity + Foundry
- **PDF**: pdf-lib for document generation

## Deployed Contracts (Hedera Testnet)

- **IncidentManager**: `0xf12ead27305b91a03afbb413a2ed2f028e4c9e6b`
- **Explorer**: https://hashscan.io/testnet/address/0xf12ead27305b91a03afbb413a2ed2f028e4c9e6b

## Key Benefits

- **Streamlined Process**: Connect wallet and start reporting immediately
- **Immutable Records**: Cannot be tampered with or lost
- **Decentralized**: No single point of failure
- **Professional**: Generates court-admissible documentation
- **User-Friendly**: Simple and intuitive interface

## Development

```bash
# Frontend development
cd dapp && npm run dev

# Contract development
cd contracts && forge test

# Deploy to testnet
forge script script/Deploy.s.sol --broadcast --rpc-url $RPC_URL
```

## License

MIT