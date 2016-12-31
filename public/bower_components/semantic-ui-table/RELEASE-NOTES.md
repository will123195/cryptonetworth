### Version 2.2.0 - June 26, 2016

- **NPM** - NPM dependencies have all been updated to latest stable releases
- **Table** - `definition table` now includes additional class names for forcing, or ignoring definition cell styles
- **Table** - `definition table` now supports `definition` variation to specify definition styles on an element that is not `:first-child`
- **Table** - `definition table` now supports `ignored` variation to force a `first-child` to ignore its default definition stylings
- **Table** - `striped selectable` table would not correctly show hover color on striped rows

### Version 2.1.5 - Nov 1, 2015

- **Table** - Added `selectable` on table cell, allowing for full table-cell links

### Version 2.1.4 - Sep 13, 2015

- **Table** - Fixed issue where `(x) column segment table` was inheriting accidentally inheriting some grid styles

#### Features

- **Table** - New `fixed` table variation added for use with `table-layout: fixed;`. This also supports "..." ellipsis when used with `single line` content

#### Bugs

- **Build Tools** - Fixes issue where component glob `{tab, table}` caused table to be included twice in concatenated source **
- **Table/Label** - `ribbon labels` will now automatically position themselves when used inside a table [#1930](https://github.com/Semantic-Org/Semantic-UI/issues/1930)

### Version 2.0.7 - July 23, 2015

- **Popup** - Fixed issue where popup would not open on tablets with both touchscreen and mouse on mouseenter. [#2715](https://github.com/Semantic-Org/Semantic-UI/issues/2715)

### Version 2.0.4 - July 17, 2015

- **Menu/Segment/Table** - Consolidated `attached` logic for all components using attached. [#2599](https://github.com/Semantic-Org/Semantic-UI/issues/2599)

### Version 2.0.0 - June 30, 2015

- **Modal** - If you are using a modal with image content, you will need to use `image content` on the parent element. This is because `flex` rules require parent styling that the previous `table-row` rules did not.
- **Grid** - `celled grid` now removes internal cells on mobile and tablet when used with `doubling` grid responsive variation.
- **Grid** - `celled` and `internally celled` grid now use flexbox instead of `display: table;`
- **Table** - Adds `selectable table` variation, which shows hover effect on row when hovering
- **Table** - Added `vertical alignment` variations to `ui table`
- **Table** - Added `single line` table variation which prevents text from wrapping
- **List** - Bullets and numbers are no longer selectable in `bulleted list` and `ordered list`
- **Table** - Fixes `sorted` column are not correctly centered with `center aligned` due to margin on sort icon
- **Table** - Fixes `ascending` and `descending` icons were reversed in table
- **Table** - `very basic table` now works together with `padded table`
- **Table** - Fix inheritance of text alignment and vertical alignment
- **Header/Table/Divider** - These components now pull border color defaults from `site.variables` instead of using their own values
- **Table** - Table header colors and padding defaults have been slightly adjusted
- **Table** - Horizontal cell padding has been slightly reduced, and cell borders are slightly lighter.

### Version 1.11.0 - March 3, 2015

- **Icon** - added `@src` variable to make it adjustable with themes that dont support all types like `woff2`
- **Table** - Fixes table on `mobile` sizes can surpass parent container width

### UI Changes

- **Input** - Input with dropdowns is now much easier, see docs. `action input` and `labeled input` now use `display: flex`. `ui action input` now supports `<button>` tag usage (!) which support `flex` but not `table-cell`

### Version 1.8.0 - January 23, 2015

- **Dropdown** - Keyboard navigation will now allow opening of sub menus with right/left arrow. Enter will open sub-menus on an unselectable category (`allowCategorySelection: false`) as well.

### Version 1.7.0 - January 14, 2015

- **Steps** - Steps now use ``table-cell`` to allow steps to be equal height by default, even with different content height.

### Version 1.5.0 - December 30, 2014

- **Table** - Table now has coupling with image to make sure size is preserved correctly with table sizing when used inside a table cell.
- **Form** - Fixed (x) wide field not having correct bottom field margin when in ``fields`` group on tablet or mobile

### Version 1.3.0 - December 17, 2014

- **Steps** - Steps are now responsive for mobile by default, and have optional responsive styles for tablet
- **Table** - Table has now variations to remove responsive stylings, specify responsiveness for tablet
- **Table** - Table now has a ``structured table`` type, which removes some formatting considerations to support complex table layouts with ``colspan`` and ``rowspan``
- **Table** - Fix responsive styles when applied to ``definition table``.

### Version 1.2.0 - December 08, 2014

- **Dropdown** - Fixes bug with dropdown converted from ``select`` that use ``<option`` values with capital letters not being selectable

### Version 1.0.1 - November 28, 2014

- **Table** - Fixes table cell transition animating all properties

### Version 1.0.0 - November 24, 2014

- **Table** - Tables are no longer striped by default, instead you must specify the 'striped' variation
- **Table** - Tables now have 'basic' and 'very' basic variations

### Version 0.19.2 - Sep 11, 2014

- **Grid** - (Backport from 1.0 branch) Fixes issue where some combinations of (tablet/mobile/computer) only does not function correctly

### Version 0.15.0 - Mar 14, 2014

- **Table** - Fixes rounding on tables with multiple tfoot elements **Thanks webdesserts**

### Version 0.12.2 - Jan 21, 2014

- **Grid** - Fixes grid ``only tablet/mobile/computer`` showing both devices on exact pixel of breakpoint, i.e. 768px

### Version 0.9.0 - Nov 5, 2013

- **Grid** - Fixes comp/tablet/mobile only columns not working if not inside a row

### Version 0.7.0 - Oct 22, 2013

- **Table** - Added awesome new responsive style to ui tables
- Adds sortable tables to docs
- **List** - Celled tables now have celled table headers
- **Table** - Table headers are now darker to increase contrast with rainbow striped rows

### Version 0.1.0 - Sep 25, 2013