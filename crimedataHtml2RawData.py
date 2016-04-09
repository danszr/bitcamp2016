
crimedata = open("crimedataHtml.txt")
crimedataParsed = open("crimedataRawData.txt", 'w')

dataIn = crimedataHtml.read()
for i in range(len(dataIn)):
	if(dataIn[i] == '>'):
		j = i+1
		while(dataIn[j] != '<'):
			crimedataRawData.write(dataIn[j])
			j+=1
	
		crimedataRawData.write('\n')		
crimedata.close()