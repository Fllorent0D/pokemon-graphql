import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_groupsCreateInput } from '../version-groups/version-groups-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneversionGroupsArgs {

    @Field(() => version_groupsCreateInput, {nullable:false})
    @Type(() => version_groupsCreateInput)
    data!: version_groupsCreateInput;
}
