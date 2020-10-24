drand-node-ea

chainlink external adapter which gets randomness from [drand.love](https://drand.love)

it was build with sls framework 2.8.0, you must configure it, run `sls deploy`, get it's endpoint, build a bridge, add tasks and you'll have the jobid from this implementation

https://ipfs.io/ipfs/QmeiyUU1f5xGdXvvDhcCqxKt4PEBva83BoWUnSuhNtvVuh

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
