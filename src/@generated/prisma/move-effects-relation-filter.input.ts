import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_effectsWhereInput } from '../move-effects/move-effects-where.input';

@InputType()
export class Move_effectsRelationFilter {

    @Field(() => move_effectsWhereInput, {nullable:true})
    is?: move_effectsWhereInput;

    @Field(() => move_effectsWhereInput, {nullable:true})
    isNot?: move_effectsWhereInput;
}
