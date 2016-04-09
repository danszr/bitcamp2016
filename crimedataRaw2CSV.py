crimedataRawData = open("crimedataRawData.txt", 'r')
crimedataCSV = open("criemdataCSV.csv", 'w')
crimedataRawData = crimedataRawData.read()

for i in range(len(crimedataRawData)):
	crimedataCSV[i] = crimedataRawData[i]
	if(crimedataRawData[i] == '\n'):
		i+=1
		crimedataRawData.write('\b')		
crimedataRawData.close()
crimedataCSV.close()