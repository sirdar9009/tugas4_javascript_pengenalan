var t1=200, t2=190, t3=300

if (t1>t2 && t1>t3) 
{
	if (t2>t3) {
		console.log("yang paling tinggi adalah",t1)
		console.log("urutannya adalah", t1, t2, t3)}
		else {
			console.log("yang paling tinggi adalah",t1)
			console.log("urutannya adalah", t1, t3, t2)}
		}
		else if (t2>t1 && t2>t3) 
		{
			if (t1>t3) {
				console.log("yang paling tinggi adalah",t2)
				console.log("urutannya adalah", t2, t1, t3)}
				else {
					console.log("yang paling tinggi adalah",t2)
					console.log("urutannya adalah", t2, t3, t1)}
				}
				else
				{
					if (t1>t2) {
						console.log("yang paling tinggi adalah",t3)
						console.log("urutannya adalah", t3, t1, t2)}
						else {
							console.log("yang paling tinggi adalah",t3)
							console.log("urutannya adalah", t3, t2, t1)}
						}