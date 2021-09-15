cache-responses: cached-keyman-api.json cached-languages.json

download: cached-keyman-api.json 

.PHONY: download cache-responses

BINDIR = ./bin

cached-languages.json: cached-keyman-api.json $(BINDIR)/extract-languages
	$(BINDIR)/extract-languages > $@

.PHONY: cached-keyman-api.json
cached-keyman-api.json: $(BINDIR)/fetch-latest-keyman-api
	$(BINDIR)/fetch-latest-keyman-api
