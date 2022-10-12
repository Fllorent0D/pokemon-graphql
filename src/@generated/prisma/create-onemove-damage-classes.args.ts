import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_damage_classesCreateInput } from '../move-damage-classes/move-damage-classes-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveDamageClassesArgs {

    @Field(() => move_damage_classesCreateInput, {nullable:false})
    @Type(() => move_damage_classesCreateInput)
    data!: move_damage_classesCreateInput;
}
