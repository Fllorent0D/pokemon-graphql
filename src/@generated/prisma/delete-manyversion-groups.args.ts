import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_groupsWhereInput } from '../version-groups/version-groups-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyversionGroupsArgs {

    @Field(() => version_groupsWhereInput, {nullable:true})
    @Type(() => version_groupsWhereInput)
    where?: version_groupsWhereInput;
}
