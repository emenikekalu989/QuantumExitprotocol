document.getElementById('connectBtn').addEventListener('click', async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      alert('Wallet connected: ' + accounts[0]);
    } catch (err) {
      alert('Connection rejected');
    }
  } else {
    alert('Install MetaMask or a Web3 wallet');
  }
});