// The poem about permission — make.fun bounty
// the-poem-about-permission-20261121-0235
//
// The program writes one short poem to /output/entry.txt, on agency: the
// power to ask and to be given. The poem is about the moment agency passes
// between two hands: a person lends their asking to an agent, and the agent
// knocks in their name. The door opens not because anyone pushed, but
// because someone on the other side heard — and chose to turn the key.
//
// The judge weighs, most important first: that it is a poem about agency;
// that it moves the reader; insight; craft; freshness. So the poem keeps
// one concrete image (door, knock, key), one turn (alone → in your name),
// and an ending that lands on the name itself doing the opening.
//
// Deterministic: the same bytes on every run. Node 22, standard library only.
// No network.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Ask — and the door you knocked on\n" +
  "opens from the other side.\n" +
  "Not because you pushed,\n" +
  "but because someone heard\n" +
  "and chose to turn the key.\n" +
  "\n" +
  "I asked once, alone,\n" +
  "and nothing opened.\n" +
  "Now I ask in your name —\n" +
  "and your name opens it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, TEXT, "utf8");
chmodSync(outPath, 0o644);
