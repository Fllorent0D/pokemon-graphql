import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { abilitiesWhereInput } from './abilities-where.input';
import { Type } from 'class-transformer';
import { abilitiesOrderByWithAggregationInput } from './abilities-order-by-with-aggregation.input';
import { AbilitiesScalarFieldEnum } from '../prisma/abilities-scalar-field.enum';
import { abilitiesScalarWhereWithAggregatesInput } from './abilities-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class abilitiesGroupByArgs {

    @Field(() => abilitiesWhereInput, {nullable:true})
    @Type(() => abilitiesWhereInput)
    where?: abilitiesWhereInput;

    @Field(() => [abilitiesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<abilitiesOrderByWithAggregationInput>;

    @Field(() => [AbilitiesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AbilitiesScalarFieldEnum>;

    @Field(() => abilitiesScalarWhereWithAggregatesInput, {nullable:true})
    having?: abilitiesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
