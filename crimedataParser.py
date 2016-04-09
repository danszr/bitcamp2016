
crimedata = open("crimedata.txt")
crimedataParsed = open("crimedataParsed.txt", 'w')

dataIn = crimedata.read()
breakStr = "</td></tr><tr><td rowspan=\"2\" valign=\"middle\">"
for i in range(len(dataIn)):
	if(dataIn[i] == '>'):
		k = i+1
		breakLine = True
		for j in range(len(breakStr)):
			if(dataIn[i+j] != breakStr[j]):
					breakLine = False
		if(breakLine):
			crimedataParsed.write('\n')
		while(dataIn[k] != '<'):
			crimedataParsed.write(dataIn[k])
			k+=1
crimedata.close()