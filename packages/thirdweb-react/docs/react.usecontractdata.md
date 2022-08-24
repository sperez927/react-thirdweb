<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/react](./react.md) &gt; [useContractData](./react.usecontractdata.md)

## useContractData() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Use this to get data from a contract read-function call.

<b>Signature:</b>

```typescript
export declare function useContractData(contract: RequiredParam<ReturnType<typeof useContract>["contract"]>, functionName: RequiredParam<string>, ...args: unknown[] | [...unknown[], CallOverrides]): import("@tanstack/react-query").UseQueryResult<any, unknown>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  contract | [RequiredParam](./react.requiredparam.md)<!-- -->&lt;ReturnType&lt;typeof useContract&gt;\["contract"\]&gt; | the contract instance of the contract to call a function on |
|  functionName | [RequiredParam](./react.requiredparam.md)<!-- -->&lt;string&gt; | the name of the function to call |
|  args | unknown\[\] \| \[...unknown\[\], CallOverrides\] | The arguments to pass to the function (if any), with optional call arguments as the last parameter |

<b>Returns:</b>

import("@tanstack/react-query").UseQueryResult&lt;any, unknown&gt;

a response object that includes the data returned by the function call

## Example


```javascript
const { contract } = useContract("{{contract_address}}");
const { data, isLoading, error } = useContractData(contract, "functionName", ...args);
```
