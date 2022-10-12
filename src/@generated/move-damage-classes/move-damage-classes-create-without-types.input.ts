import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_class_proseCreateNestedManyWithoutMove_damage_classesInput } from '../move-damage-class-prose/move-damage-class-prose-create-nested-many-without-move-damage-classes.input';
import { movesCreateNestedManyWithoutMove_damage_classesInput } from '../moves/moves-create-nested-many-without-move-damage-classes.input';
import { statsCreateNestedManyWithoutMove_damage_classesInput } from '../stats/stats-create-nested-many-without-move-damage-classes.input';

@InputType()
export class move_damage_classesCreateWithoutTypesInput {

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => move_damage_class_proseCreateNestedManyWithoutMove_damage_classesInput, {nullable:true})
    move_damage_class_prose?: move_damage_class_proseCreateNestedManyWithoutMove_damage_classesInput;

    @Field(() => movesCreateNestedManyWithoutMove_damage_classesInput, {nullable:true})
    moves?: movesCreateNestedManyWithoutMove_damage_classesInput;

    @Field(() => statsCreateNestedManyWithoutMove_damage_classesInput, {nullable:true})
    stats?: statsCreateNestedManyWithoutMove_damage_classesInput;
}
