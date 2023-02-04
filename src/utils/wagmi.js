import { createClient } from "wagmi";

const fvmChain = {
    id: 31415,
    name: "Filecoin — Wallaby testnet",
    network: "wallaby",
    nativeCurrency: {
      decimals: 18,
      name: "Testnet Filecoin",
      symbol: "tFil",
    },
    rpcUrls: {
      default: "https://wallaby.node.glif.io/rpc/v0",
    },
    blockExplorers: {
      default: { name: "Glif", url: "https://explorer.glif.io/wallaby" },
    },
    testnet: true,
  };
  const { chains, provider, webSocketProvider } = configureChains(
    [fvmChain],
    [
      jsonRpcProvider({
        rpc: (chain) => {
          if (chain.id !== fvmChain.id) return null;
          return { http: chain.rpcUrls.default };
        },
      }),
    ]
  );

export const client = createClient ({
    autoConnect: true,
    connectors: [new MetaMaskConnector({ chains })],
    provider,
    webSocketProvider
})