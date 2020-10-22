drand-node-ea

chainlink external adapter which gets randomness from (drand.love)[https://drand.love]

it was build with sls framework 2.8.0, you must configure it, run `sls deploy`, get it's endpoint, build a bridge, add tasks and you'll have the jobid from this implementation

kovan solidity call 0xF3e52a344227A3079406645d315E4cAbEfA88095
jobid e37cb9357a0542b2a108e7f25b68cffd

``` 
{
	"initiators": [
		{
			"type": "runlog",
			"params": {
				"address": "0x368db63510a023730b8c1fecdf5a8b6799270cec"
			}
		}
	],
	"tasks": [
		{
			"type": "drand_handler"
		},
		{
			"type": "ethbytes32"
		},
		{
			"type": "ethtx"
		}
	]
}
```
