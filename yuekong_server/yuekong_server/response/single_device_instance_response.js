/**
 * Created by strawmanbobi
 * 2015-05-10
 */

ServiceResponse = require("./service_response");
function SingleDeviceInstanceResponse(status, entity) {
    this.entity = entity;
    ServiceResponse.call(this, status);
}

module.exports = SingleDeviceInstanceResponse;