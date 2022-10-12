import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_target_proseWhereInput } from '../move-target-prose/move-target-prose-where.input';

@InputType()
export class Move_target_proseListRelationFilter {

    @Field(() => move_target_proseWhereInput, {nullable:true})
    every?: move_target_proseWhereInput;

    @Field(() => move_target_proseWhereInput, {nullable:true})
    some?: move_target_proseWhereInput;

    @Field(() => move_target_proseWhereInput, {nullable:true})
    none?: move_target_proseWhereInput;
}
