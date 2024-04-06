from django.contrib import admin
from .models import KisumuCentralWards, Outages, OutageReport
from leaflet.admin import LeafletGeoAdmin

# Register your models here.
class OutagesAdmin(LeafletGeoAdmin):
    list_display=('name','location')
    search_fields = ('name',)

class OutageReportAdmin(LeafletGeoAdmin):
    list_display = ('fullname', 'email', 'description','location','timestamp',)
    search_fields = ('fullname', 'email')

class KisumuCentralWardsAdmin(LeafletGeoAdmin):
    list_display = ('shapename','level')


admin.site.register(Outages, OutagesAdmin)
admin.site.register(OutageReport, OutageReportAdmin)
admin.site.register(KisumuCentralWards, KisumuCentralWardsAdmin)
