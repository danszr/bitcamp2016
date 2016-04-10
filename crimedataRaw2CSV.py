import csv
crimedataRawData = open("crimedataRawData.txt", 'r')
crimedataRawData2 = open("crimedataRawData2.txt", 'w')
crimedataRawDataRead = crimedataRawData.readlines()
fourNewLineCounter = 0

for i in range(len(crimedataRawDataRead)):
	if(crimedataRawDataRead[i][0] == '\n'):
		crimedataRawDataRead[i] = crimedataRawDataRead[i].replace('\n', '')
	

		

for i in range(len(crimedataRawDataRead)):
	crimedataRawData2.writelines(crimedataRawDataRead[i])
crimedataRawData2.close()
crimedataRawData2 = open("crimedataRawData2.txt", 'r')
arrestList = [["ARREST NUMBER\n","ARRESTED DATE TIME CHARGE\n", "UMPD CASE NUMBER\n", "AGE\n", "RACE\n", "SEX\n", "DESCRIPTION\n"]]
crimedataRawData2Read = crimedataRawData2.readlines()
for i in range(len(crimedataRawData2Read)):
	arrestData = []
	if((len(crimedataRawData2Read[i]) ==6) and crimedataRawData2Read[i][0].isdigit()):
		count = 3
		arrestData.append(crimedataRawData2Read[i])
		arrestData.append(crimedataRawData2Read[i+1])
		arrestData.append(crimedataRawData2Read[i+2])
		
		if(len(crimedataRawData2Read[i+count]) == 3 and crimedataRawData2Read[i+count][0].isdigit()):
			#age check
			arrestData.append(crimedataRawData2Read[i+count])
			count+=1
		else:
			arrestData.append("\n")
		if(crimedataRawData2Read[i+count].count(" ") <=1 and not(crimedataRawData2Read[i+count].isdigit()) and crimedataRawData2Read[i+count].count("ale\n") == 0):
			#race check
			arrestData.append(crimedataRawData2Read[i+count])
			count+=1
		else:
			arrestData.append("\n")
		if(crimedataRawData2Read[i+count]=="Male\n" or crimedataRawData2Read[i+count] =="Female\n"):
			#gender check
			arrestData.append(crimedataRawData2Read[i+count])
			count+=1
		else:
			arrestData.append("\n")
		
		arrestData.append("\"" + crimedataRawData2Read[i+count] + "\"")
		arrestList.append(arrestData)

finalFile = open("parsedData.csv", 'w')
for i in arrestList:
	for j in range(len(i)):
		if (j < 6):
			finalFile.write(i[j].replace('\n', ','))
		elif(j==6):
			finalFile.write(i[j].replace('\n', ''))
	finalFile.write("\n")
crimedataRawData.close()
crimedataRawData2.close()
finalFile.close()