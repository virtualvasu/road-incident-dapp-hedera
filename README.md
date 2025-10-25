# Road Incident DApp on Hedera

A comprehensive decentralized application for reporting, verifying, and managing road incidents built on the Hedera network. This system enables citizens to report incidents with blockchain immutability, professional PDF documentation, decentralized storage, and a reward mechanism for verified reports.

## 🌟 Overview

This project consists of three main components:
1. **Citizen Reporter Interface** - For reporting new incidents
2. **Incident Verification Dashboard** - For authorities to verify and reward reports  
3. **Smart Contract System** - Managing incidents and rewards on Hedera blockchain

## 🏗️ Architecture

```
├── contracts/                    # Smart contracts (Foundry/Solidity)
│   ├── src/IncidentContract.sol  # Main incident management contract
│   └── script/                   # Deployment and interaction scripts
├── dapp/                         # Citizen reporting interface (React)
│   └── src/components/          # Landing page, incident wizard, dashboard
└── incident-verification/       # Authority verification interface (React)
    └── src/components/          # Verification dashboard for officials
```

## ✨ Key Features

### For Citizens (Reporter Interface)
- **🔗 Wallet Integration** - Connect MetaMask to start reporting immediately
- **📋 Incident Wizard** - Step-by-step guided incident reporting process
- **📄 PDF Generation** - Professional incident reports with embedded metadata
- **☁️ IPFS Storage** - Decentralized document storage via Web3.Storage
- **📊 Dashboard** - Track your reported incidents and their status
- **💰 Rewards Tracker** - Monitor earnings from verified incident reports

### For Authorities (Verification Interface)
- **🔐 Owner-Only Access** - Restricted verification capabilities for authorized personnel
- **📈 Incident Overview** - Complete dashboard of all reported incidents
- **✅ Verification System** - Mark incidents as verified with blockchain confirmation
- **💸 Automated Rewards** - Automatic payment distribution to reporters
- **🔍 Detailed Review** - Access full incident details and documentation

### Smart Contract Features
- **🏪 Incident Storage** - Immutable on-chain incident records
- **👑 Access Control** - Owner-based verification and reward management
- **💎 Reward Mechanism** - Configurable HBAR rewards for verified reports
- **🕐 Timestamp Tracking** - Blockchain-verified incident timing
- **🔢 ID Management** - Sequential incident numbering and retrieval

## 🛠️ Technology Stack

- **Blockchain**: Hedera Hashgraph (Testnet)
- **Smart Contracts**: Solidity ^0.8.28 with Foundry
- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS 4.1
- **Web3**: Ethers.js 6.14 for blockchain interaction
- **Storage**: IPFS via Web3.Storage (@web3-storage/w3up-client)
- **PDF**: pdf-lib for document generation
- **Icons**: Lucide React

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Foundry/Forge
- MetaMask wallet
- Web3.Storage account (for IPFS)

### 1. Clone & Install
```bash
git clone https://github.com/virtualvasu/road-incident-dapp-hedera.git
cd road-incident-dapp-hedera

# Install contract dependencies
cd contracts && npm install

# Install dapp dependencies  
cd ../dapp && npm install

# Install verification app dependencies
cd ../incident-verification && npm install
```

### 2. Deploy Smart Contract
```bash
cd contracts
forge build
# Deploy to Hedera testnet
./script/deploy-incident-manager.sh
```

### 3. Launch Applications

**Citizen Reporter Interface:**
```bash
cd dapp
npm run dev
# Opens at http://localhost:5173
```

**Authority Verification Dashboard:**
```bash
cd incident-verification  
npm run dev
# Opens at http://localhost:5174
```

## 📱 User Workflows

### Citizen Reporting Flow
1. **Connect Wallet** - Link MetaMask to Hedera testnet
2. **Report Incident** - Fill out incident details, location, photos
3. **Generate PDF** - System creates professional incident documentation
4. **IPFS Upload** - Documents stored on decentralized storage
5. **Blockchain Record** - Incident hash submitted to smart contract
6. **Track Status** - Monitor verification status and potential rewards

### Authority Verification Flow
1. **Owner Access** - Connect as contract owner/authorized verifier
2. **Review Queue** - Browse all unverified incident reports
3. **Incident Analysis** - Review details, documentation, and evidence
4. **Verification Decision** - Mark legitimate incidents as verified
5. **Automatic Rewards** - System pays HBAR rewards to reporters

## 📄 Smart Contract Details

### IncidentManager Contract
- **Address**: `0xf12ead27305b91a03afbb413a2ed2f028e4c9e6b` (Hedera Testnet)
- **Default Reward**: 0.05 HBAR per verified incident
- **Key Functions**:
  - `reportIncident(string description)` - Submit new incident
  - `verifyIncident(uint id)` - Verify incident (owner only)
  - `getIncident(uint id)` - Retrieve incident details
  - `setRewardAmount(uint256 amount)` - Update reward value

### Events
- `IncidentReported` - New incident submitted
- `IncidentVerified` - Incident verified by authority
- `RewardPaid` - HBAR reward distributed to reporter

## 🔗 Network Configuration

**Hedera Testnet**
- Chain ID: 296
- RPC URL: `https://testnet.hashio.io/api`
- Explorer: https://hashscan.io/testnet
- Native Token: HBAR

## 🏆 Benefits & Use Cases

### For Citizens
- **Civic Engagement** - Easy way to report road hazards and incidents
- **Financial Incentive** - Earn HBAR for verified reports
- **Professional Documentation** - Court-admissible incident reports
- **Transparency** - Track report status on blockchain

### For Authorities
- **Crowd-Sourced Reporting** - Leverage citizen network for incident monitoring
- **Data Integrity** - Immutable blockchain records prevent tampering
- **Efficient Processing** - Streamlined verification and reward system
- **Cost Effective** - Automated reward distribution reduces administrative overhead

### For Society
- **Road Safety** - Faster identification and response to road hazards
- **Data Collection** - Valuable traffic incident data for urban planning
- **Decentralization** - No single point of failure or control
- **Innovation** - Demonstrates practical blockchain application for civic good

## 🔧 Development

### Contract Development
```bash
cd contracts
forge test                    # Run tests
forge build                   # Compile contracts
forge coverage               # Test coverage report
```

### Frontend Development
```bash
# Reporter interface
cd dapp && npm run dev

# Verification interface  
cd incident-verification && npm run dev
```

### Linting & Formatting
```bash
cd contracts
npm run lint                 # Solidity linting
npm run prettier:write       # Format code

cd dapp
npm run lint                 # TypeScript linting
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📋 Roadmap

- [ ] Mobile-responsive design improvements
- [ ] Multi-language support
- [ ] Photo/video evidence handling
- [ ] GPS location integration
- [ ] Incident categorization system
- [ ] Advanced analytics dashboard
- [ ] Integration with emergency services
- [ ] Mainnet deployment

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

For questions, issues, or contributions:
- Create an issue on GitHub
- Contact: [virtualvasu](https://github.com/virtualvasu)

---

*Built with ❤️ for safer roads using Hedera blockchain technology*