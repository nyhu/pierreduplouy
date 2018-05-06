FROM nginx

# Copy our default nginx config
COPY nginx/pierreduplouy.conf /etc/nginx/conf.d/default.conf
# Remove default nginx website
RUN rm -rf /pierreduplouy
# From 'builder' stage copy over the artifacts in dist folder to default nginx public folder
COPY dist /pierreduplouy
