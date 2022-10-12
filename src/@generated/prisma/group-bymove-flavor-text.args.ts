import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flavor_textWhereInput } from '../move-flavor-text/move-flavor-text-where.input';
import { Type } from 'class-transformer';
import { move_flavor_textOrderByWithAggregationInput } from '../move-flavor-text/move-flavor-text-order-by-with-aggregation.input';
import { Move_flavor_textScalarFieldEnum } from './move-flavor-text-scalar-field.enum';
import { move_flavor_textScalarWhereWithAggregatesInput } from '../move-flavor-text/move-flavor-text-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBymoveFlavorTextArgs {

    @Field(() => move_flavor_textWhereInput, {nullable:true})
    @Type(() => move_flavor_textWhereInput)
    where?: move_flavor_textWhereInput;

    @Field(() => [move_flavor_textOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<move_flavor_textOrderByWithAggregationInput>;

    @Field(() => [Move_flavor_textScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof Move_flavor_textScalarFieldEnum>;

    @Field(() => move_flavor_textScalarWhereWithAggregatesInput, {nullable:true})
    having?: move_flavor_textScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
