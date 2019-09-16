FROM nginx:1.15.6
MAINTAINER phinesze <phinesze@gmail.com>
CMD /bin/sh -c "nginx; while true; do echo metaweb-hello_ui; sleep 60000; done"