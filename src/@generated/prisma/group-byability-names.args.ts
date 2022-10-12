import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_namesWhereInput } from '../ability-names/ability-names-where.input';
import { Type } from 'class-transformer';
import { ability_namesOrderByWithAggregationInput } from '../ability-names/ability-names-order-by-with-aggregation.input';
import { Ability_namesScalarFieldEnum } from './ability-names-scalar-field.enum';
import { ability_namesScalarWhereWithAggregatesInput } from '../ability-names/ability-names-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByabilityNamesArgs {

    @Field(() => ability_namesWhereInput, {nullable:true})
    @Type(() => ability_namesWhereInput)
    where?: ability_namesWhereInput;

    @Field(() => [ability_namesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ability_namesOrderByWithAggregationInput>;

    @Field(() => [Ability_namesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Ability_namesScalarFieldEnum>;

    @Field(() => ability_namesScalarWhereWithAggregatesInput, {nullable:true})
    having?: ability_namesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
