from rest_framework import serializers
from .models import *


class ProductSerializers(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
        depth = 1


class ProfileSerializers(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class CatagorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"