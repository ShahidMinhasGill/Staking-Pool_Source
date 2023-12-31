import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  { 
    pid: 0,
    risk: 3,
    lpSymbol: 'MEAC',
    lpAddresses: {
      97: '0x38D40ffa39FAE6aa62B4f12f06ab5563551c06c4',
      56: '0x24CD591b6A62Cc7475De500B18C7705eBaA3EE22', // 2LC router
      57: '0xF82F9352A6d4f99805782840eAE3EB4D76DcD0e9',
      137: '0x86557C01B77C0e65c8aB87fbA6D221E94EdC81e4'
    },
    tokenSymbol: 'MEAC',
    tokenAddresses: {
      97: '0x38D40ffa39FAE6aa62B4f12f06ab5563551c06c4',
      56: '0xF82F9352A6d4f99805782840eAE3EB4D76DcD0e9',
      57: '0xF82F9352A6d4f99805782840eAE3EB4D76DcD0e9',
      137: '0x86557C01B77C0e65c8aB87fbA6D221E94EdC81e4'
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
    isTokenOnly: true,
  },
  // {
  //   pid: 5,
  //   risk: 2,
  //   lpSymbol: 'BTCB-BNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 6,
  //   risk: 2,
  //   lpSymbol: 'ETH-BNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 8,
  //   risk: 1,
  //   lpSymbol: 'USDT-BNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 9,
  //   risk: 4,
  //   lpSymbol: 'CAKE-BNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 10,
  //   risk: 1,
  //   lpSymbol: 'USDC-BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },

  // {
  //   pid: 3,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: '2LC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0e8532645ad6d45648adfdf798d6d24c4bbf9d94',
  //   },
  //   tokenSymbol: '2LC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x37781b87619722e1765dd4864894931bebD1BB3C',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 11,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 12,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // BNB-BUSD
  //   },
  //   tokenSymbol: 'WBNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 13,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'BTCB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xf45cd219aef8618a92baa7ad848364a158a24f33', // BTCB-BUSD
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
]

export default farms
