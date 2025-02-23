export enum ApiPath {
    ipApi = "https://ipapi.co/json/",
    url = 'http://localhost:3000/api/',
    awsFile = 'https://panadola.s3.us-west-2.amazonaws.com/',

    signin = url + 'signin',
    start = url + 'website',
    token = url + 'token',
    statistics = url + 'statistics',

    administration = url + 'administration/',
    administrationGetData = administration + 'getData',
    uploadFile = administration + 'upload',
    certificate = administration + 'certificate',
}