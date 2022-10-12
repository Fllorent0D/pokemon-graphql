import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effect_proseWhereInput } from '../move-effect-prose/move-effect-prose-where.input';

@InputType()
export class Move_effect_proseListRelationFilter {

    @Field(() => move_effect_proseWhereInput, {nullable:true})
    every?: move_effect_proseWhereInput;

    @Field(() => move_effect_proseWhereInput, {nullable:true})
    some?: move_effect_proseWhereInput;

    @Field(() => move_effect_proseWhereInput, {nullable:true})
    none?: move_effect_proseWhereInput;
}
