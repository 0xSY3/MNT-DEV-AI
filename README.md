# AgenticMinds -  A Mantle Network Development Platform

An AI-powered development platform for building, analyzing, and optimizing smart contracts on the Mantle Network Layer 2 solution. This project leverages CrewAI and Langchain to provide advanced AI capabilities for smart contract development.

![Mantle Network Development Platform](generated-icon.png)

## Features

### 🏗️ Contract Builder
- AI-powered smart contract development using Langchain
- Visual tools for contract creation
- Real-time syntax validation
- Best practices suggestions

### 🔍 Transaction Decoder
- Analyze and decode smart contract transactions
- Interactive visualization of contract interactions
- Detailed breakdown of function calls and events

### 📚 Template Library
- Pre-built smart contract templates
- Common patterns and implementations
- Customizable contract templates

### 🤖 Mantle AI Assistant
- AI-powered development assistance using CrewAI and Langchain
- Real-time code suggestions
- Smart contract optimization tips
- Mantle Network-specific guidance

### 🔐 Security Analyzer
- Automated security vulnerability scanning
- Gas optimization recommendations
- Best practices validation
- Mantle L2-specific optimizations

### 🧪 Test Suite Generator
- AI-powered test case generation using Langchain
- Comprehensive test coverage
- Automated test execution
- Custom test scenario creation

## Tech Stack

- Frontend: React + TypeScript + Vite
- Backend: Express + Node.js (using SQLite)
- AI Integration: OpenAI, CrewAI, Langchain
- UI Components: Radix UI + Tailwind CSS
- Smart Contract Testing: Hardhat
- Data Visualization: D3.js + Recharts

## Setup Instructions

1. Clone the repository from Replit

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Create a new file `.env` in the root directory
   - Add your OpenAI API key:
```
# OpenAI API Key (required for AI features)
OPENAI_API_KEY=your_openai_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## Directory Structure

```
├── client/            # Frontend React application
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── pages/
├── server/            # Backend Express server
│   └── routes/
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## Support

For support, join our community forum or create an issue in the repository.

## License

MIT License - see LICENSE for details
