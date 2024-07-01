from django.shortcuts import render

from rest_framework import generics, mixins, viewsets
from .serializers import *
from .models import *
from rest_framework.response import Response

class ProductView(generics.GenericAPIView,mixins.ListModelMixin,mixins.RetrieveModelMixin):
    queryset = Product.objects.all().order_by("-id")
    serializer_class=ProductSerializers
    lookup_field = "id"

    def get(self,request,id=None):
        if id:
            return self.retrieve(request)
        else:
            return self.list(request)
        
        
class CatagoryView(viewsets.ViewSet):
    def list(self,request):
        query = Category.objects.all().order_by("-id")
        serializers = CatagorySerializer(query,many=True) # type: ignore
        return Response(serializers.data)
    
    def retrieve(self,request,pk=None):
        query = Category.objects.get(id=pk)
        serializers = CatagorySerializer(query)
        serializers_data = serializers.data
        all_data = []
        caregory_products = Product.objects.filter(category_id=serializers_data['id'])
        caregory_products_serializer = ProductSerializers(caregory_products,many=True)
        serializers_data["category_products"] = caregory_products_serializer.data
        all_data.append(serializers_data)

        return Response(all_data)
