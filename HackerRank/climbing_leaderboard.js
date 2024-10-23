/**
 * @param {Array<number>} ranked 
 * @param {Array<number>} player 
 */
function climbingLeaderboard(ranked, player) {
    ranked = Array.from(new Set(ranked))
    const rankPlayer = []
    let index = ranked.length
    for (const rank of player) {
        while(index > 0 && rank >= ranked.at(index - 1)) { // enquanto o index for maior que zero e a ultima posição do arr ranked for menor que o rank atual, ele vai diminuindo 1 no index e passa dnv no while
            index--
        }
        rankPlayer.push(index + 1) // acrescar + 1 para o index começar do numero 1 em vez do zero
    }
    return rankPlayer
}

const ranked = [100, 90, 90, 80, 75, 60]
// const ranked = [100, 100, 50, 40, 40, 20, 10]
const player = [50, 65, 77, 90, 102]
// const player = [5, 25, 50, 120]

console.log("climbingLeaderboard(ranked, player): ", climbingLeaderboard(ranked, player));