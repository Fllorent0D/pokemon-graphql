import { registerEnumType } from '@nestjs/graphql';

export enum Berry_flavorsScalarFieldEnum {
    berry_id = "berry_id",
    contest_type_id = "contest_type_id",
    flavor = "flavor"
}


registerEnumType(Berry_flavorsScalarFieldEnum, { name: 'Berry_flavorsScalarFieldEnum', description: undefined })
