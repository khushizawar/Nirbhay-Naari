from django.urls import path
from django.conf import settings
from django.conf.urls.static import static

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('login/', views.about, name='login'),
    path('report/', views.about, name='report'),
    path('signup/', views.about, name='signup'),
    path('story/', views.about, name='story'),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)