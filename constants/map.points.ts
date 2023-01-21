const points: Array<number[]> = [] 
// create random points
const createRandomMarkers = (value: number) => {
    for(let i = 0; i < value; i++) {
        points.push([
            ((1)^Math.ceil(Math.random()*10))*Math.ceil(Math.random()*100),
            ((1)^Math.ceil(Math.random()*10))*Math.ceil(Math.random()*360),
        ])
    }
    useLog(points, 'points')
    return points
}
export default createRandomMarkers