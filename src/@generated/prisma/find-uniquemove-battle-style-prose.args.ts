import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_battle_style_proseWhereUniqueInput } from '../move-battle-style-prose/move-battle-style-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquemoveBattleStyleProseArgs {

    @Field(() => move_battle_style_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_battle_style_proseWhereUniqueInput)
    where!: move_battle_style_proseWhereUniqueInput;
}
