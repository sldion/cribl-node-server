import { log } from 'console';
import fs from 'fs';
import readline from "readline"

export const getLines = async (filename, lastN, filter): Promise<String[]> => {
    const readStream = fs.createReadStream(`/var/log/${filename}`);

    const rl = readline.createInterface({
        input: readStream,
        crlfDelay: Infinity,
    });

    const lines = [];
    rl.on('line', (line) => {

        if (filter) {
            if (line.includes(filter)) {
                lines.push(line);
                if (lines.length > lastN) {
                    lines.shift();
                }
            }
        }
        else {
            lines.push(line);
            if (lines.length > lastN) {
                lines.shift();
            }
        }


    });

    return new Promise((resolve) => {
        rl.on('close', () => {
            resolve(lines);
        });
    });

}

export async function getLog(filename, lastN = 10, filter) {

    try {

        // Hardcode var/log since thats what we care about

        const lines = await getLines(filename, lastN, filter)

        return lines.reverse()
    }
    catch (err) {
        log(`Could not open file ${filename}`)
    }


}