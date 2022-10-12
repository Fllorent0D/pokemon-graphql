import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_damage_classesUpdateWithoutStatsInput } from './move-damage-classes-update-without-stats.input';
import { Type } from 'class-transformer';
import { move_damage_classesCreateWithoutStatsInput } from './move-damage-classes-create-without-stats.input';

@InputType()
export class move_damage_classesUpsertWithoutStatsInput {

    @Field(() => move_damage_classesUpdateWithoutStatsInput, {nullable:false})
    @Type(() => move_damage_classesUpdateWithoutStatsInput)
    update!: move_damage_classesUpdateWithoutStatsInput;

    @Field(() => move_damage_classesCreateWithoutStatsInput, {nullable:false})
    @Type(() => move_damage_classesCreateWithoutStatsInput)
    create!: move_damage_classesCreateWithoutStatsInput;
}
