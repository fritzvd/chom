---
eleventyExcludeFromCollections: true
permalink: false
---
# Cheeses of Mexico

Website for Cheeses of Mexico.

New releases can be added by adding cover images
of 500x500 and 400x400 in the folder
[`static/img/covers/`](static/img/covers/) with the right name.

For Cheeses of Mexico albums go in [`_data/album.json`](_data/album.json)
whereas other ventures go into their own `.json`-file.

Make sure to check all the data and links before publishing.

Example release:

```json
   {
        "name": "los-demos",
        "title": "Cheeses of Mexico - Los Demos",
        "cover_400": "https://cheesesofmexico.com/static/img/covers/los-demos_400.png",
        "cover": "https://cheesesofmexico.com/static/img/covers/los-demos.png",
        "url": "https://cheesesofmexico.com/album/los-demos",
        "services": [   
            {
                "serviceName": "spotify",
                "url": "https://open.spotify.com/album/6nDfB82CacuI7MagtSYtzV?si=zLAet5oIQ66Ft3Ndvf5HoA"
            },
            {
                "serviceName": "apple-music",
                "url": "https://music.apple.com/nl/album/los-demos-single/843166021?l=en"
            },
            {
                "serviceName": "tidal",
                "url": "https://tidal.com/browse/album/27272045"
            },
            {
                "serviceName": "bandcamp",
                "url": "https://cheesesofmexico.bandcamp.com/album/los-demos"
            },
            {
                "serviceName": "deezer",
                "url": "https://deezer.page.link/HkwY3LYGbNfhu7ei6"
            },
            {
                "serviceName": "amazon-music",
                "url": "https://music.amazon.com.mx/albums/B00J46U25O"
            } 
        ]
    }
```

Make sure that a music service also has an image in the [`static/img/vendors`-folder](static/img/vendors/).
