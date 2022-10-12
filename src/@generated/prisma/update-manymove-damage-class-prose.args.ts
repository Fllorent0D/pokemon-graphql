import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_damage_class_proseUpdateManyMutationInput } from '../move-damage-class-prose/move-damage-class-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_damage_class_proseWhereInput } from '../move-damage-class-prose/move-damage-class-prose-where.input';

@ArgsType()
export class UpdateManymoveDamageClassProseArgs {

    @Field(() => move_damage_class_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => move_damage_class_proseUpdateManyMutationInput)
    data!: move_damage_class_proseUpdateManyMutationInput;

    @Field(() => move_damage_class_proseWhereInput, {nullable:true})
    @Type(() => move_damage_class_proseWhereInput)
    where?: move_damage_class_proseWhereInput;
}
