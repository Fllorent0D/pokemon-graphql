import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_flavor_textWhereInput } from '../ability-flavor-text/ability-flavor-text-where.input';
import { Type } from 'class-transformer';
import { ability_flavor_textOrderByWithAggregationInput } from '../ability-flavor-text/ability-flavor-text-order-by-with-aggregation.input';
import { Ability_flavor_textScalarFieldEnum } from './ability-flavor-text-scalar-field.enum';
import { ability_flavor_textScalarWhereWithAggregatesInput } from '../ability-flavor-text/ability-flavor-text-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByabilityFlavorTextArgs {

    @Field(() => ability_flavor_textWhereInput, {nullable:true})
    @Type(() => ability_flavor_textWhereInput)
    where?: ability_flavor_textWhereInput;

    @Field(() => [ability_flavor_textOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ability_flavor_textOrderByWithAggregationInput>;

    @Field(() => [Ability_flavor_textScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Ability_flavor_textScalarFieldEnum>;

    @Field(() => ability_flavor_textScalarWhereWithAggregatesInput, {nullable:true})
    having?: ability_flavor_textScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
