import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_class_proseWhereUniqueInput } from './move-damage-class-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_damage_class_proseUpdateWithoutMove_damage_classesInput } from './move-damage-class-prose-update-without-move-damage-classes.input';
import { move_damage_class_proseCreateWithoutMove_damage_classesInput } from './move-damage-class-prose-create-without-move-damage-classes.input';

@InputType()
export class move_damage_class_proseUpsertWithWhereUniqueWithoutMove_damage_classesInput {

    @Field(() => move_damage_class_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_damage_class_proseWhereUniqueInput)
    where!: move_damage_class_proseWhereUniqueInput;

    @Field(() => move_damage_class_proseUpdateWithoutMove_damage_classesInput, {nullable:false})
    @Type(() => move_damage_class_proseUpdateWithoutMove_damage_classesInput)
    update!: move_damage_class_proseUpdateWithoutMove_damage_classesInput;

    @Field(() => move_damage_class_proseCreateWithoutMove_damage_classesInput, {nullable:false})
    @Type(() => move_damage_class_proseCreateWithoutMove_damage_classesInput)
    create!: move_damage_class_proseCreateWithoutMove_damage_classesInput;
}
