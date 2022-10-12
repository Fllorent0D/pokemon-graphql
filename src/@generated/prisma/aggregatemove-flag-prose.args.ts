import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_flag_proseWhereInput } from '../move-flag-prose/move-flag-prose-where.input';
import { Type } from 'class-transformer';
import { move_flag_proseOrderByWithRelationInput } from '../move-flag-prose/move-flag-prose-order-by-with-relation.input';
import { move_flag_proseWhereUniqueInput } from '../move-flag-prose/move-flag-prose-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatemoveFlagProseArgs {

    @Field(() => move_flag_proseWhereInput, {nullable:true})
    @Type(() => move_flag_proseWhereInput)
    where?: move_flag_proseWhereInput;

    @Field(() => [move_flag_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_flag_proseOrderByWithRelationInput>;

    @Field(() => move_flag_proseWhereUniqueInput, {nullable:true})
    cursor?: move_flag_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
