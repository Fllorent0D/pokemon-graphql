import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_class_proseWhereInput } from '../move-damage-class-prose/move-damage-class-prose-where.input';

@InputType()
export class Move_damage_class_proseListRelationFilter {

    @Field(() => move_damage_class_proseWhereInput, {nullable:true})
    every?: move_damage_class_proseWhereInput;

    @Field(() => move_damage_class_proseWhereInput, {nullable:true})
    some?: move_damage_class_proseWhereInput;

    @Field(() => move_damage_class_proseWhereInput, {nullable:true})
    none?: move_damage_class_proseWhereInput;
}
