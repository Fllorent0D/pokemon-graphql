import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_damage_classesWhereUniqueInput } from '../move-damage-classes/move-damage-classes-where-unique.input';
import { Type } from 'class-transformer';
import { move_damage_classesCreateInput } from '../move-damage-classes/move-damage-classes-create.input';
import { move_damage_classesUpdateInput } from '../move-damage-classes/move-damage-classes-update.input';

@ArgsType()
export class UpsertOnemoveDamageClassesArgs {

    @Field(() => move_damage_classesWhereUniqueInput, {nullable:false})
    @Type(() => move_damage_classesWhereUniqueInput)
    where!: move_damage_classesWhereUniqueInput;

    @Field(() => move_damage_classesCreateInput, {nullable:false})
    @Type(() => move_damage_classesCreateInput)
    create!: move_damage_classesCreateInput;

    @Field(() => move_damage_classesUpdateInput, {nullable:false})
    @Type(() => move_damage_classesUpdateInput)
    update!: move_damage_classesUpdateInput;
}
