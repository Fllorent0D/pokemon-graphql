import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_damage_classesUpdateManyMutationInput } from '../move-damage-classes/move-damage-classes-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_damage_classesWhereInput } from '../move-damage-classes/move-damage-classes-where.input';

@ArgsType()
export class UpdateManymoveDamageClassesArgs {

    @Field(() => move_damage_classesUpdateManyMutationInput, {nullable:false})
    @Type(() => move_damage_classesUpdateManyMutationInput)
    data!: move_damage_classesUpdateManyMutationInput;

    @Field(() => move_damage_classesWhereInput, {nullable:true})
    @Type(() => move_damage_classesWhereInput)
    where?: move_damage_classesWhereInput;
}
