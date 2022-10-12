import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_flag_proseWhereInput } from '../move-flag-prose/move-flag-prose-where.input';

@InputType()
export class Move_flag_proseListRelationFilter {

    @Field(() => move_flag_proseWhereInput, {nullable:true})
    every?: move_flag_proseWhereInput;

    @Field(() => move_flag_proseWhereInput, {nullable:true})
    some?: move_flag_proseWhereInput;

    @Field(() => move_flag_proseWhereInput, {nullable:true})
    none?: move_flag_proseWhereInput;
}
