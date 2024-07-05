from django.urls import path
from .views import tienda_ani, adopcion_ani, nosotros_ani, contacto_ani, reg_ini_sesion_ani, pago_ani, contacto_ani, index_new, nosotros_ani, registro, base
from django.contrib.auth import views as auth_views
urlpatterns = [
    path('tienda_ani', tienda_ani, name='tienda_ani'),
    path('adopcion_ani', adopcion_ani, name='adopcion_ani'),
    path('nosotros_ani', nosotros_ani, name='nosotros_ani'),
    path('contacto_ani', contacto_ani, name='contacto_ani'),
    path('reg_ini_sesion_ani', reg_ini_sesion_ani, name='reg_ini_sesion_ani'),
    path('pago_ani', pago_ani, name='pago_ani'),
    path('contacto', contacto_ani, name='contacto_ani'),
    path('nosotros', nosotros_ani, name='nosotros_ani'),
    path('registro', registro, name='registro'),
    path('base', base, name='base'),
    path('', index_new, name='index_new'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
]
