cat $1 | sed 's/[^0-9]/\n/g' | egrep '[0-9]{4,}' -o
