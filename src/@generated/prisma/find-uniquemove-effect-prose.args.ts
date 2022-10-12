import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_effect_proseWhereUniqueInput } from '../move-effect-prose/move-effect-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemoveEffectProseArgs {

    @Field(() => move_effect_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_effect_proseWhereUniqueInput)
    where!: move_effect_proseWhereUniqueInput;
}
