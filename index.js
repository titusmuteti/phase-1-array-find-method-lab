function superbowlWin(records) {
    let winResult = records.find(e=>e.result === 'W')
    if (winResult) {
        return winResult.year;
    }else{
        return undefined;
    }
}
superbowlWin()


