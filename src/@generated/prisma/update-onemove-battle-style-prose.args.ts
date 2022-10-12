import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_battle_style_proseUpdateInput } from '../move-battle-style-prose/move-battle-style-prose-update.input';
import { Type } from 'class-transformer';
import { move_battle_style_proseWhereUniqueInput } from '../move-battle-style-prose/move-battle-style-prose-where-unique.input';

@ArgsType()
export class UpdateOnemoveBattleStyleProseArgs {

    @Field(() => move_battle_style_proseUpdateInput, {nullable:false})
    @Type(() => move_battle_style_proseUpdateInput)
    data!: move_battle_style_proseUpdateInput;

    @Field(() => move_battle_style_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_battle_style_proseWhereUniqueInput)
    where!: move_battle_style_proseWhereUniqueInput;
}
