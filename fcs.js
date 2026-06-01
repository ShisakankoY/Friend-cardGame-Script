const fcs_obj = {}

function fcs(code) {
    const line = code.split("\n");
    let i = 0;

    while (i < line.length) {
        const block = line[i].split(" ");
        const rest = block.slice(1);
        const com1 = block[0];
        const com2 = rest[0];
        const com3 = rest[1];
        const com4 = rest[2];
        const com5 = rest[3];
        const com6 = rest[4];
        const com7 = rest[5];
        const com8 = rest[6];
        const com9 = rest[7];

        if (!com1 || rest.length === 0) {
            console.error("Code not found.");
            return;
        }

        if (com1 === "Card") {
            if (com2 === "_create") {
                fcs_obj[`card${com3}`] = {
                    cost: Number(com4),
                    hp: Number(com5),
                    kinds: com6,
                    attack: Number(com7),
                    elem: com8,
                    tag: com9
                }
            } else if (com2 === "_change") {
                if (com3 === "hp") {
                    fcs_obj[`card${com4}`].hp = Number(com5);
                } else if ("cost") {
                    fcs_obj[`card${com4}`].cost = Number(com5);
                } else if ("kinds") {
                    fcs_obj[`card${com4}`].kinds = com5;
                } else if ("attack") {
                    fcs_obj[`card${com4}`].attack = Number(com5);
                } else if ("elem") {
                    fcs_obj[`card${com4}`].elem = com5;
                } else if ("tag") {
                    fcs_obj[`card${com4}`].tag = com5;
                }
            }
        }
        if (com1 === "Player") {
            if (com2 === "_config") {
                fcs_obj[`player${com3}`] = {
                    life: Number(com4),
                    totalCost: Number(com5),
                    point: Number(com6),
                    status: com7,
                    hc: Number(com8)
                }
            } else if (com2 === "_change") {
                if (com3 === "life") {
                    fcs_obj[`player${com4}`].life = Number(com5);
                } else if (com3 === "totalCost") {
                    fcs_obj[`player${com4}`].totalCost = Number(com5);
                } else if (com3 === "point") {
                    fcs_obj[`player${com4}`].point = Number(com5);
                } else if (com3 === "status") {
                    fcs_obj[`player${com4}`].status = com5;
                } else if (com3 === "hc") {
                    fcs_obj[`player${com4}`].hc = Number(com5);
                }
            }
        }
        if (com1 === "Game") {
            if (com2 === "_config") {
                fcs_obj["GAME_CONFIG"] = {
                    initialLife: Number(com3),
                    initialHc: Number(com4),
                    deck: Number(com5)
                }
            }
        }
        if (com1 === "Delete") {
            if (com2 === "_card") {
                delete fcs_obj[`card${com3}`];
            } else if (com2 === "_player") {
                delete fcs_obj[`player${com3}`];
            } else if (com2 === "_game") {
                delete fcs_obj.GAME_CONFIG;
            }
        }
        i++;
    }
    return fcs_obj;
}

window.fcs_obj = fcs_obj;
