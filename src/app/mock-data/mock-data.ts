import { Service } from '../types/service';

export class MockServices {
    public services: Service[] = [
        { 'id' : 0, 'name' : 'Window Washing', 'description' : 'Blah blah blah' },
        { 'id' : 1, 'name' : 'Pressure Washing', 'description' : 'Some description' },
        { 'id' : 2, 'name' : 'Construction Cleanup', 'description' : 'Blah blah blah' },
        { 'id' : 3, 'name' : 'Solar Panel Cleaning', 'description' : 'Some description' },
        { 'id' : 4, 'name' : 'Screen Repairs', 'description' : 'Blah blah blah' },
        { 'id' : 5, 'name' : 'Rain Gutters', 'description' : 'Some description' },
        { 'id' : 6, 'name' : 'Clean Chandelier', 'description' : 'Some other description' }
    ];
}
