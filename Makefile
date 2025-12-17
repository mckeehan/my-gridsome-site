SRCS := $(shell find src -name "*.vue")

all: build

package-lock.json: package.json
	npm install

build: package-lock.json gridsome.server.js gridsome.config.js src/main.js $(SRCS)
	gridsome build
	touch build

develop: clean package-lock.json
	gridsome develop -h 0.0.0.0

clean:
	#gatsby clean
	rm -rf dist
	rm -f build

real-clean: clean
	rm -rf node_modules package-lock.json
	rm -rf .cache .temp

publish: build
	echo "Not implemented"

