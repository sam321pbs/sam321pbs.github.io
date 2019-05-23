
const mapPhotos = new Map();
mapPhotos.set(1, {
    title: "Hay Bales",
    caption: "I love hay bales. Took this snap on a drive through the countryside past some straw fields.",
});

mapPhotos.set(2, {
    title: "Lake",
    caption: "The lake was so calm today. We had a great view of the snow on the mountains from here."
});

mapPhotos.set(3, {
    title: "Canyon",
    caption: "I hiked to the top of the mountain and got this picture of the canyon and trees below."
});

mapPhotos.set(4, {
    title: "Iceberg",
    caption: "It was amazing to see an iceberg up close, it was so cold but didn’t snow today."
});

mapPhotos.set(5, {
    title: "Desert",
    caption: "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons."
});

mapPhotos.set(6, {
    title: "Fall",
    caption: "Fall is coming, I love when the leaves on the trees start to change color."
});

mapPhotos.set(7, {
    title: "Plantation",
    caption: "I drove past this plantation yesterday, everything is so green!"
});

mapPhotos.set(8, {
    title: "Dunes",
    caption: "My summer vacation to the Oregon Coast. I love the sandy dunes!"
});

mapPhotos.set(9, {
    title: "Countryside Lane",
    caption: "We enjoyed a quiet stroll down this countryside lane."
});

mapPhotos.set(10, {
    title: "Sunset",
    caption: "Sunset at the coast! The sky turned a lovely shade of orange."
});

mapPhotos.set(11, {
    title: "Cave",
    caption: "I did a tour of a cave today and the view of the landscape below was breathtaking."
});

mapPhotos.set(12, {
    title: "Bluebells",
    caption: "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in."
});

function createItem() {
    return '<li data-id="1">' +
                '<a class="dummy2 dummy3" href="images/image-1.jpg" data-lightbox="image" data-title="caption">' +
                    '<img class="image" src="javve.jpg" />' +
                '</a>' +
            '</li>';
}

const options = {
    valueNames: [
        'caption',
        { data: ['id'] },
        { name: 'image', attr: 'src' },
        { name: 'dummy2', attr: 'href' },
        { name: 'dummy3', attr: 'data-title' }
    ],
    item: createItem()
};

const values = [];

mapPhotos.forEach(function(value, key) {
    console.log(key + ' = ' + value);
    values.push({
        caption: value.caption,
        image: 'photos/thumbnails/' + key + '.jpg',
        id: key,
        dummy2: 'photos/' + key + '.jpg',
        dummy3: value.caption

    });
});

const hackerList = new List('hacker-list', options, values);


$('#search-form .search').bind('input', function(){
    let text = $(this).val();
    console.log(text);
    hackerList.search(text);
});