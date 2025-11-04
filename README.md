<p align="center">
    <img src="dapp/public/logo.png" alt="SafeRoads Hedera Logo" width="90" height="90" />
</p>

# SafeRoads Hedera

## Table of Contents

- [Problem](#problem)
- [Solution](#solution)
- [Deployment & Demo](#deployment--demo)
- [Smart Contracts on Hedera Testnet](#smart-contracts-on-hedera-testnet)
- [Key Features](#key-features)
- [Getting Started](#getting-started)

> Turning "why should I report?" into "heck yes, I'll report!" — powered by Hedera Hashgraph

SafeRoads Hedera is a decentralized platform built on **Hedera Hashgraph** that rewards citizens for reporting real road incidents — potholes, accidents, or other road hazards — and stores them **on-chain for transparency**.  
Once verified, reporters earn **HBAR tokens** for their contribution to safer cities.

## Problem

In busy metro cities like **New Delhi**, road issues are everywhere — but no one reports them.  
People don't have time, there's no incentive, and existing systems lack transparency.  
As a result, governments don't get reliable data, and citizens stop caring.

---

## Solution

SafeRoads Hedera makes civic participation **rewarding and verifiable**.

- Citizens report road incidents through a simple **dApp** (location + image + description).  
- Reports are recorded on the **Hedera blockchain**, ensuring public visibility and immutability.  
- Verified reports earn **HBAR token rewards**.  
- Lightning-fast finality (3-5 seconds) and predictable low fees ($0.0001 USD).

---

## Deployment & Demo

- **Deployment link of main dapp:**  
    [Coming Soon - Hedera Deployment]

- **Demo screencasts of the dapp:**  
    [Demo Links Coming Soon]

---

## Smart Contracts on Hedera Testnet

SafeRoads Hedera uses two main smart contracts, both deployed on the Hedera testnet:

### 1. IncidentContract
- **Block Explorer:** [Deployed on Hedera Testnet]
- **Purpose:** This is the main contract for the dApp. It manages the full lifecycle of incident reporting: accepting new reports, storing incident data, keeping a record of reporters, and distributing HBAR rewards to verified users. All actions are recorded on-chain for transparency and auditability with Hedera's hashgraph consensus providing fast finality.

### 2. PPTToken (HTS Compatible)
- **Block Explorer:** [Deployed on Hedera Testnet]
- **Purpose:** ERC-20 compatible reward token that integrates with Hedera Token Service (HTS). This token incentivizes quality incident reports and community participation. The token can be earned through verified incident reports and used within the SafeRoads ecosystem.

---

## Key Features

### ⚡ Hedera Hashgraph Benefits
- **Fast Finality**: 3-5 second transaction finality with hashgraph consensus
- **Low Cost**: Predictable $0.0001 USD transaction fees for all operations  
- **Carbon Negative**: Built on the most energy-efficient public ledger technology
- **High Throughput**: Capable of handling thousands of incident reports per second

### 🏗️ Three-Component Architecture
1. **Citizen Reporter Interface** (`/dapp`) - For reporting new incidents
2. **Incident Verification Dashboard** (`/incident-verification`) - For authorities to verify and reward reports  
3. **Smart Contract System** (`/contracts`) - Managing incidents and rewards on Hedera blockchain

### 📱 User Experience
- **Wallet Integration** - Connect MetaMask or HashPack to Hedera testnet
- **Incident Wizard** - Step-by-step guided reporting process
- **PDF Generation** - Professional incident reports with embedded metadata
- **IPFS Storage** - Decentralized document storage via Storacha
- **Real-time Dashboard** - Track incident status and earnings
- **Authority Portal** - Streamlined verification interface for officials

---

## Getting Started

### Prerequisites
- Node.js 18+
- Foundry/Forge for smart contracts
- MetaMask or HashPack wallet configured for Hedera testnet
- Storacha account for IPFS storage

### Quick Setup

```bash
# Clone the repo
git clone https://github.com/virtualvasu/road-incident-dapp-hedera.git
cd road-incident-dapp-hedera

# Deploy smart contracts
cd contracts
forge build
forge script script/Deploy.s.sol --rpc-url https://testnet.hashio.io/api --broadcast

# Install and run citizen dapp
cd ../dapp
npm install
npm run dev
# Opens at http://localhost:5173

# Install and run verification portal
cd ../incident-verification
npm install  
npm run dev
# Opens at http://localhost:5174
```

### Hedera Testnet Configuration
Add Hedera testnet to your wallet:
- **Network Name**: Hedera Testnet
- **RPC URL**: `https://testnet.hashio.io/api`
- **Chain ID**: 296
- **Currency Symbol**: HBAR
- **Block Explorer**: `https://hashscan.io/testnet`

---

## Technology Stack

- **Blockchain**: Hedera Hashgraph (Testnet)
- **Smart Contracts**: Solidity ^0.8.28 with Foundry
- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS 4.1
- **Web3**: Ethers.js 6.14 for blockchain interaction
- **Storage**: IPFS via Storacha (@web3-storage/w3up-client)
- **PDF Generation**: pdf-lib for document creation
- **Icons**: Lucide React

---

## User Workflows

### 👥 Citizen Reporting Flow
1. **Connect Wallet** - Link MetaMask/HashPack to Hedera testnet
2. **Report Incident** - Fill out incident details, location, photos
3. **Generate Documentation** - System creates professional incident reports
4. **IPFS Upload** - Documents stored on decentralized storage
5. **Blockchain Record** - Incident submitted to Hedera smart contract (3-5 sec finality)
6. **Track & Earn** - Monitor verification status and earn HBAR rewards

### 🏛️ Authority Verification Flow
1. **Owner Access** - Connect as contract owner/authorized verifier
2. **Review Dashboard** - Browse all unverified incident reports
3. **Evidence Analysis** - Review details, documentation, and proof
4. **Verification Decision** - Mark legitimate incidents as verified
5. **Automatic Rewards** - System distributes HBAR rewards to reporters

---

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Built with ⚡ on Hedera Hashgraph for safer roads*