import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_groupsUpdateInput } from '../version-groups/version-groups-update.input';
import { Type } from 'class-transformer';
import { version_groupsWhereUniqueInput } from '../version-groups/version-groups-where-unique.input';

@ArgsType()
export class UpdateOneversionGroupsArgs {

    @Field(() => version_groupsUpdateInput, {nullable:false})
    @Type(() => version_groupsUpdateInput)
    data!: version_groupsUpdateInput;

    @Field(() => version_groupsWhereUniqueInput, {nullable:false})
    @Type(() => version_groupsWhereUniqueInput)
    where!: version_groupsWhereUniqueInput;
}
