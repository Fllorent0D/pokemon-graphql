import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_groupsWhereUniqueInput } from '../version-groups/version-groups-where-unique.input';
import { Type } from 'class-transformer';
import { version_groupsCreateInput } from '../version-groups/version-groups-create.input';
import { version_groupsUpdateInput } from '../version-groups/version-groups-update.input';

@ArgsType()
export class UpsertOneversionGroupsArgs {

    @Field(() => version_groupsWhereUniqueInput, {nullable:false})
    @Type(() => version_groupsWhereUniqueInput)
    where!: version_groupsWhereUniqueInput;

    @Field(() => version_groupsCreateInput, {nullable:false})
    @Type(() => version_groupsCreateInput)
    create!: version_groupsCreateInput;

    @Field(() => version_groupsUpdateInput, {nullable:false})
    @Type(() => version_groupsUpdateInput)
    update!: version_groupsUpdateInput;
}
