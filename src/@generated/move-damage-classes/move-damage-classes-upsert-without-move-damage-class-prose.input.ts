import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_classesUpdateWithoutMove_damage_class_proseInput } from './move-damage-classes-update-without-move-damage-class-prose.input';
import { Type } from 'class-transformer';
import { move_damage_classesCreateWithoutMove_damage_class_proseInput } from './move-damage-classes-create-without-move-damage-class-prose.input';

@InputType()
export class move_damage_classesUpsertWithoutMove_damage_class_proseInput {

    @Field(() => move_damage_classesUpdateWithoutMove_damage_class_proseInput, {nullable:false})
    @Type(() => move_damage_classesUpdateWithoutMove_damage_class_proseInput)
    update!: move_damage_classesUpdateWithoutMove_damage_class_proseInput;

    @Field(() => move_damage_classesCreateWithoutMove_damage_class_proseInput, {nullable:false})
    @Type(() => move_damage_classesCreateWithoutMove_damage_class_proseInput)
    create!: move_damage_classesCreateWithoutMove_damage_class_proseInput;
}
