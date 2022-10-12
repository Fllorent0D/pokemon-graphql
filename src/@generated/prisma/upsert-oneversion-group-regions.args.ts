import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_group_regionsWhereUniqueInput } from '../version-group-regions/version-group-regions-where-unique.input';
import { Type } from 'class-transformer';
import { version_group_regionsCreateInput } from '../version-group-regions/version-group-regions-create.input';
import { version_group_regionsUpdateInput } from '../version-group-regions/version-group-regions-update.input';

@ArgsType()
export class UpsertOneversionGroupRegionsArgs {

    @Field(() => version_group_regionsWhereUniqueInput, {nullable:false})
    @Type(() => version_group_regionsWhereUniqueInput)
    where!: version_group_regionsWhereUniqueInput;

    @Field(() => version_group_regionsCreateInput, {nullable:false})
    @Type(() => version_group_regionsCreateInput)
    create!: version_group_regionsCreateInput;

    @Field(() => version_group_regionsUpdateInput, {nullable:false})
    @Type(() => version_group_regionsUpdateInput)
    update!: version_group_regionsUpdateInput;
}
