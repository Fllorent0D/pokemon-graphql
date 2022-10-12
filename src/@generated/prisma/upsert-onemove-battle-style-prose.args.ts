import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_battle_style_proseWhereUniqueInput } from '../move-battle-style-prose/move-battle-style-prose-where-unique.input';
import { Type } from 'class-transformer';
import { move_battle_style_proseCreateInput } from '../move-battle-style-prose/move-battle-style-prose-create.input';
import { move_battle_style_proseUpdateInput } from '../move-battle-style-prose/move-battle-style-prose-update.input';

@ArgsType()
export class UpsertOnemoveBattleStyleProseArgs {

    @Field(() => move_battle_style_proseWhereUniqueInput, {nullable:false})
    @Type(() => move_battle_style_proseWhereUniqueInput)
    where!: move_battle_style_proseWhereUniqueInput;

    @Field(() => move_battle_style_proseCreateInput, {nullable:false})
    @Type(() => move_battle_style_proseCreateInput)
    create!: move_battle_style_proseCreateInput;

    @Field(() => move_battle_style_proseUpdateInput, {nullable:false})
    @Type(() => move_battle_style_proseUpdateInput)
    update!: move_battle_style_proseUpdateInput;
}
