import { useContract } from "./useContract";
import { Token } from "@thirdweb-dev/sdk";

/**
 * Hook for getting an instance of an `Token` contract. This contract supports ERC20 compliant tokens.
 * @param contractAddress - the address of the Token contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useToken } from '@thirdweb/react-hooks'
 *
 * const App = () => {
 *   const token = useToken("<YOUR-CONTRACT-ADDRESS>")
 *
 *   // Now you can use the token contract in the rest of the component
 *
 *   // For example, this function will get the connected wallets token balance
 *   async function balance() {
 *     const balance = await token.balance()
 *     return balance
 *   }
 *
 *   return (
 *     ...
 *   )
 * }
 * ```
 * @public
 */
export function useToken(contractAddress?: string): Token | undefined {
  return useContract("token", contractAddress);
}