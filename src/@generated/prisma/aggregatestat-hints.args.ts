import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_hintsWhereInput } from '../stat-hints/stat-hints-where.input';
import { Type } from 'class-transformer';
import { stat_hintsOrderByWithRelationInput } from '../stat-hints/stat-hints-order-by-with-relation.input';
import { stat_hintsWhereUniqueInput } from '../stat-hints/stat-hints-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatestatHintsArgs {

    @Field(() => stat_hintsWhereInput, {nullable:true})
    @Type(() => stat_hintsWhereInput)
    where?: stat_hintsWhereInput;

    @Field(() => [stat_hintsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<stat_hintsOrderByWithRelationInput>;

    @Field(() => stat_hintsWhereUniqueInput, {nullable:true})
    cursor?: stat_hintsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
