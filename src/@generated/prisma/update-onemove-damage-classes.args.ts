import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_damage_classesUpdateInput } from '../move-damage-classes/move-damage-classes-update.input';
import { Type } from 'class-transformer';
import { move_damage_classesWhereUniqueInput } from '../move-damage-classes/move-damage-classes-where-unique.input';

@ArgsType()
export class UpdateOnemoveDamageClassesArgs {

    @Field(() => move_damage_classesUpdateInput, {nullable:false})
    @Type(() => move_damage_classesUpdateInput)
    data!: move_damage_classesUpdateInput;

    @Field(() => move_damage_classesWhereUniqueInput, {nullable:false})
    @Type(() => move_damage_classesWhereUniqueInput)
    where!: move_damage_classesWhereUniqueInput;
}
