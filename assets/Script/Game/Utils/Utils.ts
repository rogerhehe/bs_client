

export default class Utils {
    public static random(min: number, max: number) {
        let range = max - min;
        return min + Math.round(Math.random() * range);
    }
}