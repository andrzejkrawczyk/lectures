import {TestBed} from '@angular/core/testing';

import {TodoMockDataService} from './todo-mock-data.service';

describe('TodoMockDataService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: TodoMockDataService = TestBed.get(TodoMockDataService);
        expect(service).toBeTruthy();
    });
});
