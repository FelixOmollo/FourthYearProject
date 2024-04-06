from collections import UserDict
from django.db import models
from django.contrib.gis.db import models
from django.contrib.gis.db import models as gis_models
from django.utils.translation import gettext_lazy as _

                

# Maps different power outages with a name and a location.

class Outages(models.Model):
    name = models.CharField(_("Name"), max_length=255,default="")
    location=models.PointField(srid=4326)
    objects = models.Manager()
    

    def __unicode__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Outages"

class OutageReport(models.Model):
    #reported_by = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    fullname = models.CharField(_("Full Name"), max_length=255, default="") 
    id_number = models.CharField(_("ID Number"), max_length=50, default="")
    email = models.EmailField(_("Email"), max_length=255, default='')
    phone_number = models.CharField(_("Phone Number"), max_length=20, default="")
    location=models.PointField(srid=4326)
    description = models.TextField(_("Description"))
    timestamp = models.DateTimeField(_("Timestamp"), auto_now_add=True)

    def __str__(self):
        return f"Outage Report by {self.fullname} at {self.timestamp}"

class KisumuCentralWards(models.Model):   
    fid = models.FloatField()
    level = models.CharField(max_length=4)
    shapename = models.CharField(max_length=33)
    shapeid = models.CharField(max_length=26)
    shapegroup = models.CharField(max_length=3)
    shapetype = models.CharField(max_length=4)
    geom = models.MultiPolygonField(srid=4326)

    def __unicode__(self):
        return self.KisumuCentralWards
    class Meta:
        verbose_name_plural = "KisumuCentralWards"