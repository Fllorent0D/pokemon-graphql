import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_damage_classesWhereUniqueInput } from '../move-damage-classes/move-damage-classes-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnemoveDamageClassesArgs {

    @Field(() => move_damage_classesWhereUniqueInput, {nullable:false})
    @Type(() => move_damage_classesWhereUniqueInput)
    where!: move_damage_classesWhereUniqueInput;
}
