from django.conf.urls import url

from . import views

app_name = 'visitorhostel'

urlpatterns = [

    url(r'^$', views.visitorhostel, name='visitorhostel'),
    url(r'^request-booking/' , views.request_booking , name ='request_booking'),
    url(r'^confirm-booking/' , views.confirm_booking , name ='confirm_booking'),
    url(r'^cancel-booking/', views.cancel_booking, name = 'cancel_booking'),
    url(r'^reject-booking/', views.reject_booking, name = 'reject_booking'),
    url(r'^check-in/', views.check_in, name = 'check_in'),
    url(r'^check-out/', views.check_out, name = 'check_out'),
    url(r'^recordmeal/', views.record_meal, name = 'record_meal'),
    url(r'^bill/', views.bill_generation, name = 'bill_generation'),
    url(r'^room-availability/', views.room_availabity, name = 'room_availabity'),
    url(r'^add-to-inventory/', views.add_to_inventory, name = 'add_to_inventory'),
    url(r'^update-inventory/', views.update_inventory, name = 'update_inventory'),
    url(r'^edit-room-status/', views.edit_room_status, name = 'edit_room_status'),
    url(r'^booking-details/', views.booking_details, name = 'booking_details'),

]
