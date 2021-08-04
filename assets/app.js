/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.scss';

// you can specify whith plugins you need
import { Tooltip, Toast, Popover } from 'bootstrap';

import './js/main'
import './js/copyButton'
import './js/feather'
import './js/sidebarMenu'
import '../node_modules/jquery/dist/jquery'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/jquery-slimscroll/jquery.slimscroll'
import '../node_modules/feather-icons/dist/feather'
import '../node_modules/prismjs/components/prism-core'
import '../node_modules/prismjs/components/prism-markup'
import '../node_modules/prismjs/plugins/line-numbers/prism-line-numbers'
import '../node_modules/apexcharts/dist/apexcharts'
import '../node_modules/dropzone/dist/dropzone'

// start the Stimulus application
import './bootstrap';
