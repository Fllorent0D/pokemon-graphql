import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_classesUpdateWithoutTypesInput } from './move-damage-classes-update-without-types.input';
import { Type } from 'class-transformer';
import { move_damage_classesCreateWithoutTypesInput } from './move-damage-classes-create-without-types.input';

@InputType()
export class move_damage_classesUpsertWithoutTypesInput {

    @Field(() => move_damage_classesUpdateWithoutTypesInput, {nullable:false})
    @Type(() => move_damage_classesUpdateWithoutTypesInput)
    update!: move_damage_classesUpdateWithoutTypesInput;

    @Field(() => move_damage_classesCreateWithoutTypesInput, {nullable:false})
    @Type(() => move_damage_classesCreateWithoutTypesInput)
    create!: move_damage_classesCreateWithoutTypesInput;
}
