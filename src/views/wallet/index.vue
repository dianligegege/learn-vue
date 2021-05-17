<template>
    <div>
        <el-button
            @click="chonnect"
        >
            链接钱包
        </el-button>
    </div>
</template>

<script>
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3 from 'web3';
/* eslint-disable no-console */

export default {
    mounted() {
    },
    methods: {
        async chonnect() {
            //  Create WalletConnect Provider
            const provider = new WalletConnectProvider({
                infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
            });

            //  Enable session (triggers QR Code modal)
            await provider.enable();

            const web3 = new Web3(provider);

            console.log(web3);

            // Subscribe to accounts change
            provider.on("accountsChanged", (accounts) => {
                console.log(accounts);
            });

            // Subscribe to chainId change
            provider.on("chainChanged", (chainId) => {
                console.log(chainId);
            });

            // Subscribe to session disconnection
            provider.on("disconnect", (code, reason) => {
                console.log(code, reason);
            });
        },
    },
}
</script>