from django.urls import path, include
from rest_framework import routers
from .views import *

route = routers.DefaultRouter()
route.register("categori",CatagoryView,basename="CatagoryView")

app_name = 'shop'

urlpatterns = [
    path("", include(route.urls) ),
    path("product/",ProductView.as_view(),name="product"),
    path("product/<int:id>/",ProductView.as_view(),name="productdetal")

    
    
]
