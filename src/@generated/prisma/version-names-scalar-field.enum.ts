import { registerEnumType } from '@nestjs/graphql';

export enum Version_namesScalarFieldEnum {
    version_id = "version_id",
    local_language_id = "local_language_id",
    name = "name"
}


registerEnumType(Version_namesScalarFieldEnum, { name: 'Version_namesScalarFieldEnum', description: undefined })
