import { randomInt } from "crypto";

function canalDisponible() {
    throw new Error("Function not implemented.");
}

function transmitirTrama(arg0: any) {
    throw new Error("Function not implemented.");
}

function send(arg0: string) {
    throw new Error("Function not implemented.");
}

function waitFor(arg0: number) {
    throw new Error("Function not implemented.");
}

function rand(arg0: number, arg1: number) {
    throw new Error("Function not implemented.");
}

function mandarTrama(datagrama: string, m: number) {
    while (!canalDisponible) { } //busy waiting hasta que el canal esté disponible

    let terminado = false;

    while (canalDisponible) {
        transmitirTrama(new Trama(datagrama))
        terminado = true;
    }

    if (!terminado) {
        send("🤣JAM SIGNAL!!!!!")

        m++;

        waitFor(randomInt(2 ** (m - 1)) * 512);

        mandarTrama(datagrama, m);
    }
}