import { EthMethod } from '@metamask/keyring-api';

export const ETH_EOA_METHODS = [
  EthMethod.PersonalSign,
  EthMethod.SignTransaction,
  EthMethod.SignTypedDataV1,
  EthMethod.SignTypedDataV3,
  EthMethod.SignTypedDataV4,
];
