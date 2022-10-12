import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { contest_combosWhereInput } from '../contest-combos/contest-combos-where.input';
import { Type } from 'class-transformer';
import { contest_combosOrderByWithRelationInput } from '../contest-combos/contest-combos-order-by-with-relation.input';
import { contest_combosWhereUniqueInput } from '../contest-combos/contest-combos-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatecontestCombosArgs {

    @Field(() => contest_combosWhereInput, {nullable:true})
    @Type(() => contest_combosWhereInput)
    where?: contest_combosWhereInput;

    @Field(() => [contest_combosOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<contest_combosOrderByWithRelationInput>;

    @Field(() => contest_combosWhereUniqueInput, {nullable:true})
    cursor?: contest_combosWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
