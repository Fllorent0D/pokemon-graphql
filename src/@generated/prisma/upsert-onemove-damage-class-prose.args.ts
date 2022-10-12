import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_damage_class_proseWhereUniqueInput } from '../move-damage-class-prose/move-damage-class-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_damage_class_proseCreateInput } from '../move-damage-class-prose/move-damage-class-prose-create.input';
import { move_damage_class_proseUpdateInput } from '../move-damage-class-prose/move-damage-class-prose-update.input';

@ArgsType()
export class UpsertOnemoveDamageClassProseArgs {

    @Field(() => move_damage_class_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_damage_class_proseWhereUniqueInput)
    where!: move_damage_class_proseWhereUniqueInput;

    @Field(() => move_damage_class_proseCreateInput, {nullable:false})
    @Type(() => move_damage_class_proseCreateInput)
    create!: move_damage_class_proseCreateInput;

    @Field(() => move_damage_class_proseUpdateInput, {nullable:false})
    @Type(() => move_damage_class_proseUpdateInput)
    update!: move_damage_class_proseUpdateInput;
}
