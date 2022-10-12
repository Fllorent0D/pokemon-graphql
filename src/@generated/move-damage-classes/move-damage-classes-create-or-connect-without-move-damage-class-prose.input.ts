import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_classesWhereUniqueInput } from './move-damage-classes-where-unique.input';
import { Type } from 'class-transformer';
import { move_damage_classesCreateWithoutMove_damage_class_proseInput } from './move-damage-classes-create-without-move-damage-class-prose.input';

@InputType()
export class move_damage_classesCreateOrConnectWithoutMove_damage_class_proseInput {

    @Field(() => move_damage_classesWhereUniqueInput, {nullable:false})
    @Type(() => move_damage_classesWhereUniqueInput)
    where!: move_damage_classesWhereUniqueInput;

    @Field(() => move_damage_classesCreateWithoutMove_damage_class_proseInput, {nullable:false})
    @Type(() => move_damage_classesCreateWithoutMove_damage_class_proseInput)
    create!: move_damage_classesCreateWithoutMove_damage_class_proseInput;
}
