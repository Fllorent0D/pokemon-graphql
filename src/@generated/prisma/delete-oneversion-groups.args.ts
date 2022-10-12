import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_groupsWhereUniqueInput } from '../version-groups/version-groups-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneversionGroupsArgs {

    @Field(() => version_groupsWhereUniqueInput, {nullable:false})
    @Type(() => version_groupsWhereUniqueInput)
    where!: version_groupsWhereUniqueInput;
}
