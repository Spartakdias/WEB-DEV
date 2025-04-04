import json
from django.http import JsonResponse, HttpResponse
from django.views import View
from .models import Product, Category

class ProductListView(View):
    def get(self, request):
        products = list(Product.objects.values())
        return JsonResponse(products, safe=False)

class ProductDetailView(View):
    def get(self, request, id):
        try:
            product = Product.objects.values().get(id=id)
            return JsonResponse(product)
        except Product.DoesNotExist:
            return JsonResponse({'error': 'Product not found'}, status=404)

class CategoryListView(View):
    def get(self, request):
        categories = list(Category.objects.values())
        return JsonResponse(categories, safe=False)

class CategoryDetailView(View):
    def get(self, request, id):
        try:
            category = Category.objects.values().get(id=id)
            return JsonResponse(category)
        except Category.DoesNotExist:
            return JsonResponse({'error': 'Category not found'}, status=404)

class ProductsByCategoryView(View):
    def get(self, request, id):
        products = list(Product.objects.filter(category_id=id).values())
        return JsonResponse(products, safe=False)
