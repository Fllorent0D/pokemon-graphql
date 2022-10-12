import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_classesUpdateWithoutMovesInput } from './move-damage-classes-update-without-moves.input';
import { Type } from 'class-transformer';
import { move_damage_classesCreateWithoutMovesInput } from './move-damage-classes-create-without-moves.input';

@InputType()
export class move_damage_classesUpsertWithoutMovesInput {

    @Field(() => move_damage_classesUpdateWithoutMovesInput, {nullable:false})
    @Type(() => move_damage_classesUpdateWithoutMovesInput)
    update!: move_damage_classesUpdateWithoutMovesInput;

    @Field(() => move_damage_classesCreateWithoutMovesInput, {nullable:false})
    @Type(() => move_damage_classesCreateWithoutMovesInput)
    create!: move_damage_classesCreateWithoutMovesInput;
}
