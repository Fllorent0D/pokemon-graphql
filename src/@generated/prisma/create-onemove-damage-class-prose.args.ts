import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_damage_class_proseCreateInput } from '../move-damage-class-prose/move-damage-class-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveDamageClassProseArgs {

    @Field(() => move_damage_class_proseCreateInput, {nullable:false})
    @Type(() => move_damage_class_proseCreateInput)
    data!: move_damage_class_proseCreateInput;
}
