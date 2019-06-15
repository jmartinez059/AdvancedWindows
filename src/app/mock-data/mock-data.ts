import { Service } from '../types/service';

export class MockServices {
    public services: Service[] = [
        { 'id' : 0, 'name' : 'Window Washing', 'description' : 'At Advanced Window Washing we ' +
            'pride ourselves on the quality of our work. This means you get the cleanest windows ' +
            'you have ever seen, or not seen, because they will be so clean you wont even notice ' +
            'they are there. We always take our time to make sure we are doing our best to get ' +
            'your windows as clean as possible. If you are not 100% satisfied with the quality of ' +
            'your windows we will return to touch them up for free.\nOur window washing process ' +
            'begins with a through screen cleaning, because there is no point in having clean ' +
            'windows if you cannot see through the screens. Next we use a light grade sponge on ' +
            'the window\'s surface to get off anyhard to remove debris. We then apply soap and ' +
            'and water to the surface of the windos and remove it with a high grade rubber squegee' +
            'This process is one of the oldest, but still the most effective way to clean a window. ' +
            'Finally we use a lint free towel to wipe off any excess form the edges of the window. ' +
            'Leaving your windows perfectly clean.'
        },
        { 'id' : 1, 'name' : 'Pressure Washing', 'description' : 'Some description' },
        { 'id' : 2, 'name' : 'Construction Cleanup', 'description' : 'Blah blah blah' },
        { 'id' : 3, 'name' : 'Solar Panel Cleaning', 'description' : 'Some description' },
        { 'id' : 4, 'name' : 'Screen Repairs', 'description' : 'Blah blah blah' },
        { 'id' : 5, 'name' : 'Rain Gutters', 'description' : 'Some description' },
        { 'id' : 6, 'name' : 'Clean Chandelier', 'description' : 'Some other description' }
    ];
}
