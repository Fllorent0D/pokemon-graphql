import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_group_regionsWhereUniqueInput } from '../version-group-regions/version-group-regions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueversionGroupRegionsArgs {

    @Field(() => version_group_regionsWhereUniqueInput, {nullable:false})
    @Type(() => version_group_regionsWhereUniqueInput)
    where!: version_group_regionsWhereUniqueInput;
}
