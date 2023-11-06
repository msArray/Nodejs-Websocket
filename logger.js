module.exports = class Logger {
    constructor() {

    }

    setup() {
        console.log("\x1b[37m\x1b[42m\n" +
            "                                                                                                                    " + "\n" +
            "  ████                                     █             █████                           █                          " + "\n" +
            " █   ██                                                  █    █                                                     " + "\n" +
            " █        ████  █ ████   █  ████  █ ██     █   ████      █    ██ █   ██  █ ███   █ ███   █   █ ███    ████          " + "\n" +
            " ███     ██  █  ██   █   █ ██  █  ██       █   █         █    █  █   ██  ██  ██  ██  ██  █   ██  ██  ██  █          " + "\n" +
            "   ███   █   ██ ██   █  █  █   ██ ██       █   █         █████   █   ██  █    █  █    █  █   █    █  █   █          " + "\n" +
            "     ██  ██████ █    ██ █  ██████ █        █    ██       █   █   █   ██  █    █  █    █  █   █    █  ██  █          " + "\n" +
            "      █  █      █     █ █  █      █        █      █      █    █  █   ██  █    █  █    █  █   █    █   ███           " + "\n" +
            " █   ██  ██     █     ██   ██     █        █   █  █      █    ██ ██  ██  █    █  █    █  █   █    █  ██             " + "\n" +
            "  ████    ████  █      █    ████  █        █   ████      █     █  █████  █    █  █    █  █   █    █   ████  █  █  █ " + "\n" +
            "                                                                                                     █   ██         " + "\n" +
            "                                                                                                     █████          " + "\x1b[0m")
    }

    success(message, ip) {
        console.log(`\x1b[42mSuccess!\x1b[0m ${message} ${ip ? "from " + ip : ""}`)
    }

    waring(message, ip) {
        console.log(`\x1b[43mWaring!\x1b[0m ${message} ${ip ? "from " + ip : ""}`)
    }

    error(message, ip) {
        console.log(`\x1b[41mError!\x1b[0m ${message} ${ip ? "from " + ip : ""}`)
    }
}