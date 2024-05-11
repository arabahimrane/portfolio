const AdminData = require('./model/admin.model');
const ClientData = require('./model/client.model');
exports.getAdminById = async (id) => {
    return await AdminData.findOne({ id: id });
}

exports.getAdminByUsername = async (username) => {
    return await AdminData.findOne({ username: username });
}

exports.getData = async (pageNumber, pageSize) => {
    !pageSize ? pageSize = 10 : pageSize;
    const skip = (pageNumber - 1) * pageSize;

    const totalCount = await ClientData.countDocuments({});
    clients = await ClientData.find({})
        .select('token ip city country_name date')
        .sort({ date: -1 }) // Tri par date dans l'ordre décroissant (-1 pour du plus récent au plus ancien)
        .skip(skip)
        .limit(pageSize);
    
    return {
        clients: clients,
        clientsLength: totalCount,
        currentPage: pageNumber,
        totalPages: Math.ceil(totalCount / pageSize)
    };

}