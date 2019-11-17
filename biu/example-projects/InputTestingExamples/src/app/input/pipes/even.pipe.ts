import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'even',
})
export class EvenPipe implements PipeTransform {
    transform(a: Array<string>): Array<string> {
        return a.filter(e => {
            const element = +e.split(' ')[1];
            if (element % 2 === 0) {
                return true;
            } else {
                return false;
            }
        });
    }
}
