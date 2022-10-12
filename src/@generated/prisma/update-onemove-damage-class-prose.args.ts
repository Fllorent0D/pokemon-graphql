import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_damage_class_proseUpdateInput } from '../move-damage-class-prose/move-damage-class-prose-update.input';
import { Type } from 'class-transformer';
import { move_damage_class_proseWhereUniqueInput } from '../move-damage-class-prose/move-damage-class-prose-where-unique.input';

@ArgsType()
export class UpdateOnemoveDamageClassProseArgs {

    @Field(() => move_damage_class_proseUpdateInput, {nullable:false})
    @Type(() => move_damage_class_proseUpdateInput)
    data!: move_damage_class_proseUpdateInput;

    @Field(() => move_damage_class_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_damage_class_proseWhereUniqueInput)
    where!: move_damage_class_proseWhereUniqueInput;
}
