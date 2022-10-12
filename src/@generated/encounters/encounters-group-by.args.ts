import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encountersWhereInput } from './encounters-where.input';
import { Type } from 'class-transformer';
import { encountersOrderByWithAggregationInput } from './encounters-order-by-with-aggregation.input';
import { EncountersScalarFieldEnum } from '../prisma/encounters-scalar-field.enum';
import { encountersScalarWhereWithAggregatesInput } from './encounters-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class encountersGroupByArgs {

    @Field(() => encountersWhereInput, {nullable:true})
    @Type(() => encountersWhereInput)
    where?: encountersWhereInput;

    @Field(() => [encountersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<encountersOrderByWithAggregationInput>;

    @Field(() => [EncountersScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof EncountersScalarFieldEnum>;

    @Field(() => encountersScalarWhereWithAggregatesInput, {nullable:true})
    having?: encountersScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
