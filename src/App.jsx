import './App.css'
import { TokenLaunchpad } from './components/TokenLaunchpad'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';

import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';


// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

function App() {
  return (

    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <div style={{display:"flex" , justifyContent:"space-between"}}>
                    <WalletMultiButton />
                    <WalletDisconnectButton />
                  </div>    
                      <TokenLaunchpad></TokenLaunchpad>

                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    
  )
}

export default App
