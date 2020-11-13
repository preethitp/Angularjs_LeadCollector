<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform version="1.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>LEAD SUMMARY</title>
</head>
<body  style="background-color:#ffe680;">
<h1 align="center">LEAD SUMMARY</h1>

<break></break>
<table  border="5" align="center" style="width:100%;background-color:white;border: 5px solid black;border-collapse: collapse;" cellpadding = "10"  >

<tr>
<th>Name</th><th>Department</th><th>RegisterNo</th><th>Ph No</th><th>Lead</th>
</tr>
<xsl:for-each select="/studInfo/stud">
<tr>
<td><xsl:value-of select="name"/></td>
<td><xsl:value-of select="dept"/></td>
<td><xsl:value-of select="regno"/></td>
<td><xsl:value-of select="phno"/></td>
<td><xsl:value-of select="lead"/></td>
</tr>
</xsl:for-each>
</table>

<marquee behavior="scroll" direction="left" scrollamount="12" style="font-size:20px;font-weight: bold;">Post Your Leads !!</marquee>
<marquee behavior="scroll" direction="right" scrollamount="13" style="font-size:20px;font-weight: bold;">Faculty Assigning !!</marquee>
<marquee behavior="scroll" direction="left" scrollamount="12" style="font-size:20px;font-weight: bold;">Issue solving !!</marquee>
<marquee behavior="scroll" direction="right" scrollamount="13" style="font-size:20px;font-weight: bold;">Face the problems !!</marquee>
</body>   
 </html>    
</xsl:template>    
</xsl:transform>