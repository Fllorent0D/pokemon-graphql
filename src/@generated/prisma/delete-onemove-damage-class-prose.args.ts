import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_damage_class_proseWhereUniqueInput } from '../move-damage-class-prose/move-damage-class-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnemoveDamageClassProseArgs {

    @Field(() => move_damage_class_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_damage_class_proseWhereUniqueInput)
    where!: move_damage_class_proseWhereUniqueInput;
}
