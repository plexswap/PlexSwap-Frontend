import { Token } from './entities/token'
import { ChainId } from './chains'

export const WETH9 = {
    [ChainId.ETHEREUM]: new Token(
      ChainId.ETHEREUM,
      '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      18,
      'WETH',
      'Wrapped Ether',
      'https://weth.io'
    ),
    [ChainId.GOERLI]: new Token(
      ChainId.GOERLI,
      '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
      18,
      'WETH',
      'Wrapped Ether',
      'https://weth.io'
    ),
  }
  
  export const WBNB = {
    [ChainId.ETHEREUM]: new Token(
      ChainId.ETHEREUM,
      '0x418D75f65a02b3D53B2418FB8E1fe493759c7605',
      18,
      'WBNB',
      'Wrapped BNB',
      'https://www.binance.org'
    ),
    [ChainId.BSC]: new Token(
      ChainId.BSC,
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      18,
      'WBNB',
      'Wrapped BNB',
      'https://www.binance.org'
    ),
    [ChainId.BSC_TESTNET]: new Token(
      ChainId.BSC_TESTNET,
      '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
      18,
      'WBNB',
      'Wrapped BNB',
      'https://www.binance.org'
    ),
  }

  export const WPLEX = {
    [ChainId.PLEXCHAIN]: new Token(
      ChainId.PLEXCHAIN,
      '0x50245424Afc53E67Ca1AAD2C90401568C0eFf53A',
      18,
      'WPLEX',
      'Wrapped Plex',
      'https://plexfinance.us'
    ),
  }
  
  export const WNATIVE: Record<number, Token> = {
    [ChainId.ETHEREUM]: WETH9[ChainId.ETHEREUM],
    [ChainId.GOERLI]: WETH9[ChainId.GOERLI],
    [ChainId.BSC]: WBNB[ChainId.BSC],
    [ChainId.BSC_TESTNET]: WBNB[ChainId.BSC_TESTNET],
    [ChainId.PLEXCHAIN]: WPLEX[ChainId.PLEXCHAIN],
  }
  
  export const NATIVE: Record<
    number,
    {
      name: string
      symbol: string
      decimals: number
    }
  > = {
    [ChainId.ETHEREUM]: { name: 'Ether', symbol: 'ETH', decimals: 18 },
    [ChainId.GOERLI]: { name: 'Goerli Ether', symbol: 'GOR', decimals: 18 },
    [ChainId.BSC]: { name: 'Binance Chain Native Token', symbol: 'BNB', decimals: 18 },
    [ChainId.BSC_TESTNET]: { name: 'Binance Chain Native Token', symbol: 'BNB', decimals: 18 },
    [ChainId.PLEXCHAIN]: { name: 'Plexchain Native Token', symbol: 'PLEX', decimals: 18 },
  }
  