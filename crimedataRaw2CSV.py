crimedataRawData = open("crimedataRawData.txt", 'r')
crimedataCSV = open("criemdataCSV.csv", 'w')

for i in range(len(crimedataRawData)):
	if(crimedataRawData[i] == '\n'):
		j = i+1
		crimedataRawData.write('\b')		
crimedataRawData.close()