import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_classesCreateNestedOneWithoutMove_damage_class_proseInput } from '../move-damage-classes/move-damage-classes-create-nested-one-without-move-damage-class-prose.input';

@InputType()
export class move_damage_class_proseCreateWithoutLanguagesInput {

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => move_damage_classesCreateNestedOneWithoutMove_damage_class_proseInput, {nullable:false})
    move_damage_classes!: move_damage_classesCreateNestedOneWithoutMove_damage_class_proseInput;
}
