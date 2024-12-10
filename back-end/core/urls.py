from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('core/', include('skate.urls')),  # Adiciona o prefixo 'core/'
]