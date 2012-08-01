require 'bundler'
Bundler.setup
Bundler.require
require 'rack/contrib/try_static'

use Rack::TryStatic,
    :root => "_site",  # static files root dir
    :urls => %w[/],     # match all requests
    :try => ['.html', 'index.html', '/index.html'] # try these postfixes sequentially

run lambda { [404, {'Content-Type' => 'text/html'}, ['whoops! Not Found']]}
