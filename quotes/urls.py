from django.urls import path
from . import views

urlpatterns = [
    path('', views.quotes, name='quotes'),
    path('add/', views.add_quote, name='add_quote'),
    path('delete/<int:quote_id>/', views.delete_quote, name='delete_quote'),
]