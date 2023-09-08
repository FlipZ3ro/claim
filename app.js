const web3 = new Web3(window.ethereum);

const contractAddress = '0x66FE28D6d32B57bc39A44B0A159D6ea0A8FAf458'; // Update with your contract address
const contractABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_beneficiary",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "cost",
        "type": "uint256"
      }
    ],
    "name": "TokensPurchased",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "beneficiary",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "endPresale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "endTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isPresaleActive",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxPurchase",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minPurchase",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "purchaseTokens",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "rate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "startPresale",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "startTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "token",
    "outputs": [
      {
        "internalType": "contract IERC20",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawBNB",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdrawTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

// Replace 'YOUR_TOKEN_CONTRACT_ADDRESS' and 'YOUR_TOKEN_CONTRACT_ABI' with the actual values
const tokenContractAddress = '0x04c3dA63eB9ef0b371B57f09a8f5302ed16E9A4f';
const tokenContractABI = 
[
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "subtractedValue",
                "type": "uint256"
            }
        ],
        "name": "decreaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "addedValue",
                "type": "uint256"
            }
        ],
        "name": "increaseAllowance",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];


const tokenContract = new web3.eth.Contract(tokenContractABI, tokenContractAddress);
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to connect Metamask
async function connectMetamask() {
  try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      const address = accounts[0];
      document.getElementById('walletAddress').textContent = address;
      document.getElementById('statusMessage').textContent = 'Status: Connected';
      
      // Change the button text to "Disconnect"
      document.getElementById('connectWallet').textContent = 'Disconnect';
      
      return address; // Return the connected address
  } catch (error) {
      console.error('Error connecting Metamask:', error);
      document.getElementById('statusMessage').textContent = 'Status: Connection Failed';
      return null; // Return null if connection fails
  }
}


ethereum.on('disconnect', (error) => {
  // Handle disconnection
});


// Function to handle token purchase
async function purchaseTokens() {
  const sender = await connectMetamask();

  if (!sender) {
    return;
  }

  try {
    // Show the loading toast
    const loadingToast = new bootstrap.Toast(document.getElementById('loadingToast'));
    loadingToast.show();

    const gasPrice = await web3.eth.getGasPrice();
    const gasLimit = 200000; // Adjust the gas limit as needed

    // Fixed purchase amount: 0.1 BNB in Wei
    const fixedBnbAmountWei = web3.utils.toWei('0.00463', 'ether');

    // Send the transaction with the fixed BNB amount
    const transaction = await contract.methods.purchaseTokens().send({
      from: sender,
      gasPrice: gasPrice,
      gas: gasLimit,
      value: fixedBnbAmountWei, // Send 0.1 BNB amount in Wei
    });

    // Display the transaction hash in the toast
    const transactionHash = transaction.transactionHash;
    const transactionHashUrl = `https://mumbai.polygonscan.com/tx/${transactionHash}`; // Replace with the actual explorer URL

    // Create a new purchase success toast
    const purchaseSuccessToast = new bootstrap.Toast(document.getElementById('purchaseSuccessToast'));
    document.getElementById('transactionHashLink').href = transactionHashUrl;
    document.getElementById('transactionHashLink').textContent = 'View in Explorer';

    // Hide the loading toast
    loadingToast.hide();

    // Show the purchase success toast
    purchaseSuccessToast.show();

    setStatusMessage('Purchase successful');
  } catch (error) {
    console.error('Error purchasing tokens:', error);
    setStatusMessage('Purchase failed');
  }
}






function setStatusMessage(message) {
    document.getElementById('statusMessage').textContent = `Status: ${message}`;
}

// Add event listener for the Connect with Metamask button
document.getElementById('connectWallet').addEventListener('click', connectMetamask);

// Add event listener for the Purchase SPAI button
document.getElementById('purchaseButton').addEventListener('click', () => {
  // Fixed purchase amount: 0.1 BNB
  const fixedBnbAmount = '0.1';

  purchaseTokens(fixedBnbAmount);
});




// Call updateInfo() periodically or as needed to keep the information up to date
setInterval(updateInfo, 5000); // Update every 5 seconds


async function updateInfo() {
  // Check if Metamask is connected
  if (web3.currentProvider.selectedAddress) {
      const address = web3.currentProvider.selectedAddress;
      document.getElementById('walletAddress').textContent = address;

      // Get ETH balance
      const ethBalanceWei = await web3.eth.getBalance(address);
      const ethBalanceEther = web3.utils.fromWei(ethBalanceWei, 'ether');
      document.getElementById('bnbBalance').textContent = ethBalanceEther; // Display ETH balance

      // Get SAPI token balance (assuming you have a valid token contract)
      const tokenBalance = await tokenContract.methods.balanceOf(address).call();
      document.getElementById('tokenBalance').textContent = web3.utils.fromWei(tokenBalance, 'ether'); // Display SAPI token balance

      // Get remaining tokens and sold tokens
      const rate = await contract.methods.rate().call();
      const maxPurchase = await contract.methods.maxPurchase().call();
      const tokenBalanceInContract = await contract.methods.balanceOf(address).call(); // Check if this should be the contract address, not the user's address
      const remainingTokens = tokenBalanceInContract / rate;
      const soldTokens = maxPurchase - remainingTokens;

      document.getElementById('remainingTokens').textContent = remainingTokens;
      document.getElementById('soldTokens').textContent = soldTokens;

      // Check sale status
      const saleStatus = await contract.methods.isPresaleActive().call();
      document.getElementById('saleStatus').textContent = saleStatus ? 'Open' : 'Closed';
  }
}


// Call updateInfo() periodically or as needed to keep the information up to date
setInterval(updateInfo, 5000); // Update every 5 seconds


async function updateInfo() {
  // Check if Metamask is connected
  if (web3.currentProvider.selectedAddress) {
      const address = web3.currentProvider.selectedAddress;
      document.getElementById('walletAddress').textContent = address;

      // Get ETH balance
      const ethBalanceWei = await web3.eth.getBalance(address);
      const ethBalanceEther = web3.utils.fromWei(ethBalanceWei, 'ether');
      document.getElementById('bnbBalance').textContent = ethBalanceEther; // Display ETH balance

      // Get SAPI token balance (assuming you have a valid token contract)
      const tokenBalance = await tokenContract.methods.balanceOf(address).call();
      document.getElementById('tokenBalance').textContent = web3.utils.fromWei(tokenBalance, 'ether'); // Display SAPI token balance

      // Get remaining tokens and sold tokens
      const rate = await contract.methods.rate().call();
      const maxPurchase = await contract.methods.maxPurchase().call();
      const tokenBalanceInContract = await contract.methods.balanceOf(address).call(); // Check if this should be the contract address, not the user's address
      const remainingTokens = tokenBalanceInContract / rate;
      const soldTokens = maxPurchase - remainingTokens;

      document.getElementById('remainingTokens').textContent = remainingTokens;
      document.getElementById('soldTokens').textContent = soldTokens;

      // Check sale status
      const saleStatus = await contract.methods.isPresaleActive().call();
      document.getElementById('saleStatus').textContent = saleStatus ? 'Open' : 'Closed';
  }
}

async function updateTokenSaleInfo() {
  try {
    const apiKey = 'FU5HBITPCBGUNADV7PEK471B7TIT16A2X4'; // Replace with your Polygon (Matic) testnet API key
    const saleContractAddress = '0x9aad6Ffe1A5a542b4431A8eAa78900aa01894004'; // Replace with your sale contract address

    // Fetch token balance of the sale contract (holding balance)
    const saleContractBalanceResponse = await axios.get('https://api-testnet.polygonscan.com/api', {
      params: {
        module: 'account',
        action: 'tokenbalance',
        contractaddress: '0x04c3dA63eB9ef0b371B57f09a8f5302ed16E9A4f', // Replace with the address of the token contract
        address: saleContractAddress, // Specify the sale contract address here
        tag: 'latest',
        apikey: apiKey,
      },
    });

    const saleContractBalance = saleContractBalanceResponse.data.result;

    // Fetch total supply of tokens
    const totalSupplyResponse = await axios.get('https://api-testnet.polygonscan.com/api', {
      params: {
        module: 'stats',
        action: 'tokensupply',
        contractaddress: saleContractAddress,
        apikey: apiKey,
      },
    });

    const totalSupply = totalSupplyResponse.data.result;

    // Calculate remaining tokens
    const remainingTokens = totalSupply - saleContractBalance;

    

    // Convert remaining tokens to a readable format (assuming token has 18 decimals)
    const remainingTokensReadable = remainingTokens / 10**18; // Adjust based on token decimals

    // Calculate sold tokens
    const soldTokens = totalSupply - remainingTokens;

    // Convert sold tokens to a readable format (assuming token has 18 decimals)
    const soldTokensReadable = soldTokens / 10**18; // Adjust based on token decimals

    // Display sold tokens and remaining tokens in readable format
    document.getElementById('soldTokens').textContent = soldTokensReadable;
    document.getElementById('remainingTokens').textContent = remainingTokensReadable;

    const isPresaleActive = await contract.methods.isPresaleActive().call();
    const saleStatus = isPresaleActive ? 'Open' : 'Closed';
    document.getElementById('saleStatus').textContent = saleStatus;
    } catch (error) {
    console.error('Error updating token sale info:', error);
    }
    }

// Call the function to update token sale info when needed
updateTokenSaleInfo();
