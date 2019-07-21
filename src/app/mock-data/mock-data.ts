import { Service } from '../types/service';
import { EmployeeInfoCard } from '../interfaces/EmployeeInfoCard';

export class MockData {
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

    public employees: EmployeeInfoCard[] = [
        {
            'name': 'Marcus Washington',
            'position': 'Owner',
            'description': 'Marcus has been in Coastal North County since he was a young child. ' +
            'He grew up living the laid back San Diego lifestyle and now shares that life style ' +
            'with his wife Kelly and his son William. When he is not washing widows he is with ' +
            'his family riding bikes up and down the coast or spending the day at the beach. ' +
            'Marcus has owned Advanced Window Washing for almost 20 years and hopes to continue ' +
            'to serve our communtiy for another 20!',
            'quote': 'Will work for beer!',
            'yearsWith': 18,
            // tslint:disable-next-line:max-line-length
            'image_url': '../../../assets/images/OsidePierShot.jpg'
        },
        {
            'name': 'Jason D. Martinez',
            'position': 'Window Washer',
            'description': 'Jason is an Oceanside native. His family has been in the area for over ' +
            'a century. He is currently attending Cal State University - San Marcos, where he is ' +
            'majoring in Computer Science.',
            'quote': 'Will work for beer!',
            'yearsWith': 3,
            // tslint:disable-next-line:max-line-length
            'image_url': '../../../assets/images/cartoon-fish.jpg'
        }
    ];
}
