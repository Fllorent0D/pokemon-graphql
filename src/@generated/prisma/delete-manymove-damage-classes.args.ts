import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_damage_classesWhereInput } from '../move-damage-classes/move-damage-classes-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveDamageClassesArgs {

    @Field(() => move_damage_classesWhereInput, {nullable:true})
    @Type(() => move_damage_classesWhereInput)
    where?: move_damage_classesWhereInput;
}
