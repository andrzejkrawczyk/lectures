"""API MODULE"""

from __future__ import absolute_import
from __future__ import division
from __future__ import print_function

from middleware import AuthMiddleware
from resources import Resource

import falcon


def generic_error_handler(ex, req, resp, params):

    if isinstance(ex, falcon.HTTPNotFound):
        raise falcon.HTTPNotFound(description='Not Found')
    elif isinstance(ex, falcon.HTTPMethodNotAllowed):
        raise falcon.HTTPMethodNotAllowed(falcon.HTTP_405, description='Method Not Allowed')
    else:
        raise ex


app = falcon.API(middleware=[
    AuthMiddleware()
])

app.add_route('/', Resource())
# app.add_route('/api/v1/auth/', include(AuthRouting))
# app.add_route('/api/v1/auth/login', Login())
# app.add_route('/api/v1/auth/register', Register())

app.add_error_handler(Exception, generic_error_handler)