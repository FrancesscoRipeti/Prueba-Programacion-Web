from django.urls import path
from .views import tienda_ani, adopcion_ani, listar_prod, eliminar_prod, actualizar_prod, editar_prod, registrar_prod, nosotros_ani, contacto_ani,reg_ini_sesion_ani, pago_ani, contacto_ani, index, nosotros_ani, registro, base
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
    path('', index, name='index'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('listar_prod', listar_prod, name='listar_prod'),
    path('registrar_prod/' ,registrar_prod, name='registrar_prod'),
    path('eliminar_prod/<int:id>/', eliminar_prod, name='eliminar_prod'),
    path('editar_prod/<int:id>/', editar_prod, name='editar_prod'),
    path('actualizar_prod/<int:id>/', actualizar_prod, name='actualizar_prod'),
]
