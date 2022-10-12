import { registerEnumType } from '@nestjs/graphql';

export enum Move_flavor_textScalarFieldEnum {
    move_id = "move_id",
    version_group_id = "version_group_id",
    language_id = "language_id",
    flavor_text = "flavor_text"
}


registerEnumType(Move_flavor_textScalarFieldEnum, { name: 'Move_flavor_textScalarFieldEnum', description: undefined })
