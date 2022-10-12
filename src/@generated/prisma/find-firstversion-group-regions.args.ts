import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { version_group_regionsWhereInput } from '../version-group-regions/version-group-regions-where.input';
import { Type } from 'class-transformer';
import { version_group_regionsOrderByWithRelationInput } from '../version-group-regions/version-group-regions-order-by-with-relation.input';
import { version_group_regionsWhereUniqueInput } from '../version-group-regions/version-group-regions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Version_group_regionsScalarFieldEnum } from './version-group-regions-scalar-field.enum';

@ArgsType()
export class FindFirstversionGroupRegionsArgs {

    @Field(() => version_group_regionsWhereInput, {nullable:true})
    @Type(() => version_group_regionsWhereInput)
    where?: version_group_regionsWhereInput;

    @Field(() => [version_group_regionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<version_group_regionsOrderByWithRelationInput>;

    @Field(() => version_group_regionsWhereUniqueInput, {nullable:true})
    cursor?: version_group_regionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Version_group_regionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Version_group_regionsScalarFieldEnum>;
}
