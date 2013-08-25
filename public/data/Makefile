OGR ?= ogr2ogr -F GeoJSON
TOPOJSON ?= ../../topojson/bin/topojson --id-property name
SIMPLIFY ?= 24

all: \
	us-states.topojson 

us-states.topojson: us-states.geojson
	$(TOPOJSON) --simplify $(SIMPLIFY) -o $@ $<
	perl -pi -e "s/us-states/states/g" $@

clean:
	rm -f *.topojson
