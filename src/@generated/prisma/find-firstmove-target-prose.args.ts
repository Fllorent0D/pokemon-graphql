import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_target_proseWhereInput } from '../move-target-prose/move-target-prose-where.input';
import { Type } from 'class-transformer';
import { move_target_proseOrderByWithRelationInput } from '../move-target-prose/move-target-prose-order-by-with-relation.input';
import { move_target_proseWhereUniqueInput } from '../move-target-prose/move-target-prose-where-unique.input';
import { Int } from '@nestjs/graphql';
import { Move_target_proseScalarFieldEnum } from './move-target-prose-scalar-field.enum';

@ArgsType()
export class FindFirstmoveTargetProseArgs {

    @Field(() => move_target_proseWhereInput, {nullable:true})
    @Type(() => move_target_proseWhereInput)
    where?: move_target_proseWhereInput;

    @Field(() => [move_target_proseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_target_proseOrderByWithRelationInput>;

    @Field(() => move_target_proseWhereUniqueInput, {nullable:true})
    cursor?: move_target_proseWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [Move_target_proseScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof Move_target_proseScalarFieldEnum>;
}
