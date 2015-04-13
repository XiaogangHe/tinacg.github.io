import sys

if len(sys.argv) != 2:
    print("Usage: python process.py languagenotes")
else:
    language = sys.argv[1].replace(".", "")
    with open(language + ".js", 'w') as output:
        print("var notes = {", file=output)
        
        with open(language + ".txt") as input:
            id = 0
            while True:
                title = input.readline()
                if title == "":
                    break
                title = title.strip()
                
                # new note
                tags_line = input.readline().strip()
                tags = str(list(map(lambda s: s.strip().replace('"', '&quot;').replace("'", "&#39;"), tags_line.split(","))))

                reference = input.readline().strip()

                print('note' + str(id) + ': { ', file=output)
                print('id: "note' + str(id) + '", ', file=output)
                id += 1
                print('title: "' + title + '",', file=output)
                print('tags: ' + tags + ',', file=output)
                print('reference: "' + reference + '",', file=output)
                print('body: "', file=output, end="")
                while True:
                    body_line = input.readline()
                    if body_line == "" or body_line.strip() == "--":
                        break
                    body_line = body_line.rstrip()
                    body_line = body_line.replace("\\", "\\\\")
                    print(body_line.replace('"', "&quot;"), file=output, end="<br>")
                print('" },\n', file=output)

        print("numNotes: " + str(id), file=output)
        print("};", file=output)
