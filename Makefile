cache-responses: cached-keyman-api.json cached-languages.json

download: cached-keyman-api.json 

.PHONY: download cache-responses

LIBEXEC = ./libexec

cached-languages.json: cached-keyman-api.json $(LIBEXEC)/extract-languages
	$(LIBEXEC)/extract-languages > $@

.PHONY: cached-keyman-api.json
cached-keyman-api.json: $(LIBEXEC)/fetch-latest-keyman-api
	$(LIBEXEC)/fetch-latest-keyman-api
