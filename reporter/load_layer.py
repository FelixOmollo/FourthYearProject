import os
from django.contrib.gis.utils import LayerMapping
from .models import KisumuCentralWards

kisumucentralwards_mapping = {
    'fid': 'fid',
    'level': 'Level',
    'shapename': 'shapeName',
    'shapeid': 'shapeID',
    'shapegroup': 'shapeGroup',
    'shapetype': 'shapeType',
    'geom': 'MULTIPOLYGON',
}

KisumuCentralWards_shapefile = os.path.abspath(os.path.join(os.path.dirname(__file__),'Data/KisumuCentralWards.shp'))
def run(verbose=True):
    lm = LayerMapping(KisumuCentralWards,KisumuCentralWards_shapefile,kisumucentralwards_mapping,transform=False,encoding='iso-8859-1')
    lm.save(strict=True,verbose=verbose)