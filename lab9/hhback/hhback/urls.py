from django.shortcuts import redirect

urlpatterns = [
    path('', lambda request: redirect('api/', permanent=False)),  # редирект на /api/
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
]
