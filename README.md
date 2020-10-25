drand-node-ea

chainlink external adapter which gets randomness from [drand.love](https://drand.love)

it was build with sls framework 2.8.0, you must configure it, run `sls deploy`, get it's endpoint, build a bridge, add tasks and you'll have the jobid from this implementation (for such experiments look also testnet especifications in the repo)

```drandramdoness.sol```
mainnet sample contract for interactions: 0xDA2Ed8129f72F6D3455127ebb40109449772B893 at the moment you must send 0.1LINK in whichever implementation that you use
https://ipfs.io/ipfs/QmX5XLeuQDiZj2jqBXM5tTHi3dYhMEtNNDbQa7J5pvqvi1

uint256: 15193941169270745378893100680725550593904155809811730811544783570068588680135

``` 
{
	"initiators": [
		{
			"type": "runlog",
			"params": {
				"address": "0x2Bd355065fE6b4Df4CE7c12f15b9a9b2a8392037"
			}
		}
	],
	"tasks": [
		{
			"type": "drand_ea"
		},
		{
			"type": "ethint256"
		},
		{
			"type": "ethtx"
		}
	]
}
```

```MIT license```