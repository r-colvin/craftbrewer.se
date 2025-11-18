#! /bin/bash

# A1: Total Beers			B1: =SUM(F5:F) 			C1: Total Unique Items		D1: =COUNTA(A5:A)
# A2: Total Unique Filtered Items	B2: =SUBTOTAL(103, A5:A)	C2: Random Row #		D2: =RANDBETWEEN(5,(D1+4))	G3: Recalculate		H3: CHECKBOX
# A3: Random Beer			B3: =IF( AND(SUBTOTAL(103,INDIRECT("A" & D2))=1, EXACT(INDIRECT("G" & D2),"FALSE")), INDIRECT("A" & D2) & " - " & INDIRECT("B" & D2) & " (Row " & D2 & ")", "Beer (" & INDIRECT("A" & D2) & " - " & INDIRECT("B" & D2) & " (Row " & D2 & ")" & ") Marked as Excluded - Recalculate" )

# Bold? - not possible
# Checkbox? - no possible
# Filter?

# Row 4: Brewery, Beer, Style, ABV, Added Date, Qty, Exclude (Maintain), Votes (Maintain), Style Guide (Dynamic Lookup?), Notes (Maintain) 
# > import to A5...?  can import to current field
# keep maintain fields all on the right
# if the import < existing; the old fields remain; also the columns that need to be maintained might need to be moved.. so you need a way to compare the old (but thats ok, since you should have the old still... so just import and replace)
