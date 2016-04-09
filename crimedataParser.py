
crimedata = open("crimedata.txt")
crimedataParsed = open("crimedataParsed.txt", 'w')

dataIn = crimedata.read()
breakStr = "</td></tr><tr><td"
for i in range(len(dataIn)):
	if(dataIn[i] == '>'):
		j = i+1
		while(dataIn[j] != '<'):
			crimedataParsed.write(dataIn[j])
			j+=1
	
		crimedataParsed.write('\n')		
crimedata.close()