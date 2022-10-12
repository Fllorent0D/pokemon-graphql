import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_group_regionsUpdateInput } from '../version-group-regions/version-group-regions-update.input';
import { Type } from 'class-transformer';
import { version_group_regionsWhereUniqueInput } from '../version-group-regions/version-group-regions-where-unique.input';

@ArgsType()
export class UpdateOneversionGroupRegionsArgs {

    @Field(() => version_group_regionsUpdateInput, {nullable:false})
    @Type(() => version_group_regionsUpdateInput)
    data!: version_group_regionsUpdateInput;

    @Field(() => version_group_regionsWhereUniqueInput, {nullable:false})
    @Type(() => version_group_regionsWhereUniqueInput)
    where!: version_group_regionsWhereUniqueInput;
}
