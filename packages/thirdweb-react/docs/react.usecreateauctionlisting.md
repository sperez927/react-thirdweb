<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/react](./react.md) &gt; [useCreateAuctionListing](./react.usecreateauctionlisting.md)

## useCreateAuctionListing() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Use this to create a new Auction Listing on your marketplace contract.

<b>Signature:</b>

```typescript
export declare function useCreateAuctionListing(contract: RequiredParam<Marketplace>): import("@tanstack/react-query").UseMutationResult<import("@thirdweb-dev/sdk/dist/browser").TransactionResultWithId<never>, unknown, NewAuctionListing, unknown>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  contract | [RequiredParam](./react.requiredparam.md)<!-- -->&lt;Marketplace&gt; | an instance of a Marketplace contract |

<b>Returns:</b>

import("@tanstack/react-query").UseMutationResult&lt;import("@thirdweb-dev/sdk/dist/browser").TransactionResultWithId&lt;never&gt;, unknown, NewAuctionListing, unknown&gt;

a mutation object that can be used to create a new auction listing

## Example


```jsx
const Component = () => {
  const {
    mutate: createAuctionListing,
    isLoading,
    error,
  } = useCreateAuctionListing(">>YourMarketplaceContractInstance<<");

  if (error) {
    console.error("failed to create auction listing", error);
  }

  return (
    <button
      disabled={isLoading}
      onClick={() => createAuctionListing(auctionListingData)}
    >
      Create Auction Listing!
    </button>
  );
};
```
