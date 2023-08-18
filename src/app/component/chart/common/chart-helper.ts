
export class ChartHelper {
    data = {
        datasets: [{ data: [1] }],
        labels: ['Label 1'],
    };
    public pushOne(): void {
        this.data.datasets.forEach((x, i) => {
            const num = this.generateNumber(i);
            x.data.push(num);
        });
        this.data?.labels?.push(
            `Label ${this.data.labels.length}`
        );
    }

    private generateNumber(i: number): number {
        return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
    }
}