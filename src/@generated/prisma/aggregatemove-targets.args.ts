import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_targetsWhereInput } from '../move-targets/move-targets-where.input';
import { Type } from 'class-transformer';
import { move_targetsOrderByWithRelationInput } from '../move-targets/move-targets-order-by-with-relation.input';
import { move_targetsWhereUniqueInput } from '../move-targets/move-targets-where-unique.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class AggregatemoveTargetsArgs {

    @Field(() => move_targetsWhereInput, {nullable:true})
    @Type(() => move_targetsWhereInput)
    where?: move_targetsWhereInput;

    @Field(() => [move_targetsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<move_targetsOrderByWithRelationInput>;

    @Field(() => move_targetsWhereUniqueInput, {nullable:true})
    cursor?: move_targetsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
